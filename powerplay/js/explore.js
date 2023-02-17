const bannerContainer = document.querySelector(".banner-container");
const banners = Array.from(
  bannerContainer.querySelectorAll(".trending-banner")
);

let currentIndex = 0;

setInterval(() => {
  banners[currentIndex].style.opacity = 0;
  banners[currentIndex].style.zIndex = -1;
  currentIndex = (currentIndex + 1) % banners.length;
  banners[currentIndex].style.opacity = 1;
  banners[currentIndex].style.zIndex = 1;
}, 5000);
