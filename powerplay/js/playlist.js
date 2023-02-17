var songNumber = document.querySelectorAll(
  ".playlist-wrapper .track .number .index"
);
var num = 1;
for (let i = 0; i < songNumber.length; i++) {
  songNumber[i].innerText = num;
  num = num + 1;
}

const songCount = document.querySelector(".playlist-info .song-count .count");

songCount.innerText = songNumber.length;
