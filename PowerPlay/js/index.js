/*sidebar */

const toggleBtn = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const sidePlaylist = document.querySelector(".playlists");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggle-active");
  sidebar.classList.toggle("shrink-side");
});

sidePlaylist.addEventListener("mouseover", () => {
  if (sidebar.offsetWidth == 95) {
    sidebar.classList.toggle("shrink-side");
    toggleBtn.classList.toggle("toggle-active");
  }
});

/*Notifacation */

const notification = document.getElementById("not-icon");
const notiContainer = document.querySelector(".notifications");
const notificationWrapper = document.querySelector(".notification-dropdown");
const notOverlay = document.querySelector(".notification-overlay");
notification.addEventListener("click", () => {
  notification.classList.replace("mdi-bell-badge-outline", "mdi-bell-outline");
  notificationWrapper.classList.toggle("notifications-active");
  notOverlay.classList.toggle("noti-overlay-active");
});

notOverlay.addEventListener("click", () => {
  notificationWrapper.classList.toggle("notifications-active");
  notOverlay.classList.toggle("noti-overlay-active");
});

/*Arts */

const recSongs = document.querySelectorAll(".rec-song");
let i = 0;

recSongs.forEach((song) => {
  if (i > 0) {
    song.classList.add("just-song");
  }
  i++;
});

/*expand player*/
const nowPlaying = document.querySelector(".now-playing-art");
const playerBar = document.querySelector(".player");
const downArrowBar = document.querySelector(".bi-chevron-bar-down");

let width = screen.width;

function expandPlayer() {
  nowPlaying.addEventListener("click", () => {
    playerBar.classList.add("player-mobile-active");
  });

  downArrowBar.addEventListener("click", () => {
    playerBar.classList.remove("player-mobile-active");
  });
}

if (width <= 800) {
  expandPlayer();
}

var windowWidth = window.innerWidth;

if (windowWidth < 800) {
  expandPlayer();
}

window.addEventListener("resize", function () {
  var windowWidth = window.innerWidth;

  if (windowWidth < 800) {
    expandPlayer();
  }
});

/*Create Playlist */

const createPlaylist = document.getElementById("create-playlist-link");
const playlistOverlay = document.querySelector(".add-playlist-overlay");
const playlistForm = document.querySelector(".add-playlist-form");
const editProfile = document.querySelector(".edit-profile");
// const editProfilebtn = document.querySelector(".edit-profile-btn");
const closeBtns = document.querySelectorAll(".close-btn");

createPlaylist.addEventListener("click", () => {
  playlistOverlay.classList.add("add-playlist-overlay-active");
  playlistForm.style.display = "flex";
  editProfile.style.display = "none";
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    playlistOverlay.classList.remove("add-playlist-overlay-active");
    // editProfile.style.display = "none";
    playlistForm.style.display = "none";
  });
});


