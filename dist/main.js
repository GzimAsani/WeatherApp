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
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





const storage = new _storage__WEBPACK_IMPORTED_MODULE_2__.default();
const weatherLocation = storage.getLocationData();
const weather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default(weatherLocation.city);


const ui = new _ui__WEBPACK_IMPORTED_MODULE_1__.default()
const getWeather = () => {

  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))

}
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

  

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
    this.defaultCity = 'Paris'
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity
    } else {
      this.city = localStorage.getItem('city');
    }
    return {
      city: this.city
    }
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
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    // this.feelsLike = document.getElementById('w-feels-like');
    // this.dewpoint = document.getElementById('w-dewpoint');
    this.maxTemp = document.getElementById('w-maxtemp');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.background = document.getElementById('background')
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;;
    this.string.textContent = weather.main.temp + "℃";
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.maxTemp.textContent = `Maximum Temperature: ${weather.main.temp_max} ℃`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;

    if(weather.main.temp > 10){
      this.background.add.className('text-primary')
    }
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

      //** you can try with responseData.main */
      // return responseData.main;
      console.log(responseData);

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

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  _app__WEBPACK_IMPORTED_MODULE_0__.weather.changeLocation(city);

  (0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();
  $('#locModal').modal('hide')
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1Y7QUFDVTs7O0FBRy9CLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBLG9CQUFvQiw2Q0FBTzs7O0FBRzNCLGVBQWUsd0NBQUU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsRUFBRSxpRUFBZSxVQUFVLEVBQUM7O0FBRTVCLEU7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7O0FDckJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSx3QkFBd0I7QUFDN0Ysc0RBQXNELHNCQUFzQjtBQUM1RSx1REFBdUQsc0JBQXNCO0FBQzdFLG1EQUFtRCxzQkFBc0I7QUFDekUsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEU7Ozs7Ozs7Ozs7Ozs7O0FDL0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0YsVUFBVSxTQUFTLFlBQVk7O0FBRXZIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEU7Ozs7OztVQ3pCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQzs7O0FBRy9CLDZDQUFVO0FBQ1YsOENBQThDLHlDQUFVOztBQUV4RDtBQUNBOztBQUVBLEVBQUUsd0RBQXNCOztBQUV4QixFQUFFLDZDQUFVO0FBQ1o7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhdGhlciBmcm9tICcuL3dlYXRoZXInXG5pbXBvcnQgVUkgZnJvbSAnLi91aSdcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSdcblxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbmNvbnN0IHdlYXRoZXJMb2NhdGlvbiA9IHN0b3JhZ2UuZ2V0TG9jYXRpb25EYXRhKCk7XG5jb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLmNpdHkpO1xuXG5cbmNvbnN0IHVpID0gbmV3IFVJKClcbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG5cbiAgd2VhdGhlci5nZXRXZWF0aGVyKClcbiAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgIHVpLnBhaW50KHJlc3VsdHMpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG59XG4gIGV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG5cbiAgZXhwb3J0IHtcbiAgICB3ZWF0aGVyLFxuICB9IiwiY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2l0eTtcbiAgICB0aGlzLmRlZmF1bHRDaXR5ID0gJ1BhcmlzJ1xuICB9XG5cbiAgZ2V0TG9jYXRpb25EYXRhKCkge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2l0eSA9IHRoaXMuZGVmYXVsdENpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHRoaXMuY2l0eVxuICAgIH1cbiAgfVxuICBzZXRMb2NhdGlvbkRhdGEoY2l0eSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXR5JywgY2l0eSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZSIsImNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWxvY2F0aW9uJyk7XG4gICAgdGhpcy5kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZGVzYycpO1xuICAgIHRoaXMuc3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctc3RyaW5nJyk7XG4gICAgdGhpcy5kZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZGV0YWlscycpO1xuICAgIHRoaXMuaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWljb24nKTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctaHVtaWRpdHknKTtcbiAgICAvLyB0aGlzLmZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWZlZWxzLWxpa2UnKTtcbiAgICAvLyB0aGlzLmRld3BvaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZGV3cG9pbnQnKTtcbiAgICB0aGlzLm1heFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1tYXh0ZW1wJyk7XG4gICAgdGhpcy5wcmVzc3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXByZXNzdXJlJyk7XG4gICAgdGhpcy53aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctd2luZCcpO1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kJylcbiAgfVxuXG4gIHBhaW50KHdlYXRoZXIpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xuICAgIHRoaXMuZGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluOztcbiAgICB0aGlzLnN0cmluZy50ZXh0Q29udGVudCA9IHdlYXRoZXIubWFpbi50ZW1wICsgXCLihINcIjtcbiAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3dlYXRoZXIud2VhdGhlclswXS5pY29ufS5wbmdgKTtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYFJlbGF0aXZlIEh1bWlkaXR5OiAke3dlYXRoZXIubWFpbi5odW1pZGl0eX0gJWA7XG4gICAgdGhpcy5tYXhUZW1wLnRleHRDb250ZW50ID0gYE1heGltdW0gVGVtcGVyYXR1cmU6ICR7d2VhdGhlci5tYWluLnRlbXBfbWF4fSDihINgO1xuICAgIHRoaXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmUgTGV2ZWw6ICR7d2VhdGhlci5tYWluLnByZXNzdXJlfWA7XG4gICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlci53aW5kLnNwZWVkfSBtL3NgO1xuXG4gICAgaWYod2VhdGhlci5tYWluLnRlbXAgPiAxMCl7XG4gICAgICB0aGlzLmJhY2tncm91bmQuYWRkLmNsYXNzTmFtZSgndGV4dC1wcmltYXJ5JylcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVJIiwiY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGNpdHkpIHtcbiAgICAgIHRoaXMuYXBpS2V5ID0gJzFjMWFjZTdlOWFlNTU0YzliODJjZWU3MzQ3OWIwZDhiJztcbiAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gIH1cblxuICAvLyBGZXRjaCB3ZWF0aGVyIGZyb20gQVBJIFxuXG4gIGFzeW5jIGdldFdlYXRoZXIoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dGhpcy5jaXR5fSZBUFBJRD0ke3RoaXMuYXBpS2V5fSZ1bml0cz1tZXRyaWNgKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcblxuICAgICAgLy8qKiB5b3UgY2FuIHRyeSB3aXRoIHJlc3BvbnNlRGF0YS5tYWluICovXG4gICAgICAvLyByZXR1cm4gcmVzcG9uc2VEYXRhLm1haW47XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuXG4gIH1cblxuICAvLyBDaGFuZ2Ugd2VhdGhlciBsb2NhdGlvblxuICBjaGFuZ2VMb2NhdGlvbihjaXR5KSB7XG4gICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSAnLi9hcHAnXG5cblxuZ2V0V2VhdGhlcigpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NY29udGVudExvYWRlZCcsIGdldFdlYXRoZXIpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1jaGFuZ2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZTtcblxuICB3ZWF0aGVyLmNoYW5nZUxvY2F0aW9uKGNpdHkpO1xuXG4gIGdldFdlYXRoZXIoKTtcbiAgJCgnI2xvY01vZGFsJykubW9kYWwoJ2hpZGUnKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=