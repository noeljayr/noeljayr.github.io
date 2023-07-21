const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const menuOverlay = document.querySelector(".menu-overlay");

menu.addEventListener("click", () => {
  menuOverlay.style.display = "block";
  menuList.classList.add("menu-active");
});

menuOverlay.addEventListener("click", () => {
  menuOverlay.style.display = "none";
  menuList.classList.remove("menu-active");
});
