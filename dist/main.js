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
    this.background = document.querySelector('background')
    this.celcius = document.getElementById('with-celcius')
    this.fahrenheit = document.getElementById('with-fahrenheit')
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

    if(weather.main.temp > 7){
      background.classList.add('blue')
    } else if (weather.main.temp < 6){
      background.classList.add('red')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1Y7QUFDVTs7O0FBRy9CLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBLG9CQUFvQiw2Q0FBTzs7O0FBRzNCLGVBQWUsd0NBQUU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsRUFBRSxpRUFBZSxVQUFVLEVBQUM7O0FBRTVCLEU7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7O0FDckJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsd0JBQXdCO0FBQzdGLHNEQUFzRCxzQkFBc0I7QUFDNUUsdURBQXVELHNCQUFzQjtBQUM3RSxtREFBbUQsc0JBQXNCO0FBQ3pFLDJDQUEyQyxtQkFBbUI7O0FBRTlEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsRTs7Ozs7Ozs7Ozs7Ozs7QUNwQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdGQUF3RixVQUFVLFNBQVMsWUFBWTs7QUFFdkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRTs7Ozs7O1VDekJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ044QjtBQUNDOzs7QUFHL0IsNkNBQVU7QUFDViw4Q0FBOEMseUNBQVU7O0FBRXhEO0FBQ0E7O0FBRUEsRUFBRSx3REFBc0I7O0FBRXhCLEVBQUUsNkNBQVU7QUFDWjtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcidcbmltcG9ydCBVSSBmcm9tICcuL3VpJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJ1xuXG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuY29uc3Qgd2VhdGhlckxvY2F0aW9uID0gc3RvcmFnZS5nZXRMb2NhdGlvbkRhdGEoKTtcbmNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcih3ZWF0aGVyTG9jYXRpb24uY2l0eSk7XG5cblxuY29uc3QgdWkgPSBuZXcgVUkoKVxuY29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IHtcblxuICB3ZWF0aGVyLmdldFdlYXRoZXIoKVxuICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgdWkucGFpbnQocmVzdWx0cyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cbn1cbiAgZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcblxuICBleHBvcnQge1xuICAgIHdlYXRoZXIsXG4gIH0iLCJjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaXR5O1xuICAgIHRoaXMuZGVmYXVsdENpdHkgPSAnUGFyaXMnXG4gIH1cblxuICBnZXRMb2NhdGlvbkRhdGEoKSB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jaXR5ID0gdGhpcy5kZWZhdWx0Q2l0eVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY2l0eTogdGhpcy5jaXR5XG4gICAgfVxuICB9XG4gIHNldExvY2F0aW9uRGF0YShjaXR5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBjaXR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlIiwiY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctbG9jYXRpb24nKTtcbiAgICB0aGlzLmRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1kZXNjJyk7XG4gICAgdGhpcy5zdHJpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1zdHJpbmcnKTtcbiAgICB0aGlzLmRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1kZXRhaWxzJyk7XG4gICAgdGhpcy5pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctaWNvbicpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1odW1pZGl0eScpO1xuICAgIC8vIHRoaXMuZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZmVlbHMtbGlrZScpO1xuICAgIC8vIHRoaXMuZGV3cG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1kZXdwb2ludCcpO1xuICAgIHRoaXMubWF4VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LW1heHRlbXAnKTtcbiAgICB0aGlzLnByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctcHJlc3N1cmUnKTtcbiAgICB0aGlzLndpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy13aW5kJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFja2dyb3VuZCcpXG4gICAgdGhpcy5jZWxjaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpdGgtY2VsY2l1cycpXG4gICAgdGhpcy5mYWhyZW5oZWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpdGgtZmFocmVuaGVpdCcpXG4gIH1cblxuICBwYWludCh3ZWF0aGVyKSB7XG4gICAgdGhpcy5sb2NhdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIubmFtZTtcbiAgICB0aGlzLmRlc2MudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbjs7XG4gICAgdGhpcy5zdHJpbmcudGV4dENvbnRlbnQgPSB3ZWF0aGVyLm1haW4udGVtcCArIFwi4oSDXCI7XG4gICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn0ucG5nYCk7XG4gICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGBSZWxhdGl2ZSBIdW1pZGl0eTogJHt3ZWF0aGVyLm1haW4uaHVtaWRpdHl9ICVgO1xuICAgIHRoaXMubWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlOiAke3dlYXRoZXIubWFpbi50ZW1wX21heH0g4oSDYDtcbiAgICB0aGlzLnByZXNzdXJlLnRleHRDb250ZW50ID0gYFByZXNzdXJlIExldmVsOiAke3dlYXRoZXIubWFpbi5wcmVzc3VyZX1gO1xuICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXIud2luZC5zcGVlZH0gbS9zYDtcblxuICAgIGlmKHdlYXRoZXIubWFpbi50ZW1wID4gNyl7XG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKVxuICAgIH0gZWxzZSBpZiAod2VhdGhlci5tYWluLnRlbXAgPCA2KXtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgncmVkJylcbiAgICB9XG4gIH1cbiAgXG59XG5leHBvcnQgZGVmYXVsdCBVSSIsImNsYXNzIFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihjaXR5KSB7XG4gICAgICB0aGlzLmFwaUtleSA9ICcxYzFhY2U3ZTlhZTU1NGM5YjgyY2VlNzM0NzliMGQ4Yic7XG4gICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICB9XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBmcm9tIEFQSSBcblxuICBhc3luYyBnZXRXZWF0aGVyKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RoaXMuY2l0eX0mQVBQSUQ9JHt0aGlzLmFwaUtleX0mdW5pdHM9bWV0cmljYCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XG5cbiAgICAgIC8vKiogeW91IGNhbiB0cnkgd2l0aCByZXNwb25zZURhdGEubWFpbiAqL1xuICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlRGF0YS5tYWluO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcblxuICB9XG5cbiAgLy8gQ2hhbmdlIHdlYXRoZXIgbG9jYXRpb25cbiAgY2hhbmdlTG9jYXRpb24oY2l0eSkge1xuICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgd2VhdGhlciB9IGZyb20gJy4vYXBwJ1xuXG5cbmdldFdlYXRoZXIoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTWNvbnRlbnRMb2FkZWQnLCBnZXRXZWF0aGVyKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctY2hhbmdlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgd2VhdGhlci5jaGFuZ2VMb2NhdGlvbihjaXR5KTtcblxuICBnZXRXZWF0aGVyKCk7XG4gICQoJyNsb2NNb2RhbCcpLm1vZGFsKCdoaWRlJylcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9