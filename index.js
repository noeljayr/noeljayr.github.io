const loader = document.querySelector(".loader-overlay");

window.addEventListener("load", () => {
  loader.classList.add("loaded");


  window.setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-in-hidden")) {
            entry.target.classList.add("fade-in-show");
          } else if (entry.target.classList.contains("hidden")) {
            entry.target.classList.add("show");
          } else if (entry.target.classList.contains("fly-in-right-hidden")) {
            entry.target.classList.add("fly-in-right-show");
          } else {
            entry.target.classList.add("pop-in-show");
          }
        }
        // else {
        //     if (entry.target.classList.contains("fade-in-hidden")) {
        //       entry.target.classList.remove("fade-in-show");
        //     } else if (entry.target.classList.contains("hidden")) {
        //       entry.target.classList.remove("show");
        //     } else if (entry.target.classList.contains("fly-in-right-hidden")) {
        //       entry.target.classList.remove("fly-in-right-show");
        //     } else {
        //       entry.target.classList.remove("pop-in-show");
        //     }
        //   }
        //
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    const fadeInElements = document.querySelectorAll(".fade-in-hidden");
    const flyRight = document.querySelectorAll(".fly-in-right-hidden");
    const popIn = document.querySelectorAll(".pop-in-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
    fadeInElements.forEach((el) => observer.observe(el));
    flyRight.forEach((el) => observer.observe(el));
    popIn.forEach((el) => observer.observe(el));
  }, 2000)
});

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const btnWrapper = document.querySelector(".btn-container");
const wrapper = document.querySelector(".project-wrapper");

leftBtn.addEventListener("click", function () {
  wrapper.scrollLeft -= 200;
});

rightBtn.addEventListener("click", function () {
  wrapper.scrollLeft += 200;
});

function checkOverflowX(wrapper) {
  return wrapper.offsetWidth < wrapper.scrollWidth;
}

const isOverflowingX = checkOverflowX(wrapper);

if (isOverflowingX) {
  btnWrapper.style.display = "flex";
} else {
  btnWrapper.style.display = "none";
}

window.addEventListener("resize", function () {
  if (isOverflowingX) {
    btnWrapper.style.display = "flex";
  } else {
    btnWrapper.style.display = "none";
  }
});

const menu = document.querySelector(".menu");
const btn = menu.querySelector(".nav-tgl");
const navMenu = document.querySelector(".nav");
btn.addEventListener("click", (evt) => {
  menu.classList.toggle("active");
  navMenu.classList.toggle("nav-active");
});

const navlinks = document.querySelectorAll(".nav-link");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    navMenu.classList.remove("nav-active");
  });
});

const navBar = document.querySelector(".navbar");

let navBarHeight = navBar.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navBarHeight + "px"
);



