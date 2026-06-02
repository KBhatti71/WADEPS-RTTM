document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("[data-text-size]"));
  const backToTopButton = document.querySelector(".back-to-top");
  const tocHeading = document.querySelector("#training-toc-heading");
  const manual = document.querySelector(".training-manual");
  const validSizes = new Set(["default", "large", "xl"]);
  const savedSize = localStorage.getItem("manualTextSize");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setTextSize(size) {
    const nextSize = validSizes.has(size) ? size : "default";
    localStorage.setItem("manualTextSize", nextSize);

    // Update class on manual content wrapper
    if (manual) {
      manual.classList.remove("text-size-default", "text-size-large", "text-size-xl");
      manual.classList.add("text-size-" + nextSize);
    }

    // Update buttons
    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-text-size") === nextSize;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);

      // Update checkmark
      const check = button.querySelector(".reading-tools__check");
      if (check) {
        check.textContent = isActive ? "\u2713" : "";
      }
    });

    announceToScreenReader("Text size set to " + nextSize.replace("xl", "extra large"));
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
    setTimeout(() => { liveRegion.textContent = message; }, 100);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setTextSize(button.getAttribute("data-text-size"));
    });
  });

  function toggleBackToTopButton() {
    if (!backToTopButton) return;
    backToTopButton.classList.toggle("is-visible", window.scrollY > 400);
  }

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      if (tocHeading) {
        tocHeading.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
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
