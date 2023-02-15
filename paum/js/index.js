const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navlink").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*Search*/

const searchBox = document.getElementById("home-search");
const bannerLinks = document.querySelectorAll(".b-link");
const searchWrapper = document.querySelector(".search-icon");
const realIcon = document.getElementById("s-icon");


let width = screen.width;

if (width > 661) {
  searchBox.addEventListener("click", () => {
    searchWrapper.style.position = "absolute";
    searchBox.style.width = "35vw";
    bannerLinks.forEach((link) => {
      link.style.visibility = "hidden";
    });
  });

  window.addEventListener("click", function (e) {
    if (searchWrapper.contains(e.target)) {
    } else {
      searchWrapper.style.position = "relative";
      searchBox.style.width = "100px";
      bannerLinks.forEach((link) => {
        link.style.visibility = "visible";
      });
    }
  });
}




const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();