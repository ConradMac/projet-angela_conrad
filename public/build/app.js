(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_elementsjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/_elementsjs.js */ "./assets/js/_elementsjs.js");
/* harmony import */ var _js_elementsjs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_elementsjs_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_faq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/faq.js */ "./assets/js/faq.js");
/* harmony import */ var _js_faq_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_faq_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_equipe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/equipe.js */ "./assets/js/equipe.js");
/* harmony import */ var _js_equipe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_equipe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/_nav.js */ "./assets/js/_nav.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_nav_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_seo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/seo.js */ "./assets/js/seo.js");
/* harmony import */ var _js_seo_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_seo_js__WEBPACK_IMPORTED_MODULE_6__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
 // a se souvenir de la manupulation de Nuno teacher.

 // a
// any CSS you import will output into a single css file (app.css in this case)


 // import "./styles/_elementsjs.scss"; // Import the elementsjs.scss file qui va charcher le app.scss.
// import "./styles/_footer.scss"; // Import the footer.scss file qui va charcher le app.scss.
// start the Stimulus application





/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/_elementsjs.js":
/*!**********************************!*\
  !*** ./assets/js/_elementsjs.js ***!
  \**********************************/
/***/ (() => {

var titreSpans = document.querySelectorAll("h1 span");
var btns = document.querySelectorAll(".btn-first");
var logo = document.querySelector(".logo");
var medias = document.querySelectorAll(".bulle");
var l1 = document.querySelector(".l1");
var l2 = document.querySelector(".l2");
window.addEventListener("load", function () {
  var TL = gsap.timeline({
    paused: true
  });
  TL.staggerFrom(titreSpans, 1, {
    top: -50,
    opacity: 0,
    ease: "power2.out"
  }, 0.3).staggerFrom(btns, 1, {
    opacity: 0,
    ease: "power2.out"
  }, 0.3, "-=1").from(l1, 1, {
    width: 0,
    ease: "power2.out"
  }, "-=2").from(l2, 1, {
    width: 0,
    ease: "power2.out"
  }, "-=2").from(logo, 0.4, {
    transform: "scale(0)",
    ease: "power2.out"
  }, "-=2").staggerFrom(medias, 1, {
    right: -200,
    ease: "power2.out"
  }, 0.3, "-=1");
  TL.play();
});

/***/ }),

/***/ "./assets/js/_nav.js":
/*!***************************!*\
  !*** ./assets/js/_nav.js ***!
  \***************************/
/***/ (() => {

var navbarMenu = document.getElementById("navbar");
var burgerMenu = document.getElementById("burger");
var overlayMenu = document.querySelector(".overlay"); // Show and Hide Navbar Function

var toggleMenu = function toggleMenu() {
  navbarMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
}; // Collapsible Mobile Submenu Function


var collapseSubMenu = function collapseSubMenu() {
  navbarMenu.querySelector(".menu-dropdown.active .submenu").removeAttribute("style");
  navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
}; // Toggle Mobile Submenu Function


var toggleSubMenu = function toggleSubMenu(e) {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault();
    var menuDropdown = e.target.parentElement; // If Dropdown is Expanded, then Collapse It

    if (menuDropdown.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Collapse Existing Expanded Dropdown
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
        collapseSubMenu();
      } // Expanded the New Dropdown


      menuDropdown.classList.add("active");
      var subMenu = menuDropdown.querySelector(".submenu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
}; // Fixed Resize Window Function


var resizeWindow = function resizeWindow() {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("active")) {
      toggleMenu();
    }

    if (navbarMenu.querySelector(".menu-dropdown.active")) {
      collapseSubMenu();
    }
  }
}; // Initialize Event Listeners


burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);

/***/ }),

/***/ "./assets/js/equipe.js":
/*!*****************************!*\
  !*** ./assets/js/equipe.js ***!
  \*****************************/
/***/ (() => {

// const modeSwitch = document.querySelector("#darkmode");
// modeSwitch.addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark");
// });

/***/ }),

/***/ "./assets/js/faq.js":
/*!**************************!*\
  !*** ./assets/js/faq.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

// let label permet de récupérer tous les éléments ayant la classe label
var label = document.querySelectorAll(".box"); //la fonction qui permet d'ajouter la classe active à l'élément cliqué

label.forEach(function (e) {
  e.addEventListener("click", function () {
    removeClass();
    e.classList.toggle("active");
  });
}); // cette fonction permet de supprimer la classe active de tous les éléments

function removeClass() {
  label.forEach(function (e) {
    e.classList.remove("active");
  });
}

/***/ }),

/***/ "./assets/js/seo.js":
/*!**************************!*\
  !*** ./assets/js/seo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

/*
https://youtu.be/zwl3kZPZ8H8
*/
var text = document.querySelector(".page-seo");
text.innerHTML = text.innerText.split("") //
.map(function (_char, i) {
  return "<span style=\"transform:rotate(".concat(i * 10.3, "deg)\">").concat(_char, "</span>");
}).join("");

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-c325eb"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW5CO0VBQ0gsQ0FIRDtBQUlILENBTEQsR0FPQTs7QUFDQSxTQUFTcUIsV0FBVCxHQUF1QjtFQUNuQkYsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ2YsQ0FBRCxFQUFPO0lBQ2pCQSxDQUFDLENBQUNOLFNBQUYsQ0FBWUksTUFBWixDQUFtQixRQUFuQjtFQUNILENBRkQ7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBRUEsSUFBTW1CLElBQUksR0FBR25ELFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixXQUF2QixDQUFiO0FBQ0ErQyxJQUFJLENBQUNDLFNBQUwsR0FBaUJELElBQUksQ0FBQ0UsU0FBTCxDQUNaQyxLQURZLENBQ04sRUFETSxFQUNGO0FBREUsQ0FFWkMsR0FGWSxDQUdULFVBQUNDLEtBQUQsRUFBT0MsQ0FBUDtFQUFBLGdEQUNxQ0EsQ0FBQyxHQUFHLElBRHpDLG9CQUNzREQsS0FEdEQ7QUFBQSxDQUhTLEVBTVpFLElBTlksQ0FNUCxFQU5PLENBQWpCOzs7Ozs7Ozs7Ozs7QUNMQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2VsZW1lbnRzanMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VxdWlwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmFxLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcbmltcG9ydCBcIi4vanMvX2VsZW1lbnRzanMuanNcIjsgLy8gYSBzZSBzb3V2ZW5pciBkZSBsYSBtYW51cHVsYXRpb24gZGUgTnVubyB0ZWFjaGVyLlxyXG5pbXBvcnQgXCIuL2pzL2ZhcS5qc1wiOyAvLyBhXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9qcy9lcXVpcGUuanNcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvX2VsZW1lbnRzanMuc2Nzc1wiOyAvLyBJbXBvcnQgdGhlIGVsZW1lbnRzanMuc2NzcyBmaWxlIHF1aSB2YSBjaGFyY2hlciBsZSBhcHAuc2Nzcy5cclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvX2Zvb3Rlci5zY3NzXCI7IC8vIEltcG9ydCB0aGUgZm9vdGVyLnNjc3MgZmlsZSBxdWkgdmEgY2hhcmNoZXIgbGUgYXBwLnNjc3MuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCIuL2pzL19uYXYuanNcIjtcclxuaW1wb3J0IFwiLi9qcy9zZW8uanNcIjtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiY29uc3QgdGl0cmVTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSBzcGFuXCIpO1xyXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZmlyc3RcIik7XHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIik7XHJcbmNvbnN0IG1lZGlhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsbGVcIik7XHJcbmNvbnN0IGwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sMVwiKTtcclxuY29uc3QgbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwyXCIpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IFRMID0gZ3NhcC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KTtcclxuXHJcbiAgICBUTC5zdGFnZ2VyRnJvbShcclxuICAgICAgICB0aXRyZVNwYW5zLFxyXG4gICAgICAgIDEsXHJcbiAgICAgICAgeyB0b3A6IC01MCwgb3BhY2l0eTogMCwgZWFzZTogXCJwb3dlcjIub3V0XCIgfSxcclxuICAgICAgICAwLjNcclxuICAgIClcclxuICAgICAgICAuc3RhZ2dlckZyb20oYnRucywgMSwgeyBvcGFjaXR5OiAwLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LCAwLjMsIFwiLT0xXCIpXHJcbiAgICAgICAgLmZyb20obDEsIDEsIHsgd2lkdGg6IDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sIFwiLT0yXCIpXHJcbiAgICAgICAgLmZyb20obDIsIDEsIHsgd2lkdGg6IDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sIFwiLT0yXCIpXHJcbiAgICAgICAgLmZyb20obG9nbywgMC40LCB7IHRyYW5zZm9ybTogXCJzY2FsZSgwKVwiLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LCBcIi09MlwiKVxyXG4gICAgICAgIC5zdGFnZ2VyRnJvbShcclxuICAgICAgICAgICAgbWVkaWFzLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICB7IHJpZ2h0OiAtMjAwLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LFxyXG4gICAgICAgICAgICAwLjMsXHJcbiAgICAgICAgICAgIFwiLT0xXCJcclxuICAgICAgICApO1xyXG5cclxuICAgIFRMLnBsYXkoKTtcclxufSk7XHJcbiIsImNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcclxuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVyZ2VyXCIpO1xyXG5jb25zdCBvdmVybGF5TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbi8vIFNob3cgYW5kIEhpZGUgTmF2YmFyIEZ1bmN0aW9uXHJcbmNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBvdmVybGF5TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuLy8gQ29sbGFwc2libGUgTW9iaWxlIFN1Ym1lbnUgRnVuY3Rpb25cclxuY29uc3QgY29sbGFwc2VTdWJNZW51ID0gKCkgPT4ge1xyXG4gICAgbmF2YmFyTWVudVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtZHJvcGRvd24uYWN0aXZlIC5zdWJtZW51XCIpXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4gICAgbmF2YmFyTWVudVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtZHJvcGRvd24uYWN0aXZlXCIpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyBUb2dnbGUgTW9iaWxlIFN1Ym1lbnUgRnVuY3Rpb25cclxuY29uc3QgdG9nZ2xlU3ViTWVudSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIikgJiYgd2luZG93LmlubmVyV2lkdGggPD0gOTkyKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG1lbnVEcm9wZG93biA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIElmIERyb3Bkb3duIGlzIEV4cGFuZGVkLCB0aGVuIENvbGxhcHNlIEl0XHJcbiAgICAgICAgaWYgKG1lbnVEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgY29sbGFwc2VTdWJNZW51KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ29sbGFwc2UgRXhpc3RpbmcgRXhwYW5kZWQgRHJvcGRvd25cclxuICAgICAgICAgICAgaWYgKG5hdmJhck1lbnUucXVlcnlTZWxlY3RvcihcIi5tZW51LWRyb3Bkb3duLmFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VTdWJNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEV4cGFuZGVkIHRoZSBOZXcgRHJvcGRvd25cclxuICAgICAgICAgICAgbWVudURyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51RHJvcGRvd24ucXVlcnlTZWxlY3RvcihcIi5zdWJtZW51XCIpO1xyXG4gICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9IHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEZpeGVkIFJlc2l6ZSBXaW5kb3cgRnVuY3Rpb25cclxuY29uc3QgcmVzaXplV2luZG93ID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XHJcbiAgICAgICAgaWYgKG5hdmJhck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hdmJhck1lbnUucXVlcnlTZWxlY3RvcihcIi5tZW51LWRyb3Bkb3duLmFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBjb2xsYXBzZVN1Yk1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEV2ZW50IExpc3RlbmVyc1xyXG5idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVNZW51KTtcclxub3ZlcmxheU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xyXG5uYXZiYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTdWJNZW51KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplV2luZG93KTtcclxuIiwiLy8gY29uc3QgbW9kZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGFya21vZGVcIik7XHJcblxyXG4vLyBtb2RlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XHJcbi8vIH0pO1xyXG4iLCIvLyBsZXQgbGFiZWwgcGVybWV0IGRlIHLDqWN1cMOpcmVyIHRvdXMgbGVzIMOpbMOpbWVudHMgYXlhbnQgbGEgY2xhc3NlIGxhYmVsXHJcbmxldCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94XCIpO1xyXG5cclxuLy9sYSBmb25jdGlvbiBxdWkgcGVybWV0IGQnYWpvdXRlciBsYSBjbGFzc2UgYWN0aXZlIMOgIGwnw6lsw6ltZW50IGNsaXF1w6lcclxubGFiZWwuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKCk7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gY2V0dGUgZm9uY3Rpb24gcGVybWV0IGRlIHN1cHByaW1lciBsYSBjbGFzc2UgYWN0aXZlIGRlIHRvdXMgbGVzIMOpbMOpbWVudHNcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XHJcbiAgICBsYWJlbC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLypcclxuaHR0cHM6Ly95b3V0dS5iZS96d2wza1pQWjhIOFxyXG4qL1xyXG5cclxuY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1zZW9cIik7XHJcbnRleHQuaW5uZXJIVE1MID0gdGV4dC5pbm5lclRleHRcclxuICAgIC5zcGxpdChcIlwiKSAvL1xyXG4gICAgLm1hcChcclxuICAgICAgICAoY2hhciwgaSkgPT5cclxuICAgICAgICAgICAgYDxzcGFuIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgke2kgKiAxMC4zfWRlZylcIj4ke2NoYXJ9PC9zcGFuPmBcclxuICAgIClcclxuICAgIC5qb2luKFwiXCIpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsInRpdHJlU3BhbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5zIiwibG9nbyIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXMiLCJsMSIsImwyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlRMIiwiZ3NhcCIsInRpbWVsaW5lIiwicGF1c2VkIiwic3RhZ2dlckZyb20iLCJ0b3AiLCJvcGFjaXR5IiwiZWFzZSIsImZyb20iLCJ3aWR0aCIsInRyYW5zZm9ybSIsInJpZ2h0IiwicGxheSIsIm5hdmJhck1lbnUiLCJnZXRFbGVtZW50QnlJZCIsImJ1cmdlck1lbnUiLCJvdmVybGF5TWVudSIsInRvZ2dsZU1lbnUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb2xsYXBzZVN1Yk1lbnUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ0b2dnbGVTdWJNZW51IiwiZSIsInRhcmdldCIsImhhc0F0dHJpYnV0ZSIsImlubmVyV2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsIm1lbnVEcm9wZG93biIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsImFkZCIsInN1Yk1lbnUiLCJzdHlsZSIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlc2l6ZVdpbmRvdyIsImxhYmVsIiwiZm9yRWFjaCIsInJlbW92ZUNsYXNzIiwidGV4dCIsImlubmVySFRNTCIsImlubmVyVGV4dCIsInNwbGl0IiwibWFwIiwiY2hhciIsImkiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==