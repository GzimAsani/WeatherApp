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




const weather = new _weather__WEBPACK_IMPORTED_MODULE_0__.default('Boston');


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

  _app__WEBPACK_IMPORTED_MODULE_0__.weather.changeLocation('Belgrade');

  (0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();
  $('#locModal').modal('hide')
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNWOzs7QUFHckIsb0JBQW9CLDZDQUFPOzs7QUFHM0IsZUFBZSx3Q0FBRTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxFQUFFLGlFQUFlLFVBQVUsRUFBQzs7QUFFNUIsRTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSx3QkFBd0I7QUFDN0Ysc0RBQXNELHNCQUFzQjtBQUM1RSx1REFBdUQsc0JBQXNCO0FBQzdFLG1EQUFtRCxzQkFBc0I7QUFDekUsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTtBQUNBLGlFQUFlLEU7Ozs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0YsVUFBVSxTQUFTLFlBQVk7O0FBRXZIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEU7Ozs7OztVQ3pCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQzs7QUFFL0IsNkNBQVU7QUFDViw4Q0FBOEMseUNBQVU7O0FBRXhEO0FBQ0E7O0FBRUEsRUFBRSx3REFBc0I7O0FBRXhCLEVBQUUsNkNBQVU7QUFDWjtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWF0aGVyIGZyb20gJy4vd2VhdGhlcidcbmltcG9ydCBVSSBmcm9tICcuL3VpJ1xuXG5cbmNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcignQm9zdG9uJyk7XG5cblxuY29uc3QgdWkgPSBuZXcgVUkoKVxuY29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IHtcblxuICB3ZWF0aGVyLmdldFdlYXRoZXIoKVxuICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgdWkucGFpbnQocmVzdWx0cyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cbn1cbiAgZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcblxuICBleHBvcnQge1xuICAgIHdlYXRoZXIsXG4gIH0iLCJjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1sb2NhdGlvbicpO1xuICAgIHRoaXMuZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWRlc2MnKTtcbiAgICB0aGlzLnN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXN0cmluZycpO1xuICAgIHRoaXMuZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWRldGFpbHMnKTtcbiAgICB0aGlzLmljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1pY29uJyk7XG4gICAgdGhpcy5odW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWh1bWlkaXR5Jyk7XG4gICAgLy8gdGhpcy5mZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1mZWVscy1saWtlJyk7XG4gICAgLy8gdGhpcy5kZXdwb2ludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWRld3BvaW50Jyk7XG4gICAgdGhpcy5tYXhUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctbWF4dGVtcCcpO1xuICAgIHRoaXMucHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1wcmVzc3VyZScpO1xuICAgIHRoaXMud2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXdpbmQnKTtcbiAgfVxuXG4gIHBhaW50KHdlYXRoZXIpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xuICAgIHRoaXMuZGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluOztcbiAgICB0aGlzLnN0cmluZy50ZXh0Q29udGVudCA9IHdlYXRoZXIubWFpbi50ZW1wICsgXCLihINcIjtcbiAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3dlYXRoZXIud2VhdGhlclswXS5pY29ufS5wbmdgKTtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYFJlbGF0aXZlIEh1bWlkaXR5OiAke3dlYXRoZXIubWFpbi5odW1pZGl0eX0gJWA7XG4gICAgdGhpcy5tYXhUZW1wLnRleHRDb250ZW50ID0gYE1heGltdW0gVGVtcGVyYXR1cmU6ICR7d2VhdGhlci5tYWluLnRlbXBfbWF4fSDihINgO1xuICAgIHRoaXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmUgTGV2ZWw6ICR7d2VhdGhlci5tYWluLnByZXNzdXJlfWA7XG4gICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlci53aW5kLnNwZWVkfSBtL3NgO1xuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVJIiwiY2xhc3MgV2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGNpdHkpIHtcbiAgICAgIHRoaXMuYXBpS2V5ID0gJzFjMWFjZTdlOWFlNTU0YzliODJjZWU3MzQ3OWIwZDhiJztcbiAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gIH1cblxuICAvLyBGZXRjaCB3ZWF0aGVyIGZyb20gQVBJIFxuXG4gIGFzeW5jIGdldFdlYXRoZXIoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dGhpcy5jaXR5fSZBUFBJRD0ke3RoaXMuYXBpS2V5fSZ1bml0cz1tZXRyaWNgKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcblxuICAgICAgLy8qKiB5b3UgY2FuIHRyeSB3aXRoIHJlc3BvbnNlRGF0YS5tYWluICovXG4gICAgICAvLyByZXR1cm4gcmVzcG9uc2VEYXRhLm1haW47XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuXG4gIH1cblxuICAvLyBDaGFuZ2Ugd2VhdGhlciBsb2NhdGlvblxuICBjaGFuZ2VMb2NhdGlvbihjaXR5KSB7XG4gICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSAnLi9hcHAnXG5cbmdldFdlYXRoZXIoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTWNvbnRlbnRMb2FkZWQnLCBnZXRXZWF0aGVyKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctY2hhbmdlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgd2VhdGhlci5jaGFuZ2VMb2NhdGlvbignQmVsZ3JhZGUnKTtcblxuICBnZXRXZWF0aGVyKCk7XG4gICQoJyNsb2NNb2RhbCcpLm1vZGFsKCdoaWRlJylcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9