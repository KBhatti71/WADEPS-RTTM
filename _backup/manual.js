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
