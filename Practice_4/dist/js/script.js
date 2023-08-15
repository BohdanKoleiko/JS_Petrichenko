/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = function () {
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-modal-close]');
  const modalOpenBtn = document.querySelectorAll('[data-modal]');
  const html = document.documentElement;
  const listenBtnAction = event => {
    if (event.code === 'Escape') {
      closeModalWindow();
    }
  };
  const closeModalWindow = () => {
    modal.style.display = 'none';
    html.style.overflow = 'visible';
    document.removeEventListener('keydown', listenBtnAction);
  };
  const openModalWindow = () => {
    modal.style.display = 'block';
    html.style.overflow = 'hidden';
    document.addEventListener('keydown', listenBtnAction);
    clearInterval(timerModalID);
    window.removeEventListener('scroll', showModalByScroll);
  };
  modalOpenBtn.forEach(item => {
    item.addEventListener('click', openModalWindow);
  });
  modalCloseBtn.addEventListener('click', closeModalWindow);
  modal.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('modal')) {
      closeModalWindow();
    }
  });
  const timerModalID = setInterval(openModalWindow, 5000);
  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModalWindow();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tabs = function () {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsParent = document.querySelector('.tabheader__items');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const hideTabContent = function () {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
      item.children[1].classList.remove('slide-in');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  };
  const showTabContent = function (i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabsContent[i].children[1].classList.add('slide-in');
    tabs[i].classList.add('tabheader__item_active');
  };
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/js/timeCounter.js":
/*!*******************************!*\
  !*** ./src/js/timeCounter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timeCounter = function () {
  //const today = new Date();

  //const deadline = function (endDay) {
  //   return today.setDate(today.getDate() + endDay)
  //}
  const deadline = '2023-08-20';
  const getTimeRemaining = function (endtime) {
    const t = Date.parse(endtime) - Date.now();
    let days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0;
    if (t > 0) {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / 1000 / 60 % 60);
      seconds = Math.floor(t / 1000 % 60);
    }
    const time = {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
    return time;
  };
  const getZero = num => {
    if (!isNaN(num) || num || num > 0) {
      if (num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }
  };
  const setClock = function (selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total < 0 || !t.total) {
        clearInterval(timeInterval);
      }
    }
    updateClock();
  };
  setClock('.timer', deadline);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeCounter);

/***/ }),

/***/ "./src/js/use-constructor(classes).js":
/*!********************************************!*\
  !*** ./src/js/use-constructor(classes).js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MenuCard {
  /**
   * 
   * @param {string} title card's title
   * @param {string} text description
   * @param {string} srcImg link to an image
   * @param {string} altTxt alt text for an image
   * @param {number} price price
   * @param {parentElem} parentElem parent element for cards
   * @param {classes} classes it`s possible to pass as many aditioanal css classes to card`s wrapper if you need that as possible
   */
  constructor(title, text, srcImg, altTxt, price, parentElem, ...classes) {
    this.title = title;
    this.text = text;
    this.srcImg = srcImg;
    this.altTxt = altTxt;
    this.price = price;
    this.classes = classes;
    this.parentElem = document.querySelector(parentElem);
  }
  exchangeToUAH() {
    const APIKey = 'f33b579dee802eeeff591f3e164ca910';
    const endpoint = 'latest';
    const HTTPMethod = 'GET';
    const httpRequest = new XMLHttpRequest();
    const url = `http://data.fixer.io/api/${endpoint}?access_key=${APIKey}`;
    let test;
    httpRequest.open(HTTPMethod, url);
    httpRequest.responseType = 'json';
    httpRequest.send();
    //httpRequest.addEventListener('load', getUAH);
    //let promice = new Promise(function (resolve, reject) {
    //   httpRequest.addEventListener('load', function () {
    //      let newPrice = this.response.rates.UAH
    //      resolve(newPrice);
    //   });
    //});
    //promice.then(function (data) {
    //   return data
    //});
  }

  render() {
    if (this.parentElem) {
      const menuItem = document.createElement('div');
      if (this.classes.length === 0) {
        menuItem.classList.add('menu__item');
      } else {
        this.classes.forEach(classItem => {
          menuItem.classList.add(classItem);
        });
      }
      const menuItemContent = `
            <img src=${this.srcImg} alt=${this.altTxt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
      menuItem.innerHTML = menuItemContent;
      this.parentElem.append(menuItem);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuCard);

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/js/tabs.js");
/* harmony import */ var _timeCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeCounter */ "./src/js/timeCounter.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _use_constructor_classes___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-constructor(classes) */ "./src/js/use-constructor(classes).js");






window.addEventListener("DOMContentLoaded", () => {
  (0,_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_timeCounter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  //modal();

  new _use_constructor_classes___WEBPACK_IMPORTED_MODULE_3__["default"]('Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 'img/tabs/vegy.jpg', 'vegy', 229, '.menu__field .container').render();
  new _use_constructor_classes___WEBPACK_IMPORTED_MODULE_3__["default"]('Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 'img/tabs/elite.jpg', 'elite', 550, '.menu__field .container').render();
  const menuLean = new _use_constructor_classes___WEBPACK_IMPORTED_MODULE_3__["default"]('Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 'img/tabs/post.jpg', 'lean', 430, '.menu__field .container');
  menuLean.render();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map