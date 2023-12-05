const profileBtn = document.querySelector(".settings");

profileBtn.addEventListener("click", (e) => {
  profileBtn.classList.add("settings-active");
  e.stopPropagation();
});

window.addEventListener("click", (e) => {
  if (e.target != profileBtn) {
    profileBtn.classList.remove("settings-active");
  }
});
