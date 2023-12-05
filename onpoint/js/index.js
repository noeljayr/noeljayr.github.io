


/*

    Fetch the comments in decending order, the latest ones first

 */

const commentsContainer = document.querySelector(".comments-container");


function diplayComments() {
  comments.forEach((c) => {
    if(c.status != "Disapproved"){
      var card = document.createElement("div");
      card.className = "card";

      if (c.img == "" || c.img == null) {
        card.classList.add("no-img");
        pic = "default.svg";
      } else {
        pic = c.img;
      }
      card.innerHTML = `
            <p>${c.content}</p>
            <span class="client">
              <span class="client-img">
                <img src="public/images/${pic}" alt="" />
              </span>
              <span class="name">${c.name}</span>
            </span>
          `;

      commentsContainer.appendChild(card);
    }
  });
}


if(commentsContainer){
  diplayComments();
}
const latest = videos.slice(0, 3);

const videosContainer = document.querySelector(".video-container");

if(videosContainer){
  latest.forEach((video) => {
    // createPlayer(video)
    var videoDiv = document.createElement("div");
    videoDiv.className = "video";
    videoDiv.id = video.id;
    videoDiv.innerHTML = `
        
           <span class="thumbnail">
               <img src="public/videos/thumbnails/${video.thumbnail}" />
            </span>
            <a href="player.html#${videoDiv.id}" class="play-btn">
              <img
                src="public/icons/tabler-icon-player-play-filled.svg"
                alt=""
              />
            </a>
            <span title="${video.title}" class="title">${video.title}</span>
        `;
    videosContainer.appendChild(videoDiv);
  });

}

const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");

function showMoreServices(btn) {
  btn.style.display = "none";
  container1.style.marginBottom = "0";
  container2.style.display = "grid";
}

const cardsContainer = document.getElementById("cardsContainer");
let isScrolling = false;
let direction = 3;
let scrollSpeed = 1; // Variable to control scroll speed (initially set to 1)

function startAutoScroll() {
  if (!isScrolling) {
    isScrolling = true;
    const scrollInterval = setInterval(() => {
      if (!isScrolling) {
        clearInterval(scrollInterval);
        return;
      }
      cardsContainer.scrollLeft += direction * scrollSpeed; // Adjusted scroll speed

      // Check if reached the end of cards
      if (
        direction > 0 &&
        cardsContainer.scrollLeft >=
          cardsContainer.scrollWidth - cardsContainer.clientWidth
      ) {
        direction = -3; // Reverse direction
      } else if (direction < 0 && cardsContainer.scrollLeft <= 0) {
        direction = 3; // Reset direction
      }
    }, 50); // Adjust the interval as needed
  }
}
var windowWidth = window.innerWidth;

if (windowWidth < 800) {
  let direction = 1;
  function startAutoScroll() {
    if (!isScrolling) {
      isScrolling = true;
      const scrollInterval = setInterval(() => {
        if (!isScrolling) {
          clearInterval(scrollInterval);
          return;
        }
        cardsContainer.scrollLeft += direction * scrollSpeed; // Adjusted scroll speed

        // Check if reached the end of cards
        if (
          direction > 0 &&
          cardsContainer.scrollLeft >=
            cardsContainer.scrollWidth - cardsContainer.clientWidth
        ) {
          direction = -1; // Reverse direction
        } else if (direction < 0 && cardsContainer.scrollLeft <= 0) {
          direction = 1; // Reset direction
        }
      }, 50); // Adjust the interval as needed
    }
  }
}

window.addEventListener("resize", function () {
  var windowWidth = window.innerWidth;

  if (windowWidth < 800) {
    let direction = 1;
    function startAutoScroll() {
      if (!isScrolling) {
        isScrolling = true;
        const scrollInterval = setInterval(() => {
          if (!isScrolling) {
            clearInterval(scrollInterval);
            return;
          }
          cardsContainer.scrollLeft += direction * scrollSpeed; // Adjusted scroll speed

          // Check if reached the end of cards
          if (
            direction > 0 &&
            cardsContainer.scrollLeft >=
              cardsContainer.scrollWidth - cardsContainer.clientWidth
          ) {
            direction = -1; // Reverse direction
          } else if (direction < 0 && cardsContainer.scrollLeft <= 0) {
            direction = 1; // Reset direction
          }
        }, 50); // Adjust the interval as needed
      }
    }
  }
});
function stopAutoScroll() {
  isScrolling = false;
}

const commentCards = cardsContainer.querySelectorAll(".card");

commentCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    scrollSpeed = 0.5; // Halve the scroll speed when hovering over a card
  });

  card.addEventListener("mouseleave", () => {
    scrollSpeed = 1; // Reset the scroll speed when not hovering over a card
  });

  card.addEventListener("click", stopAutoScroll);

  card.addEventListener("touchstart", stopAutoScroll);
});

let timeoutId;
cardsContainer.addEventListener("scroll", () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(startAutoScroll, 10000); // 10 seconds for demonstration, adjust as needed
});

startAutoScroll();



const leftBtn = document.querySelector(".prev");
const rightBtn = document.querySelector(".next");
const btnWrapper = document.querySelector(".controls");
const wrapper = document.querySelector(".team-container");

function updateScrollButtons() {
  const scrollLeftWithPadding = wrapper.scrollLeft;
  const scrollRightWithPadding =
    wrapper.scrollWidth -
    wrapper.offsetWidth -
    1.5 * parseFloat(getComputedStyle(wrapper).paddingRight);

  if (scrollLeftWithPadding <= 0) {
    leftBtn.classList.remove("show-btn");
  } else {
    leftBtn.classList.add("show-btn");
  }

  if (wrapper.scrollLeft >= scrollRightWithPadding) {
    rightBtn.classList.remove("show-btn");
  } else {
    rightBtn.classList.add("show-btn");
  }
}

leftBtn.addEventListener("click", function () {
  if (wrapper.scrollLeft > 0) {
    wrapper.scrollLeft -= 150;
  }
  updateScrollButtons();
});

rightBtn.addEventListener("click", function () {
  if (wrapper.scrollLeft < wrapper.scrollWidth - wrapper.offsetWidth) {
    wrapper.scrollLeft += 150;
  }
  updateScrollButtons();
});

wrapper.addEventListener("scroll", updateScrollButtons);