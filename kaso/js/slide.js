function setupImageSlider(cameraImg) {
  const slide = document.querySelector(".slide")
  const images = cameraImg.querySelectorAll("img");
  const prevBtn = slide.querySelector(".prev");
  const nextBtn = slide.querySelector(".next");
  const circles = slide.querySelectorAll(".controls span");

  let currentImageIndex = 1;
  let touchStartX = 0;
  let touchEndX = 0;

  function showImage(index) {
    images[currentImageIndex].classList.remove("slide-img-active");
    circles[currentImageIndex].classList.remove("active");
    currentImageIndex = index;
    images[currentImageIndex].classList.add("slide-img-active");
    circles[currentImageIndex].classList.add("active");

    if (currentImageIndex === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    if (currentImageIndex === images.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
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

  cameraImg.addEventListener("touchstart", onTouchStart, false);
  cameraImg.addEventListener("touchend", onTouchEnd, false);

  showImage(currentImageIndex);
}


// Example usage: set up all image sliders on the page
const cameraImgs = document.querySelectorAll(".slide-img");
cameraImgs.forEach(setupImageSlider);
