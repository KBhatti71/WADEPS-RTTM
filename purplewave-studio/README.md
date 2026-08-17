# PurpleWave Studio — Interactive Prototype

A responsive, dependency-free browser music studio prototype.

## Run it

Open `index.html` in Chrome, Edge, Firefox, or Safari.

For the most reliable local experience, run a simple local server from this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Included

- Responsive desktop, tablet, and phone layouts, with working mobile drawers for the sound library and inspector
- Purple, black, white, and gold design system
- Playable 16-step drum sequencer with sample-accurate lookahead scheduling (no timer drift)
- Synthesized kick, snare, hi-hat, and clap sounds using Web Audio
- Per-track volume, pan, and mute that actually affect playback, wired between the inspector and the mixer
- BPM and swing controls, plus a Space-bar play/pause shortcut
- Pattern clear, randomize, save, and load (persisted to the browser via `localStorage`)
- WAV export of the current pattern loop (rendered offline via `OfflineAudioContext`)
- An "AI Mix Suggestion" that applies a balanced level/pan preset across the kit
- Working view tabs (Arrange / Beats / Notes / Sample / Mix / DJ) and mixer tabs (Mixer / Piano Roll / Automation / Sampler) — tabs for features not yet built show a clearly labeled "coming soon" panel instead of doing nothing
- Accessible button labels, focus states, live status announcements, and a real open/close inspector panel

## Recommended next milestone

Move this interface into a TypeScript application and add:

1. Audio sample loading and drum kits
2. Project save/load using IndexedDB (current save/load uses `localStorage` and is pattern-only)
3. Piano roll and synth instrument
4. Sampler (load and chop your own audio)
5. Live-updating mixer meters driven by an `AnalyserNode`
6. User accounts and cloud projects (the Collaborate button currently just explains this is coming)
7. Two-deck DJ workspace
