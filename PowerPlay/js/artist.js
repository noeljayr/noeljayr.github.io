var songNumber = document.querySelectorAll(".popular-song .left .index");
let discoindex = document.querySelectorAll(".discography-song .left .index");
var num = 1;
for (let i = 0; i < songNumber.length; i++) {
  songNumber[i].innerText = num;
  num = num + 1;
}

var indexNum = 1;

for (let i = 0; i < discoindex.length; i++) {
  discoindex[i].innerText = indexNum;
  indexNum = indexNum + 1;
}

var popularSongs = document.querySelectorAll(
  ".popular-songs-container .popular-song"
);

let discographySongs = document.querySelectorAll(".discography-song");

function showFivePopSongs() {
  for (let i = 0; i < popularSongs.length; i++) {
    if (i > 4) {
      popularSongs[i].style.display = "none";
    }
  }
}

function showFiveDiscoSongs() {
  for (let i = 0; i < discographySongs.length; i++) {
    if (i > 4) {
      discographySongs[i].style.display = "none";
    }
  }
}

showFivePopSongs();
showFiveDiscoSongs();

const seeMoreBtn = document.querySelector(".show-all-popular");
const showAllBtn = document.querySelector(".show-all-discography-songs");

seeMoreBtn.addEventListener("click", () => {
  if (seeMoreBtn.textContent == "See More") {
    showAllSongs();
    seeMoreBtn.textContent = "See Less";
  } else {
    showFivePopSongs();
    seeMoreBtn.textContent = "See More";
  }
});

function showAllSongs() {
  popularSongs.forEach((song) => {
    song.style.display = "grid";
  });
}

function showAllDisoSongs() {
  discographySongs.forEach((song) => {
    song.style.display = "grid";
  });
}

function showFourCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i > 3) {
      arr[i].style.display = "none";
    }
  }
}

function showAllCards(arr) {
  arr.forEach((card) => {
    card.style.display = "flex";
  });
}

const albumCards = document.querySelectorAll(".artist-album-card");
const playlistCards = document.querySelectorAll(".artist-playlist-card");

showFourCards(albumCards);
showFourCards(playlistCards);

/*artist tabs*/

const discographyTabs = document.querySelector(".discography-tabs");
const discTabs = document.querySelectorAll(".discography-tabs .tab");
const tracker = document.querySelector(".tracker");

const mainContent = document.querySelector(".main-content");

mainContent.addEventListener("scroll", () => {
  const rect = discographyTabs.getBoundingClientRect();
  trackerRect = tracker.getBoundingClientRect();

  if (trackerRect.bottom <= 60) {
    discographyTabs.classList.add("sticky-top");
  } else {
    discographyTabs.classList.remove("sticky-top");
  }
});

const artistAlbumContainer = document.querySelector(".artist-album-container");

const allSingles = document.querySelector(".discography-all-songs");
const artistPlaylistContainer = document.querySelector(
  ".artist-playlist-container"
);

const release = document.querySelector(".recent-release");

discographyTabs.addEventListener("click", (event) => {
  // Get the clicked tab element
  const clickedTab = event.target;

  // If the clicked element is not a tab, return
  if (!clickedTab.classList.contains("tab")) {
    return;
  }

  // Remove the active-tab class from all tabs
  const discTabs = discographyTabs.querySelectorAll(".tab");

  discTabs.forEach((tab) => tab.classList.remove("active-tab"));

  //Add the active-tab class to the clicked tab
  clickedTab.classList.add("active-tab");

  console.log(clickedTab.dataset.title);
  if (clickedTab.dataset.title === "Albums & EPs") {
    showFiveDiscoSongs();
    artistPlaylistContainer.style.display = "none";

    allSingles.style.display = "none";
    artistAlbumContainer.style.display = "grid";
    release.style.display = "none";
    showFourCards(playlistCards);

    showAllCards(albumCards);
  } else if (clickedTab.dataset.title === "Playlists") {
    showFiveDiscoSongs();
    release.style.display = "none";
    artistAlbumContainer.style.display = "none";

    allSingles.style.display = "none";

    showFourCards(albumCards);
    release.style.display = "none";
    artistPlaylistContainer.style.display = "grid";
    showAllCards(playlistCards);
  } else if (clickedTab.dataset.title === "Singles") {
    artistPlaylistContainer.style.display = "none";

    artistAlbumContainer.style.display = "none";
    allSingles.style.display = "grid";
    release.style.display = "none";
    showFourCards(playlistCards);

    showFourCards(albumCards);
    showAllDisoSongs();
  }
});

$(".select-dropdown__button").on("click", function () {
  $(".select-dropdown__list").toggleClass("active");
});
$(".select-dropdown__list-item").on("click", function () {
  var itemValue = $(this).data("value");
  console.log(itemValue);
  $(".select-dropdown__button span")
    .text($(this).text())
    .parent()
    .attr("data-value", itemValue);
  $(".select-dropdown__list").toggleClass("active");
});

const followBtn = document.querySelector(".following-btn");

followBtn.addEventListener("click", () => {
  if (followBtn.querySelector("span").textContent == "Follow") {
    followBtn.querySelector("span").textContent = "Following";
    followBtn.classList.add("following-active");
  } else {
    followBtn.querySelector("span").textContent = "Follow";
    followBtn.classList.remove("following-active");
  }
});

const artistCloseBtn = document.querySelector(".info-content .top i");
const infoOverlay = document.querySelector(".artist-info-overlay");
const infoBtn = document.querySelector(".info-btn");
artistCloseBtn.addEventListener("click", () => {
  infoOverlay.classList.remove("info-active");
});

infoBtn.addEventListener("click", () => {
  infoOverlay.classList.add("info-active");
});

var links = document.querySelectorAll(".single-page-app-link");

var loadedScripts = {};

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var contentDiv = document.getElementById("spa-main");

    contentDiv.style.display = "flex";
    // Remove active class from all links
    links.forEach(function (link) {
      link.classList.remove("link-active");
    });

    // Add active class to clicked link
    this.classList.add("link-active");

    var url = this.getAttribute("href");

    fetch("/templates" + url + ".html")
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        contentDiv.innerHTML = html;

        // Check if the script for the current url has already been loaded
        if (!loadedScripts[url]) {
          // Create a script element
          var script = document.createElement("script");

          // Set the src attribute to the path of the JavaScript file
          script.src = "/js" + url + ".js";

          // Append the script element to the contentDiv element
          contentDiv.appendChild(script);

          // Add the url to the list of loaded scripts
          loadedScripts[url] = true;
        }

        history.pushState({ url: url }, "", url);
      });
  });
});
