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
    this.maxTemp = document.getElementById('w-maxtemp');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.background = document.querySelector('background')
    this.celcius = document.getElementById('with-celcius')
    this.fahrenheit = document.getElementById('with-fahrenheit')
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp + "℃";
    this.string2.textContent = `${(0,_converttemp__WEBPACK_IMPORTED_MODULE_0__.default)(weather.main.temp)}` + "°F";
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.maxTemp.textContent = `Maximum Temperature: ${weather.main.temp_max} ℃`;
    this.pressure.textContent = `Pressure Level: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;

    if(weather.main.temp > 7){
      background.classList.add('blue');
      background.classList.remove('red')
    } else if (weather.main.temp < 6){
      background.classList.add('red')
      background.classList.remove('blue')
    }    
  }
  
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);



function toggleStatus(status) {
  if (status.target.classList.contains('status')) {
    if (status.target.textContent === 'Done!') {
      status.target.textContent = 'Not yet!';
    } else {
      status.target.textContent = 'Done!';
    }
  }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2NvbnZlcnR0ZW1wLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1Y7QUFDVTs7O0FBRy9CLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBLG9CQUFvQiw2Q0FBTzs7O0FBRzNCLGVBQWUsd0NBQUU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsRUFBRSxpRUFBZSxVQUFVLEVBQUM7O0FBRTVCLEU7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7OztBQ3JCeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscURBQVcsb0JBQW9CO0FBQ2pFLHFFQUFxRSx3QkFBd0I7QUFDN0Ysc0RBQXNELHNCQUFzQjtBQUM1RSx1REFBdUQsc0JBQXNCO0FBQzdFLG1EQUFtRCxzQkFBc0I7QUFDekUsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxFQUFFOzs7O0FBSWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3RkFBd0YsVUFBVSxTQUFTLFlBQVk7O0FBRXZIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEU7Ozs7OztVQ3pCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQzs7O0FBRy9CLDZDQUFVO0FBQ1YsOENBQThDLHlDQUFVOzs7QUFHeEQ7QUFDQTs7QUFFQSxFQUFFLHdEQUFzQjs7QUFFeEIsRUFBRSw2Q0FBVTtBQUNaO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJ1xuaW1wb3J0IFVJIGZyb20gJy4vdWknXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnXG5cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5jb25zdCB3ZWF0aGVyTG9jYXRpb24gPSBzdG9yYWdlLmdldExvY2F0aW9uRGF0YSgpO1xuY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyKHdlYXRoZXJMb2NhdGlvbi5jaXR5KTtcblxuXG5jb25zdCB1aSA9IG5ldyBVSSgpXG5jb25zdCBnZXRXZWF0aGVyID0gKCkgPT4ge1xuXG4gIHdlYXRoZXIuZ2V0V2VhdGhlcigpXG4gICAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICB1aS5wYWludChyZXN1bHRzKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxufVxuICBleHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuXG4gIGV4cG9ydCB7XG4gICAgd2VhdGhlcixcbiAgICB1aSxcbiAgfSIsImNvbnN0IENvbnZlcnR0ZW1wID0gKGlucHV0KSA9PiB7XG4gIGNvbnN0IGZhaHJlbmhlaXQgPSBNYXRoLnJvdW5kKCg5IC8gNSkgKiBpbnB1dCArIDMyKTtcbiAgcmV0dXJuIGZhaHJlbmhlaXQ7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnR0ZW1wOyIsImNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdHk7XG4gICAgdGhpcy5kZWZhdWx0Q2l0eSA9ICdQYXJpcydcbiAgfVxuXG4gIGdldExvY2F0aW9uRGF0YSgpIHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2l0eScpID09PSBudWxsKSB7XG4gICAgICB0aGlzLmNpdHkgPSB0aGlzLmRlZmF1bHRDaXR5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5Jyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBjaXR5OiB0aGlzLmNpdHlcbiAgICB9XG4gIH1cbiAgc2V0TG9jYXRpb25EYXRhKGNpdHkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2l0eScsIGNpdHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2UiLCJpbXBvcnQgQ29udmVydHRlbXAgZnJvbSAnLi9jb252ZXJ0dGVtcCc7XG5jbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1sb2NhdGlvbicpO1xuICAgIHRoaXMuZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWRlc2MnKTtcbiAgICB0aGlzLnN0cmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXN0cmluZycpO1xuICAgIHRoaXMuc3RyaW5nMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXN0cmluZzInKTtcbiAgICB0aGlzLmRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1kZXRhaWxzJyk7XG4gICAgdGhpcy5pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctaWNvbicpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1odW1pZGl0eScpO1xuICAgIHRoaXMubWF4VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LW1heHRlbXAnKTtcbiAgICB0aGlzLnByZXNzdXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctcHJlc3N1cmUnKTtcbiAgICB0aGlzLndpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy13aW5kJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFja2dyb3VuZCcpXG4gICAgdGhpcy5jZWxjaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpdGgtY2VsY2l1cycpXG4gICAgdGhpcy5mYWhyZW5oZWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpdGgtZmFocmVuaGVpdCcpXG4gIH1cblxuICBwYWludCh3ZWF0aGVyKSB7XG4gICAgdGhpcy5sb2NhdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIubmFtZTtcbiAgICB0aGlzLmRlc2MudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbjtcbiAgICB0aGlzLnN0cmluZy50ZXh0Q29udGVudCA9IHdlYXRoZXIubWFpbi50ZW1wICsgXCLihINcIjtcbiAgICB0aGlzLnN0cmluZzIudGV4dENvbnRlbnQgPSBgJHtDb252ZXJ0dGVtcCh3ZWF0aGVyLm1haW4udGVtcCl9YCArIFwiwrBGXCI7XG4gICAgdGhpcy5pY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn0ucG5nYCk7XG4gICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGBSZWxhdGl2ZSBIdW1pZGl0eTogJHt3ZWF0aGVyLm1haW4uaHVtaWRpdHl9ICVgO1xuICAgIHRoaXMubWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIFRlbXBlcmF0dXJlOiAke3dlYXRoZXIubWFpbi50ZW1wX21heH0g4oSDYDtcbiAgICB0aGlzLnByZXNzdXJlLnRleHRDb250ZW50ID0gYFByZXNzdXJlIExldmVsOiAke3dlYXRoZXIubWFpbi5wcmVzc3VyZX1gO1xuICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXIud2luZC5zcGVlZH0gbS9zYDtcblxuICAgIGlmKHdlYXRoZXIubWFpbi50ZW1wID4gNyl7XG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JsdWUnKTtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgncmVkJylcbiAgICB9IGVsc2UgaWYgKHdlYXRoZXIubWFpbi50ZW1wIDwgNil7XG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3JlZCcpXG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdWUnKVxuICAgIH0gICAgXG4gIH1cbiAgXG59XG5leHBvcnQgZGVmYXVsdCBVSVxuXG5cblxuZnVuY3Rpb24gdG9nZ2xlU3RhdHVzKHN0YXR1cykge1xuICBpZiAoc3RhdHVzLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXR1cycpKSB7XG4gICAgaWYgKHN0YXR1cy50YXJnZXQudGV4dENvbnRlbnQgPT09ICdEb25lIScpIHtcbiAgICAgIHN0YXR1cy50YXJnZXQudGV4dENvbnRlbnQgPSAnTm90IHlldCEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMudGFyZ2V0LnRleHRDb250ZW50ID0gJ0RvbmUhJztcbiAgICB9XG4gIH1cbn0iLCJjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoY2l0eSkge1xuICAgICAgdGhpcy5hcGlLZXkgPSAnMWMxYWNlN2U5YWU1NTRjOWI4MmNlZTczNDc5YjBkOGInO1xuICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgfVxuXG4gIC8vIEZldGNoIHdlYXRoZXIgZnJvbSBBUEkgXG5cbiAgYXN5bmMgZ2V0V2VhdGhlcigpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0aGlzLmNpdHl9JkFQUElEPSR7dGhpcy5hcGlLZXl9JnVuaXRzPW1ldHJpY2ApO1xuXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuXG4gICAgICAvLyoqIHlvdSBjYW4gdHJ5IHdpdGggcmVzcG9uc2VEYXRhLm1haW4gKi9cbiAgICAgIC8vIHJldHVybiByZXNwb25zZURhdGEubWFpbjtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG5cbiAgfVxuXG4gIC8vIENoYW5nZSB3ZWF0aGVyIGxvY2F0aW9uXG4gIGNoYW5nZUxvY2F0aW9uKGNpdHkpIHtcbiAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2FwcCdcbmltcG9ydCB7IHdlYXRoZXIgfSBmcm9tICcuL2FwcCdcblxuXG5nZXRXZWF0aGVyKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01jb250ZW50TG9hZGVkJywgZ2V0V2VhdGhlcik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctY2hhbmdlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWU7XG5cbiAgd2VhdGhlci5jaGFuZ2VMb2NhdGlvbihjaXR5KTtcblxuICBnZXRXZWF0aGVyKCk7XG4gICQoJyNsb2NNb2RhbCcpLm1vZGFsKCdoaWRlJylcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9