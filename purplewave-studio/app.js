const tracks = [
  { id: 'kick', name: 'Kick', symbol: '◆', frequency: 70, pattern: [1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0], volume: 0.78, pan: 0, muted: false },
  { id: 'snare', name: 'Snare', symbol: '■', frequency: 180, pattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0], volume: 0.72, pan: 0, muted: false },
  { id: 'hat', name: 'Hi-Hat', symbol: '✦', frequency: 7000, pattern: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], volume: 0.6, pan: 0.18, muted: false },
  { id: 'clap', name: 'Clap', symbol: '▲', frequency: 1200, pattern: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1], volume: 0.65, pan: -0.18, muted: false }
];

const STORAGE_KEY = 'purplewave-studio-pattern-v1';
const SCHEDULE_AHEAD_TIME = 0.1;
const LOOKAHEAD_MS = 25;

const state = {
  playing: false,
  currentStep: 0,
  timer: null,
  audioContext: null,
  selectedTrack: 0,
  masterVolume: 0.8,
  runId: 0
};

let schedulerStep = 0;
let nextNoteTime = 0;

const sequencer = document.getElementById('sequencer');
const mixer = document.getElementById('mixer');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const recordButton = document.getElementById('record');
const bpmInput = document.getElementById('bpm');
const swingInput = document.getElementById('swing');
const status = document.getElementById('status');
const selectedTrackTitle = document.getElementById('selected-track');
const volume = document.getElementById('volume');
const volumeOutput = document.getElementById('volume-output');
const pan = document.getElementById('pan');
const panOutput = document.getElementById('pan-output');
const workspace = document.getElementById('workspace');
const inspector = document.getElementById('inspector');
const inspectorToggle = document.getElementById('inspector-toggle');
const inspectorClose = document.getElementById('inspector-close');
const exportButton = document.getElementById('export');
const collaborateButton = document.getElementById('collaborate');
const aiMixButton = document.getElementById('ai-mix');
const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
const soundBrowser = document.getElementById('sound-browser');

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function ensureAudio() {
  if (!state.audioContext) state.audioContext = new AudioContext();
  if (state.audioContext.state === 'suspended') state.audioContext.resume();
}

function createPanNode(ctx, panValue) {
  if (typeof ctx.createStereoPanner === 'function') {
    const node = ctx.createStereoPanner();
    node.pan.value = panValue;
    return node;
  }
  const node = ctx.createPanner();
  node.panningModel = 'equalpower';
  node.setPosition(panValue, 0, 1 - Math.abs(panValue));
  return node;
}

