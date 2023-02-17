// /*Player */

// const repeat = document.getElementById("repeat");
// const shuffle = document.getElementById("shuffle");

//   // Get a reference to the range input, the current-time span, and the end-time span



// const like = document.getElementById("like-song");

// like.addEventListener("click", () => {
//   if (like.classList.contains("bi-heart")) {
//     like.classList.replace("bi-heart", "bi-heart-fill");
//     like.style.color = "blue";
//   } else {
//     like.classList.replace("bi-heart-fill", "bi-heart");
//     like.style.color = "";
//   }
// });

// var clickCounter = 0;

// repeat.addEventListener("click", () => {
//   if (clickCounter == 0) {
//     repeat.style.color = "blue";
//     clickCounter++;
//   } else if (clickCounter == 1) {
//     repeat.classList.replace("bi-repeat", "bi-repeat-1");
//     clickCounter++;
//   } else if (clickCounter == 2) {
//     repeat.classList.replace("bi-repeat-1", "bi-repeat");
//     repeat.style.color = "";
//     clickCounter = 0;
//   }
// });

// shuffle.addEventListener("click", () => {
//   shuffle.classList.toggle("shuffle-active");
// });

// const playBtns = document.querySelectorAll(".play-btn");
// playBtns.forEach((playBtn) => {
//   playBtn.addEventListener("click", () => {
//     if (playBtn.classList.contains("bi-play-fill")) {
//       playBtn.classList.replace("bi-play-fill", "bi-pause-fill");
//     } else {
//       playBtn.classList.replace("bi-pause-fill", "bi-play-fill");
//     }
//   });
// });

// const playBtnsCircles = document.querySelectorAll(".playBtnCircle");

// playBtnsCircles.forEach((playBtnsCircle) => {
//   playBtnsCircle.addEventListener("click", () => {
//     if (playBtnsCircle.classList.contains("bi-play-circle-fill")) {
//       playBtnsCircle.classList.replace(
//         "bi-play-circle-fill",
//         "bi-pause-circle-fill"
//       );
//     } else {
//       playBtnsCircle.classList.replace(
//         "bi-pause-circle-fill",
//         "bi-play-circle-fill"
//       );
//     }
//   });
// });

// // Get the audio element
// const audio = document.querySelector('audio');

// // Get the play/pause button
// const playBtn = document.querySelector('#play');

// // Get the shuffle button
// const shuffleBtn = document.querySelector('#shuffle');

// // Get the repeat button
// const repeatBtn = document.querySelector('#repeat');

// // Get the progress bar
// const progressBar = document.querySelector('.slider');
// const mobileProgressBar = document.querySelector(".mobile-slider");

// // Get the current time and end time elements
// const currentTimeEl = document.querySelector('.current-time');
// const endTimeEl = document.querySelector('.end-time');

// const volumeSlider = document.querySelector("#volume-slider");

// // Update the volume
// function updateAudioVolume() {
//   audio.volume = volumeSlider.value / 100;
//   localStorage.setItem("rangeValue", audio.volume);
// }

// // Event listener
// volumeSlider.addEventListener("input", updateAudioVolume);

// // Create an array of the audio files
// const tracks = [
//   './res/tracks/1.mp3',
//   './res/tracks/2.mp3',
//   './res/tracks/3.mp3',
//   './res/tracks/4.mp3'
// ];

// // Store the current track index
// let currentTrack = 0;

// // Play the current track
// function play() {
//   audio.src = tracks[currentTrack];
//   audio.play();
//   playBtn.classList.remove('bi-play-circle-fill');
//   playBtn.classList.add('bi-pause-circle-fill');
// }

// // Pause the current track
// function pause() {
//   audio.pause();
//   playBtn.classList.remove("bi-pause-circle-fill");
//   playBtn.classList.add("bi-play-circle-fill");
// }

// // Skip to the next track
// function skipForward() {
//   // If on the last track, go back to the first track
//   if (currentTrack === tracks.length - 1) {
//     currentTrack = 0;
//   } else {
//     currentTrack++;
//   }
//   play();
// }

// // Skip to the previous track
// function skipBackward() {
//   // If on the first track, go to the last track
//   if (currentTrack === 0) {
//     currentTrack = tracks.length - 1;
//   } else {
//     currentTrack--;
//   }
//   play();
// }

