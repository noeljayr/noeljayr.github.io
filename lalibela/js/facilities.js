function setupImageSlider(facilityImg) {
  const images = facilityImg.querySelectorAll("img");
  const prevBtn = facilityImg.querySelector(".prev");
  const nextBtn = facilityImg.querySelector(".next");
  const circles = facilityImg.querySelectorAll(".controls span");

  let currentImageIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function showImage(index) {
    images[currentImageIndex].classList.remove("facility-img-active");
    circles[currentImageIndex].classList.remove("active-circle");
    currentImageIndex = index;
    images[currentImageIndex].classList.add("facility-img-active");
    circles[currentImageIndex].classList.add("active-circle");

    if (currentImageIndex === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    if (currentImageIndex === images.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

    function handleGesture() {
      if (touchEndX < touchStartX && currentImageIndex < images.length - 1) {
        showImage(currentImageIndex + 1);
      }
      if (touchEndX > touchStartX && currentImageIndex > 0) {
        showImage(currentImageIndex - 1);
      }
    }

  function onTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
  }

  function onTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
  }

  prevBtn.addEventListener("click", () => {
    showImage(currentImageIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showImage(currentImageIndex + 1);
  });

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
      showImage(index);
    });
  });

  facilityImg.addEventListener("touchstart", onTouchStart, false);
  facilityImg.addEventListener("touchend", onTouchEnd, false);

  showImage(currentImageIndex);
}


// Example usage: set up all image sliders on the page
const facilityImgs = document.querySelectorAll(".facility-img");
facilityImgs.forEach(setupImageSlider);
