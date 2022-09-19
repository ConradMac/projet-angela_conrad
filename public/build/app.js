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
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/_nav.js */ "./assets/js/_nav.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_nav_js__WEBPACK_IMPORTED_MODULE_4__);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-c235e6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFULEdBQXVCO0VBQ25CRixLQUFLLENBQUNDLE9BQU4sQ0FBYyxVQUFDZixDQUFELEVBQU87SUFDakJBLENBQUMsQ0FBQ04sU0FBRixDQUFZSSxNQUFaLENBQW1CLFFBQW5CO0VBQ0gsQ0FGRDtBQUdIOzs7Ozs7Ozs7Ozs7QUNoQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19lbGVtZW50c2pzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fbmF2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcbmltcG9ydCBcIi4vanMvX2VsZW1lbnRzanMuanNcIjsgLy8gYSBzZSBzb3V2ZW5pciBkZSBsYSBtYW51cHVsYXRpb24gZGUgTnVubyB0ZWFjaGVyLlxyXG5pbXBvcnQgXCIuL2pzL2ZhcS5qc1wiOyAvLyBhXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLnNjc3NcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvX2VsZW1lbnRzanMuc2Nzc1wiOyAvLyBJbXBvcnQgdGhlIGVsZW1lbnRzanMuc2NzcyBmaWxlIHF1aSB2YSBjaGFyY2hlciBsZSBhcHAuc2Nzcy5cclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvX2Zvb3Rlci5zY3NzXCI7IC8vIEltcG9ydCB0aGUgZm9vdGVyLnNjc3MgZmlsZSBxdWkgdmEgY2hhcmNoZXIgbGUgYXBwLnNjc3MuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCIuL2pzL19uYXYuanNcIjtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiY29uc3QgdGl0cmVTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSBzcGFuXCIpO1xuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWZpcnN0XCIpO1xuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKTtcbmNvbnN0IG1lZGlhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsbGVcIik7XG5jb25zdCBsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubDFcIik7XG5jb25zdCBsMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubDJcIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgVEwgPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pO1xuXG4gICAgVEwuc3RhZ2dlckZyb20oXG4gICAgICAgIHRpdHJlU3BhbnMsXG4gICAgICAgIDEsXG4gICAgICAgIHsgdG9wOiAtNTAsIG9wYWNpdHk6IDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sXG4gICAgICAgIDAuM1xuICAgIClcbiAgICAgICAgLnN0YWdnZXJGcm9tKGJ0bnMsIDEsIHsgb3BhY2l0eTogMCwgZWFzZTogXCJwb3dlcjIub3V0XCIgfSwgMC4zLCBcIi09MVwiKVxuICAgICAgICAuZnJvbShsMSwgMSwgeyB3aWR0aDogMCwgZWFzZTogXCJwb3dlcjIub3V0XCIgfSwgXCItPTJcIilcbiAgICAgICAgLmZyb20obDIsIDEsIHsgd2lkdGg6IDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sIFwiLT0yXCIpXG4gICAgICAgIC5mcm9tKGxvZ28sIDAuNCwgeyB0cmFuc2Zvcm06IFwic2NhbGUoMClcIiwgZWFzZTogXCJwb3dlcjIub3V0XCIgfSwgXCItPTJcIilcbiAgICAgICAgLnN0YWdnZXJGcm9tKFxuICAgICAgICAgICAgbWVkaWFzLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIHsgcmlnaHQ6IC0yMDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICBcIi09MVwiXG4gICAgICAgICk7XG5cbiAgICBUTC5wbGF5KCk7XG59KTtcbiIsImNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlclwiKTtcbmNvbnN0IG92ZXJsYXlNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG4vLyBTaG93IGFuZCBIaWRlIE5hdmJhciBGdW5jdGlvblxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheU1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn07XG5cbi8vIENvbGxhcHNpYmxlIE1vYmlsZSBTdWJtZW51IEZ1bmN0aW9uXG5jb25zdCBjb2xsYXBzZVN1Yk1lbnUgPSAoKSA9PiB7XG4gICAgbmF2YmFyTWVudVxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5tZW51LWRyb3Bkb3duLmFjdGl2ZSAuc3VibWVudVwiKVxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgbmF2YmFyTWVudVxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5tZW51LWRyb3Bkb3duLmFjdGl2ZVwiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn07XG5cbi8vIFRvZ2dsZSBNb2JpbGUgU3VibWVudSBGdW5jdGlvblxuY29uc3QgdG9nZ2xlU3ViTWVudSA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIpICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDk5Mikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG1lbnVEcm9wZG93biA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgLy8gSWYgRHJvcGRvd24gaXMgRXhwYW5kZWQsIHRoZW4gQ29sbGFwc2UgSXRcbiAgICAgICAgaWYgKG1lbnVEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlU3ViTWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29sbGFwc2UgRXhpc3RpbmcgRXhwYW5kZWQgRHJvcGRvd25cbiAgICAgICAgICAgIGlmIChuYXZiYXJNZW51LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1kcm9wZG93bi5hY3RpdmVcIikpIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVN1Yk1lbnUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRXhwYW5kZWQgdGhlIE5ldyBEcm9wZG93blxuICAgICAgICAgICAgbWVudURyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gbWVudURyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWVudVwiKTtcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gc3ViTWVudS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyBGaXhlZCBSZXNpemUgV2luZG93IEZ1bmN0aW9uXG5jb25zdCByZXNpemVXaW5kb3cgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XG4gICAgICAgIGlmIChuYXZiYXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYXZiYXJNZW51LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1kcm9wZG93bi5hY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGNvbGxhcHNlU3ViTWVudSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gSW5pdGlhbGl6ZSBFdmVudCBMaXN0ZW5lcnNcbmJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xub3ZlcmxheU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xubmF2YmFyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU3ViTWVudSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVXaW5kb3cpO1xuIiwiLy8gbGV0IGxhYmVsIHBlcm1ldCBkZSByw6ljdXDDqXJlciB0b3VzIGxlcyDDqWzDqW1lbnRzIGF5YW50IGxhIGNsYXNzZSBsYWJlbFxubGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIik7XG5cbi8vbGEgZm9uY3Rpb24gcXVpIHBlcm1ldCBkJ2Fqb3V0ZXIgbGEgY2xhc3NlIGFjdGl2ZSDDoCBsJ8OpbMOpbWVudCBjbGlxdcOpXG5sYWJlbC5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVDbGFzcygpO1xuICAgICAgICBlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG59KTtcblxuLy8gY2V0dGUgZm9uY3Rpb24gcGVybWV0IGRlIHN1cHByaW1lciBsYSBjbGFzc2UgYWN0aXZlIGRlIHRvdXMgbGVzIMOpbMOpbWVudHNcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xuICAgIGxhYmVsLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJ0aXRyZVNwYW5zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsImxvZ28iLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzIiwibDEiLCJsMiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJUTCIsImdzYXAiLCJ0aW1lbGluZSIsInBhdXNlZCIsInN0YWdnZXJGcm9tIiwidG9wIiwib3BhY2l0eSIsImVhc2UiLCJmcm9tIiwid2lkdGgiLCJ0cmFuc2Zvcm0iLCJyaWdodCIsInBsYXkiLCJuYXZiYXJNZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJidXJnZXJNZW51Iiwib3ZlcmxheU1lbnUiLCJ0b2dnbGVNZW51IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29sbGFwc2VTdWJNZW51IiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlIiwidG9nZ2xlU3ViTWVudSIsImUiLCJ0YXJnZXQiLCJoYXNBdHRyaWJ1dGUiLCJpbm5lcldpZHRoIiwicHJldmVudERlZmF1bHQiLCJtZW51RHJvcGRvd24iLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhZGQiLCJzdWJNZW51Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJyZXNpemVXaW5kb3ciLCJsYWJlbCIsImZvckVhY2giLCJyZW1vdmVDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=