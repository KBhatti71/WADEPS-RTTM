document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll("[data-text-size]"));
  const backToTopButton = document.querySelector(".back-to-top");
  const tocHeading = document.querySelector("#toc-heading");
  const savedSize = localStorage.getItem("manualTextSize") || "default";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function setTextSize(size) {
    document.body.setAttribute("data-text-size", size);
    localStorage.setItem("manualTextSize", size);

    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-text-size") === size;
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

  setTextSize(savedSize);
});