function renderTrackSound(ctx, destination, track, time) {
  const level = track.volume * state.masterVolume;
  if (track.muted || level <= 0.0001) return;

  const gain = ctx.createGain();
  const panNode = createPanNode(ctx, track.pan);
  gain.connect(panNode).connect(destination);

  if (track.id === 'hat' || track.id === 'clap') {
    const duration = track.id === 'hat' ? 0.05 : 0.12;
    const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    filter.type = track.id === 'hat' ? 'highpass' : 'bandpass';
    filter.frequency.value = track.frequency;
    gain.gain.setValueAtTime(0.22 * level, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
    source.buffer = buffer;
    source.connect(filter).connect(gain);
    source.start(time);
    return;
  }

  const oscillator = ctx.createOscillator();
  oscillator.type = track.id === 'kick' ? 'sine' : 'triangle';
  oscillator.frequency.setValueAtTime(track.frequency, time);
  if (track.id === 'kick') oscillator.frequency.exponentialRampToValueAtTime(35, time + 0.12);
  const duration = track.id === 'kick' ? 0.18 : 0.12;
  gain.gain.setValueAtTime((track.id === 'kick' ? 0.8 : 0.35) * level, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
  oscillator.connect(gain);
  oscillator.start(time);
  oscillator.stop(time + 0.2);
}

function computeStepDuration(bpm) {
  const clamped = clamp(Number(bpm) || 128, 50, 220);
  return 60 / clamped / 4;
}

function stepInterval(stepIndex) {
  const base = computeStepDuration(bpmInput.value);
  const swing = clamp(Number(swingInput.value) || 0, 0, 70) / 100;
  const isOffbeat = stepIndex % 2 === 1;
  return base * (isOffbeat ? 1 + swing : 1 - swing * 0.35);
}

function scheduleStep(step, time) {
  tracks.forEach(track => {
    if (track.pattern[step]) renderTrackSound(state.audioContext, state.audioContext.destination, track, time);
  });
  const delayMs = Math.max(0, (time - state.audioContext.currentTime) * 1000);
  const runId = state.runId;
  window.setTimeout(() => {
    if (!state.playing || runId !== state.runId) return;
    state.currentStep = step;
    renderSequencer();
  }, delayMs);
}

function scheduler() {
  const ctx = state.audioContext;
  while (nextNoteTime < ctx.currentTime + SCHEDULE_AHEAD_TIME) {
    scheduleStep(schedulerStep, nextNoteTime);
    nextNoteTime += stepInterval(schedulerStep);
    schedulerStep = (schedulerStep + 1) % 16;
  }
  state.timer = window.setTimeout(scheduler, LOOKAHEAD_MS);
}

function renderSequencer() {
  sequencer.innerHTML = '';
  tracks.forEach((track, trackIndex) => {
    const row = document.createElement('div');
    row.className = 'sequence-row';
    const label = document.createElement('button');
    label.className = 'sequence-label';
    label.type = 'button';
    label.innerHTML = `<span>${track.symbol}</span><b>${track.name}</b>`;
    label.addEventListener('click', () => selectTrack(trackIndex));
    row.appendChild(label);

    track.pattern.forEach((active, stepIndex) => {
      const step = document.createElement('button');
      step.type = 'button';
      step.className = `step${active ? ' active' : ''}${state.currentStep === stepIndex && state.playing ? ' current' : ''}`;
      step.setAttribute('aria-pressed', String(Boolean(active)));
      step.setAttribute('aria-label', `${track.name}, step ${stepIndex + 1}, ${active ? 'active' : 'inactive'}`);
      step.addEventListener('click', () => {
        track.pattern[stepIndex] = track.pattern[stepIndex] ? 0 : 1;
        if (track.pattern[stepIndex] && !state.playing) {
          ensureAudio();
          renderTrackSound(state.audioContext, state.audioContext.destination, track, state.audioContext.currentTime);
        }
        renderSequencer();
      });
      row.appendChild(step);
    });
    sequencer.appendChild(row);
  });
}

function meterHeights(level) {
  return [level * 90, level * 70, level * 55].map(v => clamp(v, 6, 95));
}

function renderMixer() {
  mixer.innerHTML = '';
  const channelTracks = [...tracks, { id: 'master', name: 'Master' }];
  channelTracks.forEach(track => {
    const isMaster = track.id === 'master';
    const level = isMaster ? state.masterVolume : track.volume;

    const channel = document.createElement('div');
    channel.className = 'channel';
    channel.innerHTML = `<strong>${track.name.toUpperCase()}</strong><div class="meter">${meterHeights(level).map(v => `<span style="height:${v}%"></span>`).join('')}</div>`;

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.value = String(Math.round(level * 100));
    slider.setAttribute('aria-label', `${track.name} volume`);
    slider.addEventListener('input', () => {
      const value = Number(slider.value) / 100;
      if (isMaster) {
        state.masterVolume = value;
      } else {
        track.volume = value;
        if (tracks[state.selectedTrack] === track) syncInspector();
      }
      channel.querySelectorAll('.meter span').forEach((el, i) => { el.style.height = `${meterHeights(value)[i]}%`; });
    });
    channel.appendChild(slider);

    if (!isMaster) {
      const mute = document.createElement('button');
      mute.type = 'button';
      mute.className = `mute-button${track.muted ? ' active' : ''}`;
      mute.textContent = 'M';
      mute.setAttribute('aria-pressed', String(Boolean(track.muted)));
      mute.setAttribute('aria-label', `Mute ${track.name}`);
      mute.addEventListener('click', () => {
        track.muted = !track.muted;
        mute.classList.toggle('active', track.muted);
        mute.setAttribute('aria-pressed', String(track.muted));
        status.textContent = `${track.name} ${track.muted ? 'muted' : 'unmuted'}`;
      });
      channel.appendChild(mute);
    }

    mixer.appendChild(channel);
  });
}

function syncInspector() {
  const track = tracks[state.selectedTrack];
  volume.value = String(Math.round(track.volume * 100));
  volumeOutput.textContent = `${volume.value}%`;
  const panValue = Math.round(track.pan * 100);
  pan.value = String(panValue);
  panOutput.textContent = panValue === 0 ? 'Center' : panValue < 0 ? `${Math.abs(panValue)}L` : `${panValue}R`;
}

function selectTrack(index) {
  state.selectedTrack = index;
  selectedTrackTitle.textContent = tracks[index].name;
  syncInspector();
  status.textContent = `${tracks[index].name} selected`;
}

function start() {
  if (state.playing) return;
  ensureAudio();
  state.playing = true;
  state.runId += 1;
  schedulerStep = state.currentStep;
  nextNoteTime = state.audioContext.currentTime + 0.05;
  playButton.classList.add('active');
  playButton.textContent = 'Ⅱ';
  playButton.setAttribute('aria-label', 'Pause');
  status.textContent = 'Playback started';
  scheduler();
}

function pause() {
  state.playing = false;
  window.clearTimeout(state.timer);
  playButton.classList.remove('active');
  playButton.textContent = '▶';
  playButton.setAttribute('aria-label', 'Play');
  renderSequencer();
  status.textContent = 'Playback paused';
}

function stop() {
  pause();
  state.currentStep = 0;
  schedulerStep = 0;
  renderSequencer();
  status.textContent = 'Playback stopped';
}

playButton.addEventListener('click', () => state.playing ? pause() : start());
stopButton.addEventListener('click', stop);
recordButton.addEventListener('click', () => {
  recordButton.classList.toggle('active');
  const active = recordButton.classList.contains('active');
  recordButton.setAttribute('aria-label', active ? 'Disarm recording' : 'Arm recording');
  status.textContent = active ? 'Recording armed' : 'Recording disarmed';
});

document.getElementById('clear').addEventListener('click', () => {
  tracks.forEach(track => track.pattern.fill(0));
  renderSequencer();
  status.textContent = 'Pattern cleared';
});

document.getElementById('randomize').addEventListener('click', () => {
  tracks.forEach((track, trackIndex) => {
    track.pattern = track.pattern.map((_, step) => {
      if (trackIndex === 0 && step % 4 === 0) return 1;
      if (trackIndex === 1 && (step === 4 || step === 12)) return 1;
      return Math.random() > (trackIndex === 2 ? 0.45 : 0.78) ? 1 : 0;
    });
  });
  renderSequencer();
  status.textContent = 'New pattern generated';
});

volume.addEventListener('input', () => {
  const track = tracks[state.selectedTrack];
  track.volume = Number(volume.value) / 100;
  volumeOutput.textContent = `${volume.value}%`;
  renderMixer();
});
pan.addEventListener('input', () => {
  const track = tracks[state.selectedTrack];
  const value = Number(pan.value);
  track.pan = value / 100;
  panOutput.textContent = value === 0 ? 'Center' : value < 0 ? `${Math.abs(value)}L` : `${value}R`;
});

document.querySelectorAll('.effect-chip').forEach(button => {
  button.addEventListener('click', () => {
    const pressed = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!pressed));
    status.textContent = `${button.textContent.trim()} ${pressed ? 'disabled' : 'enabled'}`;
  });
});

aiMixButton.addEventListener('click', () => {
  const suggestions = {
    kick: { volume: 0.8, pan: 0 },
    snare: { volume: 0.74, pan: 0 },
    hat: { volume: 0.52, pan: 0.22 },
    clap: { volume: 0.58, pan: -0.2 }
  };
  tracks.forEach(track => {
    const suggestion = suggestions[track.id];
    if (suggestion) {
      track.volume = suggestion.volume;
      track.pan = suggestion.pan;
    }
  });
  renderMixer();
  syncInspector();
  status.textContent = 'AI mix suggestion applied: balanced levels and stereo width';
});

collaborateButton.addEventListener('click', () => {
  status.textContent = 'Collaboration requires a PurpleWave account. Sign-in is coming in a future update.';
});

// --- Inspector open/close ---
function setInspectorOpen(open) {
  inspector.hidden = !open;
  workspace.classList.toggle('inspector-hidden', !open);
  workspace.classList.remove('mobile-inspector-open');
  inspectorToggle.setAttribute('aria-expanded', String(open));
  inspectorToggle.classList.toggle('active', open);
  document.getElementById('mobile-more').setAttribute('aria-expanded', 'false');
}
inspectorToggle.addEventListener('click', () => setInspectorOpen(inspector.hidden));
inspectorClose.addEventListener('click', () => setInspectorOpen(false));

// --- Sound library ---
document.querySelectorAll('.library-item').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.library-item').forEach(b => b.classList.toggle('active', b === button));
    workspace.classList.remove('mobile-sounds-open');
    document.getElementById('mobile-sounds').setAttribute('aria-expanded', 'false');
    status.textContent = `${button.querySelector('b').textContent} library selected`;
  });
});

// --- Studio view tabs (desktop + mobile share data-view) ---
const viewPanels = document.querySelectorAll('[data-view-panel]');
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => {
    const view = button.dataset.view;
    document.querySelectorAll('[data-view]').forEach(b => {
      const active = b.dataset.view === view;
      b.classList.toggle('active', active);
      b.setAttribute('aria-current', String(active));
    });
    if (view === 'mix') {
      document.getElementById('mixer-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMixerView('mixer');
    } else {
      viewPanels.forEach(panel => { panel.hidden = panel.dataset.viewPanel !== view; });
    }
    status.textContent = `${button.textContent.trim()} view selected`;
  });
});

// --- Mixer panel tabs ---
const mixerPanels = document.querySelectorAll('[data-mixer-panel]');
function setMixerView(view) {
  document.querySelectorAll('[data-mixerview]').forEach(b => {
    const active = b.dataset.mixerview === view;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', String(active));
  });
  mixerPanels.forEach(panel => { panel.hidden = panel.dataset.mixerPanel !== view; });
}
document.querySelectorAll('[data-mixerview]').forEach(button => {
  button.addEventListener('click', () => {
    setMixerView(button.dataset.mixerview);
    status.textContent = `${button.textContent.trim()} view selected`;
  });
});

// --- Mobile nav actions ---
document.getElementById('mobile-sounds').addEventListener('click', () => {
  const open = !workspace.classList.contains('mobile-sounds-open');
  workspace.classList.toggle('mobile-sounds-open', open);
  workspace.classList.remove('mobile-inspector-open');
  document.getElementById('mobile-sounds').setAttribute('aria-expanded', String(open));
});
document.getElementById('mobile-play').addEventListener('click', () => state.playing ? pause() : start());
document.getElementById('mobile-more').addEventListener('click', () => {
  const open = !workspace.classList.contains('mobile-inspector-open');
  inspector.hidden = false;
  workspace.classList.toggle('mobile-inspector-open', open);
  workspace.classList.remove('mobile-sounds-open');
  document.getElementById('mobile-more').setAttribute('aria-expanded', String(open));
});

