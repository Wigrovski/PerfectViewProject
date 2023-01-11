/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('13 january 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n\n//# sourceURL=webpack://perfectview/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector('menu')\n    const closeBtn = menu.querySelector('.close-btn')\n    const menuItems = menu.querySelectorAll('ul>li>a')\n\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n\n    menuBtn.addEventListener('click', () => handleMenu())\n\n    closeBtn.addEventListener('click', () => handleMenu())\n\n\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\n    \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://perfectview/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const modal = document.querySelector('.popup')\n    const buttons = document.querySelectorAll('.popup-btn')\n    const closeBtn = modal.querySelector('.popup-close')\n\n    function animate({timing, draw, duration}) {\n\n        let start = performance.now()\n        requestAnimationFrame(function animate(time) {\n        \n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n            draw(progress); // отрисовать её\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }    \n    });\n    }\n\n    buttons.forEach(btn => {\n        btn.addEventListener('click', () => {\n            if(document.documentElement.clientWidth > 768) {\n                animate({\n                    duration: 20,\n                    timing(timeFraction) {\n                        return timeFraction\n                    },\n                    draw(progress) {\n                        modal.style.display = 'block'\n                        modal.style.opacity = '0'\n                        setTimeout(() => {\n                            modal.style.transition = 'all .5s ease-in-out'\n                            modal.style.opacity = '1'\n                        })\n                    }\n                }, 10)\n            }\n            modal.style.display = 'block'\n        })\n        \n    })\n    closeBtn.addEventListener('click', () => {\n        modal.style.display = 'none'\n        modal.style.opacity = ''\n        modal.style.transition = ''\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://perfectview/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerDays = document.getElementById('timer-days')\n    const timerHours = document.getElementById('timer-hours')\n    const timerMinutes = document.getElementById('timer-minutes')\n    const timerSeconds = document.getElementById('timer-seconds')\n    let timeInterval\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow)/1000\n        let days = 'Дней: ' + Math.floor(timeRemaining / 60 / 60 / 24) \n        let hours = Math.floor(timeRemaining / 60 / 60)\n        let minutes = Math.floor((timeRemaining / 60 % 60))\n        let seconds = Math.floor(timeRemaining % 60)\n        \n        return {timeRemaining, days, hours, minutes, seconds}\n    }\n    function showTimer(days, hours, minutes, seconds) {\n        let getTime = getTimeRemaining()\n        timerDays.textContent = getTime.days\n        timerHours.textContent = getTime.hours >= 10 ? getTime.hours : `0${getTime.hours}`\n        timerMinutes.textContent = getTime.minutes >= 10 ? getTime.minutes : `0${getTime.minutes}`\n        timerSeconds.textContent = getTime.seconds >= 10 ? getTime.seconds : `0${getTime.seconds}`\n        \n    }\n    const checkTime = () => {\n        let getTime = getTimeRemaining()\n        if(getTime.timeRemaining > 0) {\n            showTimer()\n        } else { clearInterval(timeInterval)}\n    }\n\n    const updateClock = () => {\n        checkTime()\n        timeInterval = setInterval(updateClock, 1000)\n    }\n    updateClock()\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://perfectview/./src/modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;