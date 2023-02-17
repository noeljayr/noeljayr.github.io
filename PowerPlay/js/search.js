const SearchContainer = document.querySelector(".recent-search-container");
const searchInput = document.getElementById("main-search");
const removeIcons = document.querySelectorAll(".remove-icon");
const prevSearchContent = document.querySelectorAll(".search-content");
const searchResults = document.querySelector(".search-results");

searchInput.addEventListener("click", () => {
  if (searchInput.value.length == 0) {
    SearchContainer.style.display = "flex";
  }
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    SearchContainer.style.display = "none";
  } else {
    SearchContainer.style.display = "flex";
  }

  if (searchInput.value == "fbi") {
    searchResults.style.display = "flex"
  } else {
    searchResults.style.display = "none";
  }
});

window.addEventListener("click", function (e) {
  if (SearchContainer.contains(e.target)) {
  } else {
    if (!searchInput.contains(e.target)) {
      SearchContainer.style.display = "none";
    }
  } 
});

removeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    iconParent = icon.parentElement
    iconParent.style.display = "none"
  })
})

prevSearchContent.forEach((search) => {
  search.addEventListener("click", () => {
    searchInput.value = search.textContent
    SearchContainer.style.display = "none";
  })
   
})


const filterTabs = document.querySelector(".filter-search-tabs");

const topResult = document.querySelector(".top-result");
const topResultHeader = document.querySelector(".top-result-header");
const songResults = document.querySelector(".song-results");
const albumResults = document.querySelector(".album-results");
const playlistResults = document.querySelector(".playlist-results");
const artistResults = document.querySelector(".artist-results");
const podcastResults = document.querySelector(".podcast-results");

/*search */

const songRes = document.querySelectorAll(".song-res");
const albumRes = document.querySelectorAll(".album-res");
const playlistRes = document.querySelectorAll(".playlist-res");
const artistRes = document.querySelectorAll(".artists-res");
const podcastRes = document.querySelectorAll(".podcast-res");

function showFiveResults() {
  for (let i = 0; i < songRes.length; i++) {
    if (i > 4) {
      songRes[i].style.display = "none";
    }
  }

  for (let i = 0; i < albumRes.length; i++) {
    if (i > 4) {
      albumRes[i].style.display = "none";
    }
  }
  for (let i = 0; i < playlistRes.length; i++) {
    if (i > 4) {
      playlistRes[i].style.display = "none";
    }
  }
  for (let i = 0; i < artistRes.length; i++) {
    if (i > 4) {
      artistRes[i].style.display = "none";
    }
  }

  for (let i = 0; i < podcastRes.length; i++) {
    if (i > 4) {
      podcastRes[i].style.display = "none";
    }
  }
}

showFiveResults();

filterTabs.addEventListener("click", (event) => {
  // Get the clicked tab element
  const clickedTab = event.target;

  // If the clicked element is not a tab, return
  if (!clickedTab.classList.contains("tabs")) {
    return;
  }

  // Remove the active-tab class from all tabs
  const tabs = filterTabs.querySelectorAll(".tabs");
  tabs.forEach((tab) => tab.classList.remove("active-tab"));

  // Add the active-tab class to the clicked tab
  clickedTab.classList.add("active-tab");

  if (clickedTab.textContent === "Songs") {
    showSongs();
  } else if (clickedTab.textContent === "Playlists") {
    showPlaylists();
  } else if (clickedTab.textContent === "Artists") {
    showArtists();
  } else if (clickedTab.textContent === "Albums") {
    showAlbums();
  } else if (clickedTab.textContent === "Podcasts") {
    showPodcasts();
  } else {
    songResults.style.display = "";
    songResults.classList.remove("song-active-res");
    albumResults.classList.remove("album-active-res");
    albumResults.style.display = "";
    topResultHeader.style.display = "";
    playlistResults.style.display = "";
    playlistResults.classList.remove("playlist-active-res");
    artistResults.style.display = "";
    artistResults.classList.remove("artist-active-res");
    podcastResults.style.display = "";
    podcastResults.classList.remove("podcast-active-res");
    topResult.style.display = "block";
    showFiveResults();
  }
});

function showSongs() {
  songResults.style.display = "flex";
  songResults.classList.add("song-active-res");
  albumResults.style.display = "none";
  topResultHeader.style.display = "none";
  playlistResults.style.display = "none";
  playlistResults.classList.remove("playlist-active-res");
  artistResults.style.display = "none";
  artistResults.classList.remove("artist-active-res");
  podcastResults.style.display = "none";
  podcastResults.classList.remove("podcast-active-res");
  topResult.style.display = "none";

  if (songResults.classList.contains("song-active-res")) {
    songRes.forEach((res) => {
      res.style.display = "grid";
    });
  }
}

function showPlaylists() {
  songResults.style.display = "none";
  songResults.classList.remove("song-active-res");
  albumResults.style.display = "none";
  topResultHeader.style.display = "none";
  playlistResults.style.display = "grid";
  playlistResults.classList.add("playlist-active-res");
  artistResults.style.display = "none";
  artistResults.classList.remove("artist-active-res");
  podcastResults.style.display = "none";
  podcastResults.classList.remove("podcast-active-res");
  topResult.style.display = "none";

  if (playlistResults.classList.contains("playlist-active-res")) {
    playlistRes.forEach((res) => {
      res.style.display = "flex";
    });
  }
}

function showAlbums() {
  songResults.style.display = "none";
  songResults.classList.remove("song-active-res");
  albumResults.classList.add("album-active-res");
  albumResults.style.display = "grid";
  topResultHeader.style.display = "none";
  playlistResults.style.display = "none";
  playlistResults.classList.remove("playlist-active-res");
  artistResults.style.display = "none";
  artistResults.classList.remove("artist-active-res");
  podcastResults.style.display = "none";
  podcastResults.classList.remove("podcast-active-res");
  topResult.style.display = "none";

  if (albumResults.classList.contains("album-active-res")) {
    albumRes.forEach((res) => {
      res.style.display = "flex";
    });
  }
}

function showArtists() {
  songResults.style.display = "none";
  songResults.classList.remove("song-active-res");
  albumResults.style.display = "none";
  albumResults.classList.remove("album-active-res");
  topResultHeader.style.display = "none";
  playlistResults.style.display = "none";
  playlistResults.classList.remove("playlist-active-res");
  artistResults.style.display = "grid";
  artistResults.classList.add("artist-active-res");
  podcastResults.style.display = "none";
  podcastResults.classList.remove("podcast-active-res");
  topResult.style.display = "none";

  if (artistResults.classList.contains("artist-active-res")) {
    artistRes.forEach((res) => {
      res.style.display = "flex";
    });
  }
}

function showPodcasts() {
  songResults.style.display = "none";
  songResults.classList.remove("song-active-res");
  albumResults.classList.remove("album-active-res");
  albumResults.style.display = "none";
  topResultHeader.style.display = "none";
  playlistResults.style.display = "none";
  playlistResults.classList.remove("playlist-active-res");
  artistResults.style.display = "none";
  artistResults.classList.remove("artist-active-res");
  podcastResults.style.display = "grid";
  podcastResults.classList.add("podcast-active-res");
  topResult.style.display = "none";

  if (podcastResults.classList.contains("podcast-active-res")) {
    podcastRes.forEach((res) => {
      res.style.display = "flex";
    });
  }
}
