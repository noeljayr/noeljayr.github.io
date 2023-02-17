var songNumber = document.querySelectorAll(
  ".album-wrapper .track .number .index"
);
var num = 1;
for (let i = 0; i < songNumber.length; i++) {
  songNumber[i].innerText = num;
  num = num + 1;
}

const AlbumSongCount = document.querySelector(
  ".album-info .song-count .count"
);

AlbumSongCount.innerText = songNumber.length;
