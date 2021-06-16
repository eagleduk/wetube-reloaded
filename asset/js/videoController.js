/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoController.js":
/*!******************************************!*\
  !*** ./src/client/js/videoController.js ***!
  \******************************************/
/***/ (() => {

eval("var videoContainer = document.querySelector(\"#videoContainer\");\nvar videoEle = document.querySelector(\"video\");\nvar playBtn = document.querySelector(\"#play\");\nvar volumeBtn = document.querySelector(\"#volume\");\nvar volumeBar = document.querySelector(\"#volumeBar\");\nvar currentTime = document.querySelector(\"#currentTime\");\nvar durationTime = document.querySelector(\"#durationTime\");\nvar timeBar = document.querySelector(\"#timeBar\");\nvar screenBtn = document.querySelector(\"#screenControl\");\n\nvar handlePlayBtn = function handlePlayBtn(e) {\n  videoEle.paused ? videoEle.play() : videoEle.pause();\n  playBtn.innerHTML = videoEle.paused ? \"<i class=\\\"fas fa-play\\\"></i>\" : \"<i class=\\\"fas fa-pause\\\"></i>\";\n};\n\nvar handleVolumeBtn = function handleVolumeBtn(e) {\n  if (videoEle.volume !== 0) {\n    videoEle.muted = !videoEle.muted;\n    volumeBtn.innerHTML = videoEle.muted ? \"<i class=\\\"fas fa-volume-mute\\\"></i>\" : \"<i class=\\\"fas fa-volume-up\\\"></i>\";\n    volumeBar.value = videoEle.muted ? 0 : videoEle.volume;\n  }\n};\n\nvar handleVolumeBar = function handleVolumeBar(e) {\n  var value = e.target.value;\n  console.log(value === 0);\n  videoEle.volume = value;\n\n  if (videoEle.volume === 0) {\n    videoEle.muted = true;\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-mute\\\"></i>\";\n  } else {\n    videoEle.muted = false;\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-up\\\"></i>\";\n  }\n};\n\nvar formatterTime = function formatterTime(sec) {\n  return new Date(sec * 1000).toISOString().substr(11, 8);\n};\n\nvar handlePlayingVideo = function handlePlayingVideo(e) {\n  var current = Math.floor(videoEle.currentTime);\n  currentTime.innerText = formatterTime(current);\n  timeBar.value = current;\n};\n\nvar handleLoadedMetaData = function handleLoadedMetaData(e) {\n  var duration = Math.ceil(videoEle.duration);\n  durationTime.innerText = formatterTime(duration);\n  timeBar.max = duration;\n};\n\nvar handleTimeBar = function handleTimeBar(e) {\n  var value = e.target.value;\n  videoEle.currentTime = value;\n};\n\nvar handleScreenBtn = function handleScreenBtn(e) {\n  if (document.fullscreenElement) {\n    document.exitFullscreen();\n    screenBtn.innerHTML = \"<i class=\\\"fas fa-expand\\\"></i>\";\n  } else {\n    videoContainer.requestFullscreen();\n    screenBtn.innerHTML = \"<i class=\\\"fas fa-compress\\\"></i>\";\n  }\n};\n\nplayBtn.addEventListener(\"click\", handlePlayBtn);\nvolumeBtn.addEventListener(\"click\", handleVolumeBtn);\nvolumeBar.addEventListener(\"input\", handleVolumeBar);\ntimeBar.addEventListener(\"input\", handleTimeBar);\nvideoEle.addEventListener(\"timeupdate\", handlePlayingVideo);\nvideoEle.addEventListener(\"loadeddata\", handleLoadedMetaData);\nscreenBtn.addEventListener(\"click\", handleScreenBtn);\n\n//# sourceURL=webpack://wetube-2021/./src/client/js/videoController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoController.js"]();
/******/ 	
/******/ })()
;