// // Update the progress bar
// function updateProgress() {
//   progressBar.value = (audio.currentTime / audio.duration) * 100;
//   mobileProgressBar.value = (audio.currentTime / audio.duration) * 100;
//   currentTimeEl.textContent = formatTime(audio.currentTime);
//   endTimeEl.textContent = formatTime(audio.duration);
// }

// // Format the time in minutes:seconds
// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes}:${seconds}`;
// }

// // Shuffle the track order
// // Repeat the playback
// // Event listeners
// playBtn.addEventListener('click', () => {
//   if (audio.paused) {
//     play();
//   } else {
//     pause();
//   }
// });

// shuffleBtn.addEventListener('click', shuffle);
// repeatBtn.addEventListener('click', repeat);

// progressBar.addEventListener('input', (e) => {
//   audio.currentTime = (e.target.value / 100) * audio.duration;
// });

// audio.addEventListener('timeupdate', updateProgress);
// audio.addEventListener('ended', skipForward);

// shuffleBtn.addEventListener("click", shuffle);
// repeatBtn.addEventListener("click", repeat);

// document
//   .querySelector(".bi-skip-start-fill")
//   .addEventListener("click", skipBackward);
// document
//   .querySelector(".bi-skip-end-fill")
//   .addEventListener("click", skipForward);

// shuffleBtn.addEventListener("click", shuffle);
// repeatBtn.addEventListener('click', repeat);

// progressBar.addEventListener('input', (e) => {
//   audio.currentTime = (e.target.value / 100) * audio.duration;
// });

// audio.addEventListener('timeupdate', updateProgress);
// audio.addEventListener('ended', skipForward);

// // define global variables
// // let currentTrack = 1;
// // let audioElement = document.querySelector("audio");
// // let shuffle = false;
// // let repeat = false;
// // let trackList = [1, 2, 3, 4, 5];

// // // function to play a track
// // function playTrack() {
// //   // update the current track info
// //   let trackTitle = document.querySelector(".now-playing-title");
// //   let artistName = document.querySelector(".artist-name");
// //   let trackArt = document.querySelector(".now-playing-art");

// //   trackTitle.innerHTML = "Track " + currentTrack;
// //   artistName.innerHTML = "Artist " + currentTrack;
// //   trackArt.style.backgroundImage =
// //     "url('./res/img/arts/" + currentTrack + ".jpg')";

// //   // update the audio source and play it
// //   audioElement.src = "./res/tracks/" + currentTrack + ".mp3";
// //   audioElement.play();
// // }

// // // play or pause the current track
// // let playBtn = document.querySelector("#play");
// // playBtn.addEventListener("click", function () {
// //   if (audioElement.paused) {
// //     audioElement.play();
// //     playBtn.classList.remove("bi-play-circle-fill");
// //     playBtn.classList.add("bi-pause-circle-fill");
// //   } else {
// //     audioElement.pause();
// //     playBtn.classList.remove("bi-pause-circle-fill");
// //     playBtn.classList.add("bi-play-circle-fill");
// //   }
// // });

// // // play the previous track
// // let prevBtn = document.querySelector(".bi-skip-start-fill");
// // prevBtn.addEventListener("click", function () {
// //   // check if shuffle is on
// //   if (shuffle) {
// //     // generate a random index from the track list
// //     let randomIndex = Math.floor(Math.random() * trackList.length);
// //     currentTrack = trackList[randomIndex];
// //   } else {
// //     // decrease the current track by 1
// //     currentTrack--;
// //     if (currentTrack < 1) {
// //       currentTrack = 5;
// //     }
// //   }

// //   playTrack();
// // });

// // // play the next track
// // let nextBtn = document.querySelector(".bi-skip-end-fill");
// // nextBtn.addEventListener("click", function () {
// //   // check if shuffle is on
// //   if (shuffle) {
// //     // generate a random index from the track list
// //     let randomIndex = Math.floor(Math.random() * trackList.length);
// //     currentTrack = trackList[randomIndex];
// //   } else {
// //     // increase the current track by 1
// //     currentTrack++;
// //     if (currentTrack > 5) {
// //       currentTrack = 1;
// //     }
// //   }

// //   playTrack();
// // });

// // // toggle shuffle
// // let shuffleBtn = document.querySelector("#shuffle");
// // shuffleBtn.addEventListener("click", function () {
// //   shuffle = !shuffle;
// //   if (shuffle) {
// //     shuffleBtn.classList.add("active");
// //   } else {
// //     shuffleBtn.classList.remove("active");
// //   }
// // });

// // // toggle repeat
// // let repeatBtn = document.querySelector("#repeat");
// // repeatBtn.addEventListener("click", function () {
// //   repeat = !repeat;
// //   if (repeat) {
// //     repeatBtn.classList.add("active");
// //   } else {
// //     repeatBtn.classList.remove("active");
// //   }
// // });

// // // update the progress bar and current time
// // audioElement.addEventListener("timeupdate", function () {
// //   let currentTime = document.querySelector(".current-time");
// //   let duration = document.querySelector(".end-time");
// //   let progressBar = document.querySelector("#audio-slider");

// //   // calculate the current time and duration
// //   let currentMinutes = Math.floor(audioElement.currentTime / 60);
// //   let currentSeconds = Math.floor(
// //     audioElement.currentTime - currentMinutes * 60
// //   );
// //   let durationMinutes = Math.floor(audioElement.duration / 60);
// //   let durationSeconds = Math.floor(
// //     audioElement.duration - durationMinutes * 60
// //   );

// //   // add a leading zero if the seconds are less than 10
// //   if (currentSeconds < 10) {
// //     currentSeconds = "0" + currentSeconds;
// //   }
// //   if (durationSeconds < 10) {
// //     durationSeconds = "0" + durationSeconds;
// //   }

// //   // update the current time and duration
// //   currentTime.innerHTML = currentMinutes + ":" + currentSeconds;
// //   duration.innerHTML = durationMinutes + ":" + durationSeconds;

// //   // update the progress bar value
// //   progressBar.value = audioElement.currentTime / audioElement.duration;

// //   // check if the current track is finished and repeat is on
// //   if (audioElement.ended && repeat) {
// //     playTrack();
// //   }
// // });

// // // update the current time when the progress bar is changed
// // let progressBar = document.querySelector("#audio-slider");
// // progressBar.addEventListener("change", function () {
// //   audioElement.currentTime = audioElement.duration * (progressBar.value / 100);
// // });

// // // mute or unmute the audio
// // let muteBtn = document.querySelector(".bi-volume-mute");
// // muteBtn.addEventListener("click", function () {
// //   if (audioElement.muted) {
// //     audioElement.muted = false;
// //     muteBtn.classList.remove("active");
// //   } else {
// //     audioElement.muted = true;
// //     muteBtn.classList.add("active");
// //   }
// // });

// // // decrease or increase the volume
// // let volumeDownBtn = document.querySelector(".bi-volume-down");
// // volumeDownBtn.addEventListener("click", function () {
// //   if (audioElement.volume > 0) {
// //     audioElement.volume -= 0.1;
// //   }
// // });
// // let volumeUpBtn = document.querySelector(".bi-volume-up");
// // volumeUpBtn.addEventListener("click", function () {
// //   if (audioElement.volume < 1) {
// //     audioElement.volume += 0.1;
// //   }
// // });

// // // update the volume when the volume slider is changed
// // let volumeSlider = document.querySelector("#volume-slider");
// // volumeSlider.addEventListener("change", function () {
// //   audioElement.volume = volumeSlider.value / 100;
// // });

// // // call the playTrack function to start playing the first track
// // playTrack();

//get elements from the html
const nowPlayingArt = document.querySelector(".now-playing-art");
const nowPlayingTitle = document.querySelector(".now-playing-title");
const artistName = document.querySelector("#name-of-artist");
const audio = document.querySelector("audio");
const playBtn = document.getElementById("play");
let prevBtn = document.querySelector(".bi-skip-start-fill");
let nextBtn = document.querySelector(".bi-skip-end-fill");
const slider = document.querySelector(".slider");
const audioSlider = document.getElementById("audio-slider");
const current = document.querySelector(".current-time");
const end = document.querySelector(".end-time");
const volumeSlider = document.querySelector("#volume-slider");

// create object for the tracks and artists
const tracks = {
  1: {
    title: "Cry For You",
    artist: "Lacrae",
    art: "./res/img/arts/cry.jpg",
    src: "./res/tracks/1.mp3",
  },
  2: {
    title: "Twenty To One",
    artist: "Dave",
    art: "./res/img/arts/twenty.jpg",
    src: "./res/tracks/2.mp3",
  },
  3: {
    title: "JUST LIKE YOU",
    artist: "NF",
    art: "./res/img/arts/just.jpg",
    src: "./res/tracks/3.mp3",
  },
  4: {
    title: "I'll Find You",
    artist: "Lacrae",
    art: "./res/img/arts/find.jpg",
    src: "./res/tracks/4.mp3",
  },
  5: {
    title: "Dear God",
    artist: "Dax",
    art: "./res/img/arts/6.jpg",
    src: "./res/tracks/5.mp3",
  },
};

//set initial values for the player
let trackNumber = 1;
audio.src = tracks[trackNumber].src;
nowPlayingArt.style.backgroundImage = `url(${tracks[trackNumber].art}),linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
nowPlayingTitle.textContent = tracks[trackNumber].title;
artistName.textContent = tracks[trackNumber].artist;

//add functionality to play the track
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.className = "bi bi-pause-circle-fill";
  } else {
    audio.pause();
    playBtn.className = "bi bi-play-circle-fill";
  }
});

//add functionality to play next track
const playNext = () => {
  trackNumber++;
  if (trackNumber > 5) {
    trackNumber = 1;
  }
  audio.src = tracks[trackNumber].src;
  nowPlayingArt.style.backgroundImage = `url(${tracks[trackNumber].art}),linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  nowPlayingTitle.textContent = tracks[trackNumber].title;
  artistName.textContent = tracks[trackNumber].artist;
  audio.play();
  playBtn.className = "bi bi-pause-circle-fill";
};

//add functionality to play previous track
const playPrev = () => {
  trackNumber--;
  if (trackNumber < 1) {
    trackNumber = 5;
  }

  audio.src = tracks[trackNumber].src;
  nowPlayingArt.style.backgroundImage = `url(${tracks[trackNumber].art}), linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  nowPlayingTitle.textContent = tracks[trackNumber].title;
  artistName.textContent = tracks[trackNumber].artist;
  audio.play();
};


function updateAudioVolume() {
  audio.volume = volumeSlider.value / 100;
  localStorage.setItem("rangeValue", audio.volume);
}



const range = document.getElementById("volume-slider");
const volume = document.querySelector(".volume");
const storedValue = localStorage.getItem("rangeValue");

range.addEventListener("input", () => {
  localStorage.setItem("rangeValue", range.value);

  if (range.value == 0) {
    volume.children[0].style.display = "none";
    volume.children[1].style.display = "inline-block";
    volume.children[2].style.display = "none";
  } else if (range.value < 50) {
    volume.children[0].style.display = "inline-block";
    volume.children[1].style.display = "none";
    volume.children[2].style.display = "none";
  } else {
    volume.children[0].style.display = "none";
    volume.children[1].style.display = "none";
    volume.children[2].style.display = "inline-block";
  }
});

if (storedValue) {
  range.value = storedValue;
} else {
  range.value = 70;
}

volume.addEventListener("click", (event) => {
  if (event.target.classList.contains("bi-volume-mute")) {
    event.target.className = "bi-volume-mute";

    const range = document.getElementById("volume-slider");
    range.value = 10;
    localStorage.setItem("rangeValue", range.value);
  } else {
    range.value = 0;
    localStorage.setItem("rangeValue", range.value);
  }
  updateVolume();
  updateAudioVolume();
});

function updateVolume() {
  if (range.value == 0) {
    volume.children[0].style.display = "none";
    volume.children[1].style.display = "inline-block";
    volume.children[2].style.display = "none";
  } else if (range.value < 50) {
    volume.children[0].style.display = "inline-block";
    volume.children[1].style.display = "none";
    volume.children[2].style.display = "none";
  } else {
    volume.children[0].style.display = "none";
    volume.children[1].style.display = "none";
    volume.children[2].style.display = "inline-block";
  }
}

updateVolume();


// Event listener
volumeSlider.addEventListener("input", updateAudioVolume);
function updateAudioVolume() {
  audio.volume = volumeSlider.value / 100;
  localStorage.setItem("rangeValue", audio.volume);
}

// Event listener
volumeSlider.addEventListener("input", updateAudioVolume);







//add event listeners to controls
// playBtn.addEventListener("click", togglePlay);
// shuffleBtn.addEventListener("click", toggleShuffle);
// repeatBtn.addEventListener("click", toggleRepeat);
// audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", playNext);
prevBtn.addEventListener("click", playPrev);
nextBtn.addEventListener("click", playNext);
// volumeSlider.addEventListener("input", setVolume);
