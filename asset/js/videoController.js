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

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";
eval(" // ref: https://github.com/tc39/proposal-global\n\nvar getGlobal = function getGlobal() {\n  // the only reliable means to get the global object is\n  // `Function('return this')()`\n  // However, this causes CSP violations in Chrome apps.\n  if (typeof self !== 'undefined') {\n    return self;\n  }\n\n  if (typeof window !== 'undefined') {\n    return window;\n  }\n\n  if (typeof global !== 'undefined') {\n    return global;\n  }\n\n  throw new Error('unable to locate global object');\n};\n\nvar global = getGlobal();\nmodule.exports = exports = global.fetch; // Needed for TypeScript and Webpack.\n\nif (global.fetch) {\n  exports.default = global.fetch.bind(global);\n}\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack://wetube-2021/./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/client/js/videoController.js":
/*!******************************************!*\
  !*** ./src/client/js/videoController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\"),\n    fetch = _require.default;\n\nvar videoContainer = document.querySelector(\"#videoContainer\");\nvar videoEle = document.querySelector(\"video\");\nvar playBtn = document.querySelector(\"#play\");\nvar volumeBtn = document.querySelector(\"#volume\");\nvar volumeBar = document.querySelector(\"#volumeBar\");\nvar currentTime = document.querySelector(\"#currentTime\");\nvar durationTime = document.querySelector(\"#durationTime\");\nvar timeBar = document.querySelector(\"#timeBar\");\nvar screenBtn = document.querySelector(\"#screenControl\");\n\nvar handlePlayBtn = function handlePlayBtn(e) {\n  videoEle.paused ? videoEle.play() : videoEle.pause();\n  playBtn.innerHTML = videoEle.paused ? \"<i class=\\\"fas fa-play\\\"></i>\" : \"<i class=\\\"fas fa-pause\\\"></i>\";\n};\n\nvar handleVolumeBtn = function handleVolumeBtn(e) {\n  if (videoEle.volume !== 0) {\n    videoEle.muted = !videoEle.muted;\n    volumeBtn.innerHTML = videoEle.muted ? \"<i class=\\\"fas fa-volume-mute\\\"></i>\" : \"<i class=\\\"fas fa-volume-up\\\"></i>\";\n    volumeBar.value = videoEle.muted ? 0 : videoEle.volume;\n  }\n};\n\nvar handleVolumeBar = function handleVolumeBar(e) {\n  var value = e.target.value;\n  console.log(value === 0);\n  videoEle.volume = value;\n\n  if (videoEle.volume === 0) {\n    videoEle.muted = true;\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-mute\\\"></i>\";\n  } else {\n    videoEle.muted = false;\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-up\\\"></i>\";\n  }\n};\n\nvar formatterTime = function formatterTime(sec) {\n  return new Date(sec * 1000).toISOString().substr(11, 8);\n};\n\nvar handlePlayingVideo = function handlePlayingVideo(e) {\n  var current = Math.floor(videoEle.currentTime);\n  currentTime.innerText = formatterTime(current);\n  timeBar.value = current;\n};\n\nvar handleLoadedMetaData = function handleLoadedMetaData(e) {\n  var duration = Math.ceil(videoEle.duration);\n  durationTime.innerText = formatterTime(duration);\n  timeBar.max = duration;\n};\n\nvar handleVideoEnded = function handleVideoEnded(e) {\n  var id = videoContainer.dataset.id;\n  fetch(\"/api/video/\".concat(id), {\n    method: \"GET\"\n  });\n};\n\nvar handleTimeBar = function handleTimeBar(e) {\n  var value = e.target.value;\n  videoEle.currentTime = value;\n};\n\nvar handleScreenBtn = function handleScreenBtn(e) {\n  if (document.fullscreenElement) {\n    document.exitFullscreen();\n    screenBtn.innerHTML = \"<i class=\\\"fas fa-expand\\\"></i>\";\n  } else {\n    videoContainer.requestFullscreen();\n    screenBtn.innerHTML = \"<i class=\\\"fas fa-compress\\\"></i>\";\n  }\n};\n\nplayBtn.addEventListener(\"click\", handlePlayBtn);\nvolumeBtn.addEventListener(\"click\", handleVolumeBtn);\nvolumeBar.addEventListener(\"input\", handleVolumeBar);\ntimeBar.addEventListener(\"input\", handleTimeBar);\nvideoEle.addEventListener(\"timeupdate\", handlePlayingVideo);\nvideoEle.addEventListener(\"loadeddata\", handleLoadedMetaData);\nvideoEle.addEventListener(\"ended\", handleVideoEnded);\nscreenBtn.addEventListener(\"click\", handleScreenBtn);\n\n//# sourceURL=webpack://wetube-2021/./src/client/js/videoController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/videoController.js");
/******/ 	
/******/ })()
;