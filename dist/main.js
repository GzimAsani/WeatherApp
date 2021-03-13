/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "weather": () => (/* binding */ weather),
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





const storage = new _storage__WEBPACK_IMPORTED_MODULE_2__.default();
const weatherLocation = storage.getLocationData();
const weather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(weatherLocation.city);


const ui = new _ui__WEBPACK_IMPORTED_MODULE_1__.default();
const getWeather = () => {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);



/***/ }),

/***/ "./src/converttemp.js":
/*!****************************!*\
  !*** ./src/converttemp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Converttemp = (input) => {
  const fahrenheit = Math.round((9 / 5) * input + 32);
  return fahrenheit;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Converttemp);

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Paris';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    return {
      city: this.city,
    };
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _converttemp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converttemp */ "./src/converttemp.js");


class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.string2 = document.getElementById('w-string2');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');

    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.background = document.querySelector('background');
    this.celcius = document.getElementById('with-celcius');
    this.fahrenheit = document.getElementById('with-fahrenheit');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${weather.main.temp}℃`;
    this.string2.textContent = `${(0,_converttemp__WEBPACK_IMPORTED_MODULE_0__.default)(weather.main.temp)}'°F'`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;

    if (weather.main.temp > 7) {
      background.classList.add('blue');
      background.classList.remove('red');
    } else if (weather.main.temp < 6) {
      background.classList.add('red');
      background.classList.remove('blue');
    }

    this.fahrenheit.addEventListener('click', () => {
      this.string2.classList.remove('no-display');
      this.string.classList.add('no-display');
    });

    this.celcius.addEventListener('click', () => {
      this.string2.classList.add('no-display');
      this.string.classList.remove('no-display');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Weather {
  constructor(city) {
    this.apiKey = '1c1ace7e9ae554c9b82cee73479b0d8b';
    this.city = city;
  }

  // Fetch weather from API

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");



(0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();
document.addEventListener('DOMcontentLoaded', _app__WEBPACK_IMPORTED_MODULE_0__.default);


document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  _app__WEBPACK_IMPORTED_MODULE_0__.weather.changeLocation(city);

  (0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();
  $('#locModal').modal('hide');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2NvbnZlcnR0ZW1wLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1Y7QUFDVTs7O0FBR2hDLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBLG9CQUFvQiw2Q0FBTzs7O0FBRzNCLGVBQWUsd0NBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNOMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJrQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25ELGtDQUFrQyxxREFBVyxvQkFBb0I7QUFDakUscUVBQXFFLHdCQUF3QjtBQUM3RixzREFBc0Qsc0JBQXNCO0FBQzVFLG1EQUFtRCxzQkFBc0I7QUFDekUsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUsRUFBRSxFOzs7Ozs7Ozs7Ozs7OztBQ2hEakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNGQUFzRixVQUFVLFNBQVMsWUFBWTs7QUFFckg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEU7Ozs7OztVQ3BCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNONEM7OztBQUc1Qyw2Q0FBVTtBQUNWLDhDQUE4Qyx5Q0FBVTs7O0FBR3hEO0FBQ0E7O0FBRUEsRUFBRSx3REFBc0I7O0FBRXhCLEVBQUUsNkNBQVU7QUFDWjtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuY29uc3Qgd2VhdGhlckxvY2F0aW9uID0gc3RvcmFnZS5nZXRMb2NhdGlvbkRhdGEoKTtcbmNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyTG9jYXRpb24uY2l0eSk7XG5cblxuY29uc3QgdWkgPSBuZXcgVUkoKTtcbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG4gIHdlYXRoZXIuZ2V0V2VhdGhlcigpXG4gICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICB1aS5wYWludChyZXN1bHRzKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcblxuZXhwb3J0IHtcbiAgd2VhdGhlcixcbiAgdWksXG59OyIsImNvbnN0IENvbnZlcnR0ZW1wID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKCg5IC8gNSkgKiBpbnB1dCArIDMyKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQ7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnR0ZW1wOyIsImNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdHk7XG4gICAgdGhpcy5kZWZhdWx0Q2l0eSA9ICdQYXJpcyc7XG4gIH1cblxuICBnZXRMb2NhdGlvbkRhdGEoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2l0eSA9IHRoaXMuZGVmYXVsdENpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5Jyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjaXR5OiB0aGlzLmNpdHksXG4gICAgfTtcbiAgfVxuXG4gIHNldExvY2F0aW9uRGF0YShjaXR5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBjaXR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyIsImltcG9ydCBDb252ZXJ0dGVtcCBmcm9tICcuL2NvbnZlcnR0ZW1wJztcblxuY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctbG9jYXRpb24nKTtcbiAgICB0aGlzLmRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1kZXNjJyk7XG4gICAgdGhpcy5zdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1zdHJpbmcnKTtcbiAgICB0aGlzLnN0cmluZzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1zdHJpbmcyJyk7XG4gICAgdGhpcy5kZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZGV0YWlscycpO1xuICAgIHRoaXMuaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWljb24nKTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctaHVtaWRpdHknKTtcblxuICAgIHRoaXMucHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1wcmVzc3VyZScpO1xuICAgIHRoaXMud2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXdpbmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYWNrZ3JvdW5kJyk7XG4gICAgdGhpcy5jZWxjaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpdGgtY2VsY2l1cycpO1xuICAgIHRoaXMuZmFocmVuaGVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aXRoLWZhaHJlbmhlaXQnKTtcbiAgfVxuXG4gIHBhaW50KHdlYXRoZXIpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xuICAgIHRoaXMuZGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluO1xuICAgIHRoaXMuc3RyaW5nLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5tYWluLnRlbXB94oSDYDtcbiAgICB0aGlzLnN0cmluZzIudGV4dENvbnRlbnQgPSBgJHtDb252ZXJ0dGVtcCh3ZWF0aGVyLm1haW4udGVtcCl9J8KwRidgO1xuICAgIHRoaXMuaWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7d2VhdGhlci53ZWF0aGVyWzBdLmljb259LnBuZ2ApO1xuICAgIHRoaXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgUmVsYXRpdmUgSHVtaWRpdHk6ICR7d2VhdGhlci5tYWluLmh1bWlkaXR5fSAlYDtcbiAgICB0aGlzLnByZXNzdXJlLnRleHRDb250ZW50ID0gYFByZXNzdXJlIExldmVsOiAke3dlYXRoZXIubWFpbi5wcmVzc3VyZX1gO1xuICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXIud2luZC5zcGVlZH0gbS9zYDtcblxuICAgIGlmICh3ZWF0aGVyLm1haW4udGVtcCA+IDcpIHtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xuICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIubWFpbi50ZW1wIDwgNikge1xuICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnYmx1ZScpO1xuICAgIH1cblxuICAgIHRoaXMuZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc3RyaW5nMi5jbGFzc0xpc3QucmVtb3ZlKCduby1kaXNwbGF5Jyk7XG4gICAgICB0aGlzLnN0cmluZy5jbGFzc0xpc3QuYWRkKCduby1kaXNwbGF5Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNlbGNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0cmluZzIuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpO1xuICAgICAgdGhpcy5zdHJpbmcuY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpO1xuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVSTsiLCJjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoY2l0eSkge1xuICAgIHRoaXMuYXBpS2V5ID0gJzFjMWFjZTdlOWFlNTU0YzliODJjZWU3MzQ3OWIwZDhiJztcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICB9XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBmcm9tIEFQSVxuXG4gIGFzeW5jIGdldFdlYXRoZXIoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RoaXMuY2l0eX0mQVBQSUQ9JHt0aGlzLmFwaUtleX0mdW5pdHM9bWV0cmljYCk7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfVxuXG4gIC8vIENoYW5nZSB3ZWF0aGVyIGxvY2F0aW9uXG4gIGNoYW5nZUxvY2F0aW9uKGNpdHkpIHtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIsIHsgd2VhdGhlciB9IGZyb20gJy4vYXBwJztcblxuXG5nZXRXZWF0aGVyKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01jb250ZW50TG9hZGVkJywgZ2V0V2VhdGhlcik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctY2hhbmdlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZTtcblxuICB3ZWF0aGVyLmNoYW5nZUxvY2F0aW9uKGNpdHkpO1xuXG4gIGdldFdlYXRoZXIoKTtcbiAgJCgnI2xvY01vZGFsJykubW9kYWwoJ2hpZGUnKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==