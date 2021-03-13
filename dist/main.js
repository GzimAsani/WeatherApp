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

    this.fahrenheit.addEventListener('click', (e) => {
      this.string2.classList.remove('no-display');
      this.string.classList.add('no-display')
    })

    this.celcius.addEventListener('click', (e) => {
      this.string2.classList.add('no-display');
      this.string.classList.remove('no-display')
    })

  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);



// function toggleStatus(status) {
//   if (status.target.classList.contains('status')) {
//     if (status.target.textContent === 'Done!') {
//       status.target.textContent = 'Not yet!';
//     } else {
//       status.target.textContent = 'Done!';
//     }
//   }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL2NvbnZlcnR0ZW1wLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL1dlYXRoZXJBcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXJBcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlckFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1Y7QUFDVTs7O0FBRy9CLG9CQUFvQiw2Q0FBTztBQUMzQjtBQUNBLG9CQUFvQiw2Q0FBTzs7O0FBRzNCLGVBQWUsd0NBQUU7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsRUFBRSxpRUFBZSxVQUFVLEVBQUM7O0FBRTVCLEU7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7Ozs7Ozs7Ozs7OztBQ3JCeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscURBQVcsb0JBQW9CO0FBQ2pFLHFFQUFxRSx3QkFBd0I7QUFDN0Ysc0RBQXNELHNCQUFzQjtBQUM1RSx1REFBdUQsc0JBQXNCO0FBQzdFLG1EQUFtRCxzQkFBc0I7QUFDekUsMkNBQTJDLG1CQUFtQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBLGlFQUFlLEVBQUU7Ozs7QUFJakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdGQUF3RixVQUFVLFNBQVMsWUFBWTs7QUFFdkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRTs7Ozs7O1VDekJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ044QjtBQUNDOzs7QUFHL0IsNkNBQVU7QUFDViw4Q0FBOEMseUNBQVU7OztBQUd4RDtBQUNBOztBQUVBLEVBQUUsd0RBQXNCOztBQUV4QixFQUFFLDZDQUFVO0FBQ1o7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2VhdGhlciBmcm9tICcuL3dlYXRoZXInXG5pbXBvcnQgVUkgZnJvbSAnLi91aSdcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZSdcblxuXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbmNvbnN0IHdlYXRoZXJMb2NhdGlvbiA9IHN0b3JhZ2UuZ2V0TG9jYXRpb25EYXRhKCk7XG5jb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIod2VhdGhlckxvY2F0aW9uLmNpdHkpO1xuXG5cbmNvbnN0IHVpID0gbmV3IFVJKClcbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG5cbiAgd2VhdGhlci5nZXRXZWF0aGVyKClcbiAgICAudGhlbihyZXN1bHRzID0+IHtcbiAgICAgIHVpLnBhaW50KHJlc3VsdHMpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG59XG4gIGV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG5cbiAgZXhwb3J0IHtcbiAgICB3ZWF0aGVyLFxuICAgIHVpLFxuICB9IiwiY29uc3QgQ29udmVydHRlbXAgPSAoaW5wdXQpID0+IHtcbiAgY29uc3QgZmFocmVuaGVpdCA9IE1hdGgucm91bmQoKDkgLyA1KSAqIGlucHV0ICsgMzIpO1xuICByZXR1cm4gZmFocmVuaGVpdDtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVydHRlbXA7IiwiY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2l0eTtcbiAgICB0aGlzLmRlZmF1bHRDaXR5ID0gJ1BhcmlzJ1xuICB9XG5cbiAgZ2V0TG9jYXRpb25EYXRhKCkge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2l0eSA9IHRoaXMuZGVmYXVsdENpdHlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHk6IHRoaXMuY2l0eVxuICAgIH1cbiAgfVxuICBzZXRMb2NhdGlvbkRhdGEoY2l0eSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjaXR5JywgY2l0eSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZSIsImltcG9ydCBDb252ZXJ0dGVtcCBmcm9tICcuL2NvbnZlcnR0ZW1wJztcbmNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWxvY2F0aW9uJyk7XG4gICAgdGhpcy5kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctZGVzYycpO1xuICAgIHRoaXMuc3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctc3RyaW5nJyk7XG4gICAgdGhpcy5zdHJpbmcyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctc3RyaW5nMicpO1xuICAgIHRoaXMuZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWRldGFpbHMnKTtcbiAgICB0aGlzLmljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1pY29uJyk7XG4gICAgdGhpcy5odW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LWh1bWlkaXR5Jyk7XG4gICAgdGhpcy5tYXhUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ctbWF4dGVtcCcpO1xuICAgIHRoaXMucHJlc3N1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1wcmVzc3VyZScpO1xuICAgIHRoaXMud2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3LXdpbmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYWNrZ3JvdW5kJylcbiAgICB0aGlzLmNlbGNpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2l0aC1jZWxjaXVzJylcbiAgICB0aGlzLmZhaHJlbmhlaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2l0aC1mYWhyZW5oZWl0JylcbiAgfVxuXG4gIHBhaW50KHdlYXRoZXIpIHtcbiAgICB0aGlzLmxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5uYW1lO1xuICAgIHRoaXMuZGVzYy50ZXh0Q29udGVudCA9IHdlYXRoZXIud2VhdGhlclswXS5tYWluO1xuICAgIHRoaXMuc3RyaW5nLnRleHRDb250ZW50ID0gd2VhdGhlci5tYWluLnRlbXAgKyBcIuKEg1wiO1xuICAgIHRoaXMuc3RyaW5nMi50ZXh0Q29udGVudCA9IGAke0NvbnZlcnR0ZW1wKHdlYXRoZXIubWFpbi50ZW1wKX1gICsgXCLCsEZcIjtcbiAgICB0aGlzLmljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke3dlYXRoZXIud2VhdGhlclswXS5pY29ufS5wbmdgKTtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYFJlbGF0aXZlIEh1bWlkaXR5OiAke3dlYXRoZXIubWFpbi5odW1pZGl0eX0gJWA7XG4gICAgdGhpcy5tYXhUZW1wLnRleHRDb250ZW50ID0gYE1heGltdW0gVGVtcGVyYXR1cmU6ICR7d2VhdGhlci5tYWluLnRlbXBfbWF4fSDihINgO1xuICAgIHRoaXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBgUHJlc3N1cmUgTGV2ZWw6ICR7d2VhdGhlci5tYWluLnByZXNzdXJlfWA7XG4gICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlci53aW5kLnNwZWVkfSBtL3NgO1xuXG4gICAgaWYod2VhdGhlci5tYWluLnRlbXAgPiA3KXtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xuICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKVxuICAgIH0gZWxzZSBpZiAod2VhdGhlci5tYWluLnRlbXAgPCA2KXtcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgncmVkJylcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnYmx1ZScpXG4gICAgfSAgICBcblxuICAgIHRoaXMuZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLnN0cmluZzIuY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpO1xuICAgICAgdGhpcy5zdHJpbmcuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpXG4gICAgfSlcblxuICAgIHRoaXMuY2VsY2l1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLnN0cmluZzIuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpO1xuICAgICAgdGhpcy5zdHJpbmcuY2xhc3NMaXN0LnJlbW92ZSgnbm8tZGlzcGxheScpXG4gICAgfSlcblxuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFVJXG5cblxuXG4vLyBmdW5jdGlvbiB0b2dnbGVTdGF0dXMoc3RhdHVzKSB7XG4vLyAgIGlmIChzdGF0dXMudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhdHVzJykpIHtcbi8vICAgICBpZiAoc3RhdHVzLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0RvbmUhJykge1xuLy8gICAgICAgc3RhdHVzLnRhcmdldC50ZXh0Q29udGVudCA9ICdOb3QgeWV0ISc7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHN0YXR1cy50YXJnZXQudGV4dENvbnRlbnQgPSAnRG9uZSEnO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSIsImNsYXNzIFdlYXRoZXIge1xuICBjb25zdHJ1Y3RvcihjaXR5KSB7XG4gICAgICB0aGlzLmFwaUtleSA9ICcxYzFhY2U3ZTlhZTU1NGM5YjgyY2VlNzM0NzliMGQ4Yic7XG4gICAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICB9XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBmcm9tIEFQSSBcblxuICBhc3luYyBnZXRXZWF0aGVyKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RoaXMuY2l0eX0mQVBQSUQ9JHt0aGlzLmFwaUtleX0mdW5pdHM9bWV0cmljYCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNwb25zZURhdGE7XG5cbiAgICAgIC8vKiogeW91IGNhbiB0cnkgd2l0aCByZXNwb25zZURhdGEubWFpbiAqL1xuICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlRGF0YS5tYWluO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcblxuICB9XG5cbiAgLy8gQ2hhbmdlIHdlYXRoZXIgbG9jYXRpb25cbiAgY2hhbmdlTG9jYXRpb24oY2l0eSkge1xuICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vYXBwJ1xuaW1wb3J0IHsgd2VhdGhlciB9IGZyb20gJy4vYXBwJ1xuXG5cbmdldFdlYXRoZXIoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTWNvbnRlbnRMb2FkZWQnLCBnZXRXZWF0aGVyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndy1jaGFuZ2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZTtcblxuICB3ZWF0aGVyLmNoYW5nZUxvY2F0aW9uKGNpdHkpO1xuXG4gIGdldFdlYXRoZXIoKTtcbiAgJCgnI2xvY01vZGFsJykubW9kYWwoJ2hpZGUnKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=