/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/***/ (() => {

const Hamburger = document.getElementById("hamburger-menu");
const Nav = document.querySelector('.nav');

function getFocusableElements() {
    return [
        Hamburger,  // ハンバーガーメニューを含める
        ...Nav.querySelectorAll(".nav__link, .btn--nav") // nav 内のフォーカス可能な要素
    ];
}

Hamburger.addEventListener('click', () => {
    const Expanded = Hamburger.getAttribute('aria-expanded');

    if (Expanded === 'false') {
        Hamburger.setAttribute('aria-expanded', 'true');
        Hamburger.classList.add('is-active');
        Nav.setAttribute('aria-hidden', 'false');
        Nav.classList.add('is-active');

        const focusableElements = getFocusableElements();
        focusableElements[1].focus(); // 最初の `nav__link` に即座にフォーカス

        document.addEventListener("keydown", (event) => trapFocus(event, focusableElements));
    } else {
        Hamburger.setAttribute('aria-expanded', 'false');
        Hamburger.classList.remove('is-active');
        Nav.setAttribute('aria-hidden', 'true');
        Nav.classList.remove('is-active');

        document.removeEventListener("keydown", trapFocus);
    }
});

// フォーカスを `nav` 内に閉じ込める関数
function trapFocus(event, focusableElements) {
    if (event.key === "Tab") {
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Shift + Tab の場合
            if (document.activeElement === firstFocusableElement) {
                event.preventDefault();
                lastFocusableElement.focus();
            }
        } else { // 通常の Tab の場合
            if (document.activeElement === lastFocusableElement) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }
}

// `nav__link` がクリックされたときだけ `hamburger-menu` にフォーカスを戻す
document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            Hamburger.focus();
        }, 100); // ほんの少し遅延させることで自然な動作にする
    });
});

// `hamburger-menu` にフォーカスがある状態で Shift + Enter を押したら、前の要素にフォーカス
Hamburger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.shiftKey) {
        event.preventDefault();

        // `hamburger-menu` の前のフォーカス可能な要素を取得
        const focusableElements = document.querySelectorAll("a, button, input, textarea, select");
        const hamburgerIndex = Array.from(focusableElements).indexOf(Hamburger);

        if (hamburgerIndex > 0) {
            focusableElements[hamburgerIndex - 1].focus();
        }
    }
});


/***/ }),

/***/ "./src/js/inview.js":
/*!**************************!*\
  !*** ./src/js/inview.js ***!
  \**************************/
/***/ (() => {

const addClassOnIntersect = (selector, className) => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target); // 一度だけ実行
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  };

  // BBBが選ばれる理由（スライド左）
  addClassOnIntersect('.inview-slide-left', 'slide-left');

  // BBBが選ばれる理由（スライド右）
  addClassOnIntersect('.inview-slide-right', 'slide-right');

  // 受講生の声（ふきだし）
  addClassOnIntersect('.inview-balloon', 'balloon');


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger.js */ "./src/js/hamburger.js");
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hamburger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inview.js */ "./src/js/inview.js");
/* harmony import */ var _inview_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inview_js__WEBPACK_IMPORTED_MODULE_2__);
// scssファイル

// jsファイル


})();

/******/ })()
;
//# sourceMappingURL=bundle.f1d38b696041a248ad46.js.map