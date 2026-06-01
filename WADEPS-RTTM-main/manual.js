document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("[data-text-size]"));
  const backToTopButton = document.querySelector(".back-to-top");
  const tocHeading = document.querySelector("#toc-heading");
  const validSizes = new Set(["default", "large", "extra-large"]);
  const savedSize = localStorage.getItem("manualTextSize");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setTextSize(size) {
    const nextSize = validSizes.has(size) ? size : "default";
    document.body.setAttribute("data-text-size", nextSize);
    localStorage.setItem("manualTextSize", nextSize);

    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-text-size") === nextSize;
      button.setAttribute("aria-pressed", String(isActive));
    });

    // Announce the change to screen readers
    announceToScreenReader(`Text size set to ${nextSize.replace("-", " ")}`);
  }

  // Create a live region for status announcements
  const liveRegion = document.createElement("div");
  liveRegion.setAttribute("role", "status");
  liveRegion.setAttribute("aria-live", "polite");
  liveRegion.setAttribute("aria-atomic", "true");
  liveRegion.classList.add("sr-only");
  document.body.appendChild(liveRegion);

  function announceToScreenReader(message) {
    liveRegion.textContent = "";
    // Small delay ensures the screen reader picks up the change
    setTimeout(() => { liveRegion.textContent = message; }, 100);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setTextSize(button.getAttribute("data-text-size"));
    });
  });

  function toggleBackToTopButton() {
    if (!backToTopButton) {
      return;
    }

    const shouldShow = window.scrollY > 400;
    backToTopButton.classList.toggle("is-visible", shouldShow);
  }

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      if (tocHeading) {
        tocHeading.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
        // Move focus to the TOC heading so screen readers announce the new position
        tocHeading.setAttribute("tabindex", "-1");
        tocHeading.focus({ preventScroll: true });
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion.matches ? "auto" : "smooth"
      });
    });

    window.addEventListener("scroll", toggleBackToTopButton, { passive: true });
    toggleBackToTopButton();
  }

  setTextSize(savedSize || "default");
});
