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
    this.string2.textContent = `${(0,_converttemp__WEBPACK_IMPORTED_MODULE_0__.default)(weather.main.temp)}°F`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2NvbnZlcnR0ZW1wLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1Y7QUFDVTs7O0FBR2hDLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBLG9CQUFvQiw2Q0FBTzs7O0FBRzNCLGVBQWUsd0NBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNOMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJrQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25ELGtDQUFrQyxxREFBVyxvQkFBb0I7QUFDakUscUVBQXFFLHdCQUF3QjtBQUM3RixzREFBc0Qsc0JBQXNCO0FBQzVFLG1EQUFtRCxzQkFBc0I7QUFDekUsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUsRUFBRSxFOzs7Ozs7Ozs7Ozs7OztBQ2hEakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNGQUFzRixVQUFVLFNBQVMsWUFBWTs7QUFFckg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEU7Ozs7OztVQ3BCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNONEM7OztBQUc1Qyw2Q0FBVTtBQUNWLDhDQUE4Qyx5Q0FBVTs7O0FBR3hEO0FBQ0E7O0FBRUEsRUFBRSx3REFBc0I7O0FBRXhCLEVBQUUsNkNBQVU7QUFDWjtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuY29uc3Qgd2VhdGhlckxvY2F0aW9uID0gc3RvcmFnZS5nZXRMb2NhdGlvbkRhdGEoKTtcbmNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyTG9jYXRpb24uY2l0eSk7XG5cblxuY29uc3QgdWkgPSBuZXcgVUkoKTtcbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG4gIHdlYXRoZXIuZ2V0V2VhdGhlcigpXG4gICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICB1aS5wYWludChyZXN1bHRzKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcblxuZXhwb3J0IHtcbiAgd2VhdGhlcixcbiAgdWksXG59OyIsImNvbnN0IENvbnZlcnR0ZW1wID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKCg5IC8gNSkgKiBpbnB1dCArIDMyKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQ7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnR0ZW1wOyIsImNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdHk7XG4gICAgdGhpcy5kZWZhdWx0Q2l0eSA9ICdQYXJpcyc7XG4gIH1cblxuICBnZXRMb2NhdGlvbkRhdGEoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2l0eSA9IHRoaXMuZGVmYXVsdENpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5Jyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjaXR5OiB0aGlzLmNpdHksXG4gICAgfTtcbiAgfVxuXG4gIHNldExvY2F0aW9uRGF0YShjaXR5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBjaXR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlOyIsImltcG9ydCBDb252ZXJ0dGVtcCBmcm9tICcuL2NvbnZlcnR0ZW1wJztcblxuY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctbG9jYXRpb24nKTtcbiAgICB0aGlzLmRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1kZXNjJyk7XG4gICAgdGhpcy5zdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1zdHJpbmcnKTtcbiAgICB0aGlzLnN0cmluZzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1zdHJpbmcyJyk7XG4gICAgdGhpcy5kZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZGV0YWlscycpO1xuICAgIHRoaXMuaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWljb24nKTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctaHVtaWRpdHknKTtcblxuICAgIHRoaXMucHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1wcmVzc3VyZScpO1xuICAgIHRoaXMud2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXdpbmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYWNrZ3JvdW5kJyk7XG4gICAgdGhpcy5jZWxjaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpdGgtY2VsY2l1cycpO1xuICAgIHRoaXMuZmFocmVuaGVpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aXRoLWZhaHJlbmhlaXQnKTtcbiAgfVxuXG4gIHBhaW50KHdlYXRoZXIpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xuICAgIHRoaXMuZGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluO1xuICAgIHRoaXMuc3RyaW5nLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5tYWluLnRlbXB94oSDYDtcbiAgICB0aGlzLnN0cmluZzIudGV4dENvbnRlbnQgPSBgJHtDb252ZXJ0dGVtcCh3ZWF0aGVyLm1haW4udGVtcCl9wrBGYDtcbiAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3dlYXRoZXIud2VhdGhlclswXS5pY29ufS5wbmdgKTtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYFJlbGF0aXZlIEh1bWlkaXR5OiAke3dlYXRoZXIubWFpbi5odW1pZGl0eX0gJWA7XG4gICAgdGhpcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZSBMZXZlbDogJHt3ZWF0aGVyLm1haW4ucHJlc3N1cmV9YDtcbiAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLndpbmQuc3BlZWR9IG0vc2A7XG5cbiAgICBpZiAod2VhdGhlci5tYWluLnRlbXAgPiA3KSB7XG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKTtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgfSBlbHNlIGlmICh3ZWF0aGVyLm1haW4udGVtcCA8IDYpIHtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmZhaHJlbmhlaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0cmluZzIuY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpO1xuICAgICAgdGhpcy5zdHJpbmcuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jZWxjaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zdHJpbmcyLmNsYXNzTGlzdC5hZGQoJ25vLWRpc3BsYXknKTtcbiAgICAgIHRoaXMuc3RyaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ25vLWRpc3BsYXknKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVUk7IiwiY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGNpdHkpIHtcbiAgICB0aGlzLmFwaUtleSA9ICcxYzFhY2U3ZTlhZTU1NGM5YjgyY2VlNzM0NzliMGQ4Yic7XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgfVxuXG4gIC8vIEZldGNoIHdlYXRoZXIgZnJvbSBBUElcblxuICBhc3luYyBnZXRXZWF0aGVyKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0aGlzLmNpdHl9JkFQUElEPSR7dGhpcy5hcGlLZXl9JnVuaXRzPW1ldHJpY2ApO1xuXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH1cblxuICAvLyBDaGFuZ2Ugd2VhdGhlciBsb2NhdGlvblxuICBjaGFuZ2VMb2NhdGlvbihjaXR5KSB7XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyLCB7IHdlYXRoZXIgfSBmcm9tICcuL2FwcCc7XG5cblxuZ2V0V2VhdGhlcigpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NY29udGVudExvYWRlZCcsIGdldFdlYXRoZXIpO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWNoYW5nZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgd2VhdGhlci5jaGFuZ2VMb2NhdGlvbihjaXR5KTtcblxuICBnZXRXZWF0aGVyKCk7XG4gICQoJyNsb2NNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=