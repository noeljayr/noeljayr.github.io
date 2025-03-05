const cardsContainer = document.querySelector(".clients");

// Duplicate the container's content for a seamless loop
cardsContainer.innerHTML += cardsContainer.innerHTML;

const scrollSpeed = 1; // Adjust the speed as needed

function autoScroll() {
  // Increment the scroll position
  cardsContainer.scrollLeft += scrollSpeed;

  // When we've scrolled through the first half (original content), reset scrollLeft
  if (cardsContainer.scrollLeft >= cardsContainer.scrollWidth / 2) {
    cardsContainer.scrollLeft = 0;
  }
}

// Use requestAnimationFrame for smoother animation
function smoothScroll() {
  autoScroll();
  requestAnimationFrame(smoothScroll);
}

smoothScroll();
