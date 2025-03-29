document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".hero-grid span, .hero-grid a, .hero-grid div"
  );

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addClassOnScroll() {
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("in-view");
      }
    });
  }

  window.addEventListener("scroll", addClassOnScroll);
  window.addEventListener("resize", addClassOnScroll);

  // Initial check
  addClassOnScroll();
});

window.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(
    ".projects-container .project, .hide"
  );

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const bounding = project.getBoundingClientRect();

    if (
      bounding.top < window.innerHeight * 0.75 &&
      bounding.bottom > window.innerHeight * 0.25
    ) {
      project.classList.add("visible"); // Add CSS class for animated visibility
    } else {
      //   project.classList.remove("visible");
    }
  }
});
