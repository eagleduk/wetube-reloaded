const { default: fetch } = require("node-fetch");

const videoContainer = document.querySelector("#videoContainer");

const videoEle = document.querySelector("video");
const playBtn = document.querySelector("#play");
const volumeBtn = document.querySelector("#volume");
const volumeBar = document.querySelector("#volumeBar");
const currentTime = document.querySelector("#currentTime");
const durationTime = document.querySelector("#durationTime");
const timeBar = document.querySelector("#timeBar");
const screenBtn = document.querySelector("#screenControl");

const handlePlayBtn = (e) => {
  videoEle.paused ? videoEle.play() : videoEle.pause();
  playBtn.innerHTML = videoEle.paused
    ? `<i class="fas fa-play"></i>`
    : `<i class="fas fa-pause"></i>`;
};

const handleVolumeBtn = (e) => {
  if (videoEle.volume !== 0) {
    videoEle.muted = !videoEle.muted;
    volumeBtn.innerHTML = videoEle.muted
      ? `<i class="fas fa-volume-mute"></i>`
      : `<i class="fas fa-volume-up"></i>`;
    volumeBar.value = videoEle.muted ? 0 : videoEle.volume;
  }
};

const handleVolumeBar = (e) => {
  const {
    target: { value },
  } = e;
  console.log(value === 0);
  videoEle.volume = value;
  if (videoEle.volume === 0) {
    videoEle.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  } else {
    videoEle.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  }
};

const formatterTime = (sec) => new Date(sec * 1000).toISOString().substr(11, 8);

const handlePlayingVideo = (e) => {
  const current = Math.floor(videoEle.currentTime);
  currentTime.innerText = formatterTime(current);
  timeBar.value = current;
};

const handleLoadedMetaData = (e) => {
  const duration = Math.ceil(videoEle.duration);
  durationTime.innerText = formatterTime(duration);
  timeBar.max = duration;
};

const handleVideoEnded = (e) => {
  const {
    dataset: { id },
  } = videoContainer;
  fetch(`/api/video/${id}`, {
    method: "GET",
  });
};

const handleTimeBar = (e) => {
  const {
    target: { value },
  } = e;
  videoEle.currentTime = value;
};

const handleScreenBtn = (e) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    screenBtn.innerHTML = `<i class="fas fa-expand"></i>`;
  } else {
    videoContainer.requestFullscreen();
    screenBtn.innerHTML = `<i class="fas fa-compress"></i>`;
  }
};

playBtn.addEventListener("click", handlePlayBtn);

volumeBtn.addEventListener("click", handleVolumeBtn);

volumeBar.addEventListener("input", handleVolumeBar);

timeBar.addEventListener("input", handleTimeBar);

videoEle.addEventListener("timeupdate", handlePlayingVideo);
videoEle.addEventListener("loadeddata", handleLoadedMetaData);
videoEle.addEventListener("ended", handleVideoEnded);

screenBtn.addEventListener("click", handleScreenBtn);