// --- Save / Load pattern ---
function savePattern() {
  const data = {
    bpm: bpmInput.value,
    swing: swingInput.value,
    masterVolume: state.masterVolume,
    tracks: tracks.map(track => ({ id: track.id, pattern: track.pattern.slice(), volume: track.volume, pan: track.pan, muted: track.muted }))
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    status.textContent = 'Pattern saved';
  } catch (error) {
    status.textContent = 'Save failed: storage unavailable';
  }
}

function loadPattern() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    status.textContent = 'No saved pattern found';
    return;
  }
  try {
    const data = JSON.parse(raw);
    if (data.bpm) bpmInput.value = data.bpm;
    if (data.swing !== undefined) swingInput.value = data.swing;
    if (typeof data.masterVolume === 'number') state.masterVolume = data.masterVolume;
    (data.tracks || []).forEach(saved => {
      const track = tracks.find(t => t.id === saved.id);
      if (!track) return;
      if (Array.isArray(saved.pattern) && saved.pattern.length === 16) track.pattern = saved.pattern.slice();
      if (typeof saved.volume === 'number') track.volume = saved.volume;
      if (typeof saved.pan === 'number') track.pan = saved.pan;
      track.muted = Boolean(saved.muted);
    });
    renderSequencer();
    renderMixer();
    syncInspector();
    status.textContent = 'Pattern loaded';
  } catch (error) {
    status.textContent = 'Load failed: saved data is corrupted';
  }
}

saveButton.addEventListener('click', savePattern);
loadButton.addEventListener('click', loadPattern);

// --- WAV export ---
function encodeWav(audioBuffer) {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const numFrames = audioBuffer.length;
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const dataSize = numFrames * blockAlign;
  const arrayBuffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(arrayBuffer);

  function writeString(offset, str) {
    for (let i = 0; i < str.length; i += 1) view.setUint8(offset + i, str.charCodeAt(i));
  }

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bytesPerSample * 8, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  const channelData = [];
  for (let c = 0; c < numChannels; c += 1) channelData.push(audioBuffer.getChannelData(c));

  let offset = 44;
  for (let i = 0; i < numFrames; i += 1) {
    for (let c = 0; c < numChannels; c += 1) {
      const sample = clamp(channelData[c][i], -1, 1);
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }
  return new Blob([arrayBuffer], { type: 'audio/wav' });
}

async function exportPattern() {
  const sampleRate = state.audioContext ? state.audioContext.sampleRate : 44100;
  const stepDuration = computeStepDuration(bpmInput.value);
  const loopDuration = stepDuration * 16 + 0.3;
  const offline = new OfflineAudioContext(2, Math.ceil(sampleRate * loopDuration), sampleRate);

  for (let step = 0; step < 16; step += 1) {
    const time = step * stepDuration;
    tracks.forEach(track => {
      if (track.pattern[step]) renderTrackSound(offline, offline.destination, track, time);
    });
  }

  const rendered = await offline.startRendering();
  const blob = encodeWav(rendered);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'purplewave-pattern.wav';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

exportButton.addEventListener('click', async () => {
  const original = exportButton.textContent;
  exportButton.disabled = true;
  exportButton.textContent = 'Rendering…';
  try {
    await exportPattern();
    status.textContent = 'Pattern exported as WAV';
  } catch (error) {
    status.textContent = 'Export failed. Try again in a supported browser.';
  } finally {
    exportButton.disabled = false;
    exportButton.textContent = original;
  }
});

// --- Keyboard shortcut: space toggles play/pause ---
document.addEventListener('keydown', event => {
  if (event.code !== 'Space') return;
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'BUTTON' || tag === 'TEXTAREA' || tag === 'SELECT') return;
  event.preventDefault();
  state.playing ? pause() : start();
});

renderSequencer();
renderMixer();
selectTrack(0);
