/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* AFFICHAGE OVERLAY */
var overlay = document.querySelector('.overlay');
var navbar = document.querySelector('.navbar');
var btnMenu = document.querySelector('.btn-menu');
var textMenu = document.querySelector('.btn-menu a');
var body = document.querySelector('body');
var listeLiens = document.querySelector('.overlay__list');
btnMenu.addEventListener('click', function (e) {
  /* Doc : The preventDefault() method stops the default action of a selected element from happening by a user. */
  e.preventDefault();

  if (overlay.classList.contains('afficherMenu')) {
    overlay.classList.remove('afficherMenu');
    textMenu.innerHTML = "menu";
    navbar.classList.add('overlay--shadow');
  } else {
    overlay.classList.add('afficherMenu');
    textMenu.innerHTML = "fermer";
    navbar.classList.remove('overlay--shadow');
  }

  listeLiens.addEventListener('click', function (e) {
    overlay.classList.remove('afficherMenu');
    navbar.classList.add('overlay--shadow');
    textMenu.innerHTML = "menu";
  });
});
/* CURSOR FOLLOW */

function followCursor() {
  var cursor = document.getElementById("main-cursor");
  var followCursor = document.getElementById("follow-cursor");
  var hoverTargets = document.querySelectorAll(".mouse-hover");
  document.addEventListener("mousemove", function (event) {
    var posX = event.pageX,
        posY = event.pageY;
    cursor.style.left = "".concat(posX - cursor.offsetWidth / 2, "px");
    cursor.style.top = "".concat(posY - cursor.offsetHeight / 2, "px");
    followCursor.style.left = "".concat(posX - followCursor.offsetWidth / 2, "px");
    followCursor.style.top = "".concat(posY - followCursor.offsetHeight / 2, "px");
  });
}

followCursor();
/* PROGRESS BAR */

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = winScroll / height * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*
* demo.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2019, Codrops
* http://www.codrops.com
*/


{
  // helper functions
  var MathUtils = {
    // map number x from range [a, b] to [c, d]
    map: function map(x, a, b, c, d) {
      return (x - a) * (d - c) / (b - a) + c;
    },
    // linear interpolation
    lerp: function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    }
  }; // body element

  var _body = document.body; // calculate the viewport size

  var winsize;

  var calcWinsize = function calcWinsize() {
    return winsize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  calcWinsize(); // and recalculate on resize

  window.addEventListener('resize', calcWinsize); // scroll position and update function

  var docScroll;

  var getPageYScroll = function getPageYScroll() {
    return docScroll = window.pageYOffset || document.documentElement.scrollTop;
  };

  window.addEventListener('scroll', getPageYScroll); // Item

  var Item =
  /*#__PURE__*/
  function () {
    function Item(el) {
      var _this = this;

      _classCallCheck(this, Item);

      // the .item element
      this.DOM = {
        el: el
      }; // the inner image

      this.DOM.image = this.DOM.el.querySelector('.item__img');
      console.log(this.DOM.image);
      this.renderedStyles = {
        // here we define which property will change as we scroll the page and the items is inside the viewport
        // in this case we will be translating the image on the y-axis
        // we interpolate between the previous and current value to achieve a smooth effect
        innerTranslationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // the maximum value to translate the image is set in a CSS variable (--overflow)
          maxValue: parseInt(getComputedStyle(this.DOM.image).getPropertyValue('--overflow'), 10),
          // current value setter
          // the value of the translation will be:
          // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
          // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
          setValue: function setValue() {
            var maxValue = _this.renderedStyles.innerTranslationY.maxValue;
            var minValue = -1 * maxValue;
            return Math.max(Math.min(MathUtils.map(_this.props.top - docScroll, winsize.height, -1 * _this.props.height, minValue, maxValue), maxValue), minValue);
          }
        }
      }; // set the initial values

      this.update(); // use the IntersectionObserver API to check when the element is inside the viewport
      // only then the element translation will be updated

      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          return _this.isVisible = entry.intersectionRatio > 0;
        });
      });
      this.observer.observe(this.DOM.el); // init/bind events

      this.initEvents();
    }

    _createClass(Item, [{
      key: "update",
      value: function update() {
        // gets the item's height and top (relative to the document)
        this.getSize(); // sets the initial value (no interpolation)

        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        } // translate the image


        this.layout();
      }
    }, {
      key: "getSize",
      value: function getSize() {
        var rect = this.DOM.el.getBoundingClientRect();
        this.props = {
          // item's height
          height: rect.height,
          // offset top relative to the document
          top: docScroll + rect.top
        };
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;

        window.addEventListener('resize', function () {
          return _this2.resize();
        });
      }
    }, {
      key: "resize",
      value: function resize() {
        // on resize rest sizes and update the translation value
        this.update();
      }
    }, {
      key: "render",
      value: function render() {
        // update the current and interpolated values
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].setValue();
          this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        } // and translates the image


        this.layout();
      }
    }, {
      key: "layout",
      value: function layout() {
        // translates the image
        this.DOM.image.style.transform = "translate3d(0,".concat(this.renderedStyles.innerTranslationY.previous, "px,0)");
      }
    }]);

    return Item;
  }(); // SmoothScroll


  var SmoothScroll =
  /*#__PURE__*/
  function () {
    function SmoothScroll() {
      var _this3 = this;

      _classCallCheck(this, SmoothScroll);

      // the <main> element
      this.DOM = {
        main: document.querySelector('main')
      }; // the scrollable element
      // we translate this element when scrolling (y-axis)

      this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]'); // the items on the page

      this.items = [];

      _toConsumableArray(this.DOM.main.querySelectorAll('.content > .item')).forEach(function (item) {
        return _this3.items.push(new Item(item));
      }); // here we define which property will change as we scroll the page
      // in this case we will be translating on the y-axis
      // we interpolate between the previous and current value to achieve the smooth scrolling effect


      this.renderedStyles = {
        translationY: {
          // interpolated value
          previous: 0,
          // current value
          current: 0,
          // amount to interpolate
          ease: 0.1,
          // current value setter
          // in this case the value of the translation will be the same like the document scroll
          setValue: function setValue() {
            return docScroll;
          }
        }
      }; // set the body's height

      this.setSize(); // set the initial values

      this.update(); // the <main> element's style needs to be modified

      this.style(); // init/bind events

      this.initEvents(); // start the render loop

      requestAnimationFrame(function () {
        return _this3.render();
      });
    }

    _createClass(SmoothScroll, [{
      key: "update",
      value: function update() {
        // sets the initial value (no interpolation) - translate the scroll value
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
        } // translate the scrollable element


        this.layout();
      }
    }, {
      key: "layout",
      value: function layout() {
        // translates the scrollable element
        this.DOM.scrollable.style.transform = "translate3d(0,".concat(-1 * this.renderedStyles.translationY.previous, "px,0)");
      }
    }, {
      key: "setSize",
      value: function setSize() {
        // set the height of the body in order to keep the scrollbar on the page
        _body.style.height = "".concat(this.DOM.scrollable.scrollHeight, "px");
      }
    }, {
      key: "style",
      value: function style() {
        // the <main> needs to "stick" to the screen and not scroll
        // for that we set it to position fixed and overflow hidden 
        this.DOM.main.style.position = 'fixed';
        this.DOM.main.style.width = this.DOM.main.style.height = '100%';
        this.DOM.main.style.top = this.DOM.main.style.left = 0;
        this.DOM.main.style.overflow = 'hidden';
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this4 = this;

        // on resize reset the body's height
        window.addEventListener('resize', function () {
          return _this4.setSize();
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        // update the current and interpolated values
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].current = this.renderedStyles[key].setValue();
          this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
        } // and translate the scrollable element


        this.layout(); // for every item

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            // if the item is inside the viewport call it's render function
            // this will update the item's inner image translation, based on the document scroll value and the item's position on the viewport
            if (item.isVisible) {
              item.render();
            }
          } // loop..

        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        requestAnimationFrame(function () {
          return _this5.render();
        });
      }
    }]);

    return SmoothScroll;
  }();
  /***********************************/

  /********** Preload stuff **********/
  // Preload images


  var preloadImages = function preloadImages() {
    return new Promise(function (resolve, reject) {
      imagesLoaded(document.querySelectorAll('.item__img'), {
        background: true
      }, resolve);
    });
  }; // And then..


  preloadImages().then(function () {
    // Remove the loader
    document.body.classList.remove('loading'); // Get the scroll position

    getPageYScroll(); // Initialize the Smooth Scrolling

    new SmoothScroll();
  });
}

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/scripts/app.js ./src/styles/app.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/arthuranst/Desktop/memoire-design/website-present/dwm-b3g-memoire/src/scripts/app.js */"./src/scripts/app.js");
module.exports = __webpack_require__(/*! /Users/arthuranst/Desktop/memoire-design/website-present/dwm-b3g-memoire/src/styles/app.scss */"./src/styles/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map