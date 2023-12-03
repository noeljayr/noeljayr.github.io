const tabs = document.querySelectorAll(".tabs span");
const advetsTab = document.querySelector(".adverts");
const testimonialsTab = document.querySelector(".testimonials");

const tabsContainer = document.querySelector(".tabs");

tabsContainer.addEventListener("click", (event) => {
  const clickedTab = event.target.closest("span");

  if (clickedTab && tabsContainer.contains(clickedTab)) {
    tabs.forEach((t) => {
      t.classList.remove("active-tab");
    });

    clickedTab.classList.add("active-tab");
    if (clickedTab.textContent == "Adverts") {
      testimonialsTab.classList.remove("testimonials-active");
      testimonialsTab.classList.add("testimonials-inctive");
      advetsTab.classList.remove("adverts-inctive");
      advetsTab.classList.add("adverts-active");
    } else {
      advetsTab.classList.remove("adverts-active");
      advetsTab.classList.add("adverts-inctive");
      testimonialsTab.classList.remove("testimonials-inctive");
      testimonialsTab.classList.add("testimonials-active");
    }
  }
});

const testimonialVids = testimonialsTab.querySelector(".video-container");
const advertVids = advetsTab.querySelector(".video-container");



videos.forEach((video) => {
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
  if (video.category === "Advert") {
    advertVids.appendChild(videoDiv);
  } else {
    testimonialVids.appendChild(videoDiv);
  }
});
