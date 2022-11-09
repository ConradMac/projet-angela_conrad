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
/* harmony import */ var _js_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/_elements */ "./assets/js/_elements.js");
/* harmony import */ var _js_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/_nav.js */ "./assets/js/_nav.js");
/* harmony import */ var _js_nav_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_nav_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_seo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/seo.js */ "./assets/js/seo.js");
/* harmony import */ var _js_seo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_seo_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_faq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/faq.js */ "./assets/js/faq.js");
/* harmony import */ var _js_faq_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_faq_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_equipe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/equipe.js */ "./assets/js/equipe.js");
/* harmony import */ var _js_equipe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_equipe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */



 // any CSS you import will output into a single css file (app.css in this case)


 // import "./styles/_elementsjs.scss"; // Import the elementsjs.scss file qui va charcher le app.scss.
// import "./styles/_footer.scss"; // Import the footer.scss file qui va charcher le app.scss.
// start the Stimulus application

 // import "./js/_nav.js";
// import "./js/seo.js";

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

/***/ "./assets/js/_elements.js":
/*!********************************!*\
  !*** ./assets/js/_elements.js ***!
  \********************************/
/***/ (() => {

var titreSpans = document.querySelectorAll("h1 span");
var btns = document.querySelectorAll(".btn-first");
var logo = document.querySelector(".logo");
var medias = document.querySelectorAll(".bulle");
var l1 = document.querySelector(".l1");
var l2 = document.querySelector(".l2");
var logoMedias = document.querySelectorAll(".logo-medias"); // c'est une div qui contient les icones de reseaux sociaux

onload = function onload(e) {
  l1.style.display = "block";
  l2.style.display = "block";
  logo.style.display = "block";

  for (var i = 0; i < logoMedias.length; i++) {
    logoMedias[i].style.display = "block";
  }

  console.log("ça load .....");
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
  }, 0.3, "-=1").staggerFrom(l1, 1, {
    width: 0,
    ease: "power2.out"
  }, "-=2").staggerFrom(l2, 1, {
    width: 0,
    ease: "power2.out"
  }, "-=2").staggerFrom(logo, 0.4, {
    transform: "scale(0)",
    ease: "power2.out"
  }, "-=2").staggerFrom(medias, 1, {
    right: -200,
    ease: "power2.out"
  }, 0.3, "-=1");
  TL.play();
};

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

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

document.addEventListener("DOMContentLoaded", function (event) {
  var scroll = document.querySelector("#global-test");
  console.log(scroll.offsetTop);
  var block_gauche_list = document.querySelectorAll(".before_left");
  var block_droit_list = document.querySelectorAll(".before_right");
  window.addEventListener("scroll", function () {
    // au scroll, faire apparaitre le block animated-block-left et right.
    // si le scroll est superieur a la position de global-test
    for (var i = 0; i < block_gauche_list.length; i++) {
      // pour chaque element de la liste
      if (window.scrollY > block_gauche_list[i].offsetTop - 300 && !block_gauche_list[i].classList.contains("animated-block-left")) {
        block_gauche_list[i].classList.add("animated-block-left"); // ajouter la class animated-block-left

        console.log("un bloc gauche apparait");
      }
    }

    for (var b = 0; b < block_droit_list.length; b++) {
      console.log("coucou");

      if (window.scrollY > block_droit_list[b].offsetTop - 300 && !block_droit_list[b].classList.contains("animated-block-right")) {
        block_droit_list[b].classList.add("animated-block-right"); // ajouter la class animated-block-left

        console.log("un bloc droit apparait");
      }
    }
  });
}); // Code pour l'accordéon SEO
// let label permet de récupérer tous les éléments ayant la classe label

var titre = document.querySelectorAll(".accordion-block"); //la fonction qui permet d'ajouter la classe active à l'élément cliqué

titre.forEach(function (e) {
  e.addEventListener("click", function () {
    removeClass();
    e.classList.toggle("active");
  });
}); // cette fonction permet de supprimer la classe active de tous les éléments

function removeClass() {
  titre.forEach(function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEdBQUdoRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixDQUFaLEVBRUE7O0FBQ0ErRCxLQUFLLENBQUNULE9BQU4sQ0FBYyxVQUFDN0MsQ0FBRCxFQUFPO0VBQ2pCQSxDQUFDLENBQUMyQyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixZQUFNO0lBQzlCRyxXQUFXO0lBQ1g5QyxDQUFDLENBQUN3QixTQUFGLENBQVlDLE1BQVosQ0FBbUIsUUFBbkI7RUFDSCxDQUhEO0FBSUgsQ0FMRCxHQU9BOztBQUNBLFNBQVNxQixXQUFULEdBQXVCO0VBQ25CUSxLQUFLLENBQUNULE9BQU4sQ0FBYyxVQUFDN0MsQ0FBRCxFQUFPO0lBQ2pCQSxDQUFDLENBQUN3QixTQUFGLENBQVlJLE1BQVosQ0FBbUIsUUFBbkI7RUFDSCxDQUZEO0FBR0g7Ozs7Ozs7Ozs7OztBQ3BERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fbmF2LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lcXVpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFwiLi9qcy9fZWxlbWVudHNcIjtcclxuaW1wb3J0IFwiLi9qcy9fbmF2LmpzXCI7XHJcbmltcG9ydCBcIi4vanMvc2VvLmpzXCI7XHJcbmltcG9ydCBcIi4vanMvZmFxLmpzXCI7XHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiLi9zdHlsZXMvYXBwLnNjc3NcIjtcclxuaW1wb3J0IFwiLi9qcy9lcXVpcGUuanNcIjtcclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvX2VsZW1lbnRzanMuc2Nzc1wiOyAvLyBJbXBvcnQgdGhlIGVsZW1lbnRzanMuc2NzcyBmaWxlIHF1aSB2YSBjaGFyY2hlciBsZSBhcHAuc2Nzcy5cclxuLy8gaW1wb3J0IFwiLi9zdHlsZXMvX2Zvb3Rlci5zY3NzXCI7IC8vIEltcG9ydCB0aGUgZm9vdGVyLnNjc3MgZmlsZSBxdWkgdmEgY2hhcmNoZXIgbGUgYXBwLnNjc3MuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xyXG4vLyBpbXBvcnQgXCIuL2pzL19uYXYuanNcIjtcclxuLy8gaW1wb3J0IFwiLi9qcy9zZW8uanNcIjtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiY29uc3QgdGl0cmVTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJoMSBzcGFuXCIpO1xyXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tZmlyc3RcIik7XHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIik7XHJcbmNvbnN0IG1lZGlhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnVsbGVcIik7XHJcbmNvbnN0IGwxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sMVwiKTtcclxuY29uc3QgbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmwyXCIpO1xyXG5jb25zdCBsb2dvTWVkaWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb2dvLW1lZGlhc1wiKTsgLy8gYydlc3QgdW5lIGRpdiBxdWkgY29udGllbnQgbGVzIGljb25lcyBkZSByZXNlYXV4IHNvY2lhdXhcclxuXHJcbm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICBsMS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgbDIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGxvZ28uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ29NZWRpYXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsb2dvTWVkaWFzW2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCLDp2EgbG9hZCAuLi4uLlwiKTtcclxuICAgIGNvbnN0IFRMID0gZ3NhcC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KTtcclxuICAgIFRMLnN0YWdnZXJGcm9tKFxyXG4gICAgICAgIHRpdHJlU3BhbnMsXHJcbiAgICAgICAgMSxcclxuICAgICAgICB7IHRvcDogLTUwLCBvcGFjaXR5OiAwLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LFxyXG4gICAgICAgIDAuM1xyXG4gICAgKVxyXG4gICAgICAgIC5zdGFnZ2VyRnJvbShidG5zLCAxLCB7IG9wYWNpdHk6IDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sIDAuMywgXCItPTFcIilcclxuICAgICAgICAuc3RhZ2dlckZyb20obDEsIDEsIHsgd2lkdGg6IDAsIGVhc2U6IFwicG93ZXIyLm91dFwiIH0sIFwiLT0yXCIpXHJcbiAgICAgICAgLnN0YWdnZXJGcm9tKGwyLCAxLCB7IHdpZHRoOiAwLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LCBcIi09MlwiKVxyXG4gICAgICAgIC5zdGFnZ2VyRnJvbShcclxuICAgICAgICAgICAgbG9nbyxcclxuICAgICAgICAgICAgMC40LFxyXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJzY2FsZSgwKVwiLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LFxyXG4gICAgICAgICAgICBcIi09MlwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdGFnZ2VyRnJvbShcclxuICAgICAgICAgICAgbWVkaWFzLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICB7IHJpZ2h0OiAtMjAwLCBlYXNlOiBcInBvd2VyMi5vdXRcIiB9LFxyXG4gICAgICAgICAgICAwLjMsXHJcbiAgICAgICAgICAgIFwiLT0xXCJcclxuICAgICAgICApO1xyXG5cclxuICAgIFRMLnBsYXkoKTtcclxufTtcclxuIiwiY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xyXG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXJcIik7XHJcbmNvbnN0IG92ZXJsYXlNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG5cclxuLy8gU2hvdyBhbmQgSGlkZSBOYXZiYXIgRnVuY3Rpb25cclxuY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIG92ZXJsYXlNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbn07XHJcblxyXG4vLyBDb2xsYXBzaWJsZSBNb2JpbGUgU3VibWVudSBGdW5jdGlvblxyXG5jb25zdCBjb2xsYXBzZVN1Yk1lbnUgPSAoKSA9PiB7XHJcbiAgICBuYXZiYXJNZW51XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1kcm9wZG93bi5hY3RpdmUgLnN1Ym1lbnVcIilcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XHJcbiAgICBuYXZiYXJNZW51XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1kcm9wZG93bi5hY3RpdmVcIilcclxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbi8vIFRvZ2dsZSBNb2JpbGUgU3VibWVudSBGdW5jdGlvblxyXG5jb25zdCB0b2dnbGVTdWJNZW51ID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiKSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA5OTIpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbWVudURyb3Bkb3duID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gSWYgRHJvcGRvd24gaXMgRXhwYW5kZWQsIHRoZW4gQ29sbGFwc2UgSXRcclxuICAgICAgICBpZiAobWVudURyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBjb2xsYXBzZVN1Yk1lbnUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDb2xsYXBzZSBFeGlzdGluZyBFeHBhbmRlZCBEcm9wZG93blxyXG4gICAgICAgICAgICBpZiAobmF2YmFyTWVudS5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtZHJvcGRvd24uYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVN1Yk1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRXhwYW5kZWQgdGhlIE5ldyBEcm9wZG93blxyXG4gICAgICAgICAgICBtZW51RHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVEcm9wZG93bi5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1lbnVcIik7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gc3ViTWVudS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gRml4ZWQgUmVzaXplIFdpbmRvdyBGdW5jdGlvblxyXG5jb25zdCByZXNpemVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcclxuICAgICAgICBpZiAobmF2YmFyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmF2YmFyTWVudS5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtZHJvcGRvd24uYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlU3ViTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRXZlbnQgTGlzdGVuZXJzXHJcbmJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xyXG5vdmVybGF5TWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWVudSk7XHJcbm5hdmJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVN1Yk1lbnUpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVXaW5kb3cpO1xyXG4iLCIvLyBjb25zdCBtb2RlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXJrbW9kZVwiKTtcclxuXHJcbi8vIG1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcclxuLy8gfSk7XHJcbiIsIi8vIGxldCBsYWJlbCBwZXJtZXQgZGUgcsOpY3Vww6lyZXIgdG91cyBsZXMgw6lsw6ltZW50cyBheWFudCBsYSBjbGFzc2UgbGFiZWxcclxubGV0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIik7XHJcblxyXG4vL2xhIGZvbmN0aW9uIHF1aSBwZXJtZXQgZCdham91dGVyIGxhIGNsYXNzZSBhY3RpdmUgw6AgbCfDqWzDqW1lbnQgY2xpcXXDqVxyXG5sYWJlbC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3MoKTtcclxuICAgICAgICBlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBjZXR0ZSBmb25jdGlvbiBwZXJtZXQgZGUgc3VwcHJpbWVyIGxhIGNsYXNzZSBhY3RpdmUgZGUgdG91cyBsZXMgw6lsw6ltZW50c1xyXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcclxuICAgIGxhYmVsLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2xvYmFsLXRlc3RcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzY3JvbGwub2Zmc2V0VG9wKTtcclxuICAgIGNvbnN0IGJsb2NrX2dhdWNoZV9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iZWZvcmVfbGVmdFwiKTtcclxuICAgIGNvbnN0IGJsb2NrX2Ryb2l0X2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJlZm9yZV9yaWdodFwiKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gYXUgc2Nyb2xsLCBmYWlyZSBhcHBhcmFpdHJlIGxlIGJsb2NrIGFuaW1hdGVkLWJsb2NrLWxlZnQgZXQgcmlnaHQuXHJcblxyXG4gICAgICAgIC8vIHNpIGxlIHNjcm9sbCBlc3Qgc3VwZXJpZXVyIGEgbGEgcG9zaXRpb24gZGUgZ2xvYmFsLXRlc3RcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrX2dhdWNoZV9saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIHBvdXIgY2hhcXVlIGVsZW1lbnQgZGUgbGEgbGlzdGVcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFkgPiBibG9ja19nYXVjaGVfbGlzdFtpXS5vZmZzZXRUb3AgLSAzMDAgJiZcclxuICAgICAgICAgICAgICAgICFibG9ja19nYXVjaGVfbGlzdFtpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRlZC1ibG9jay1sZWZ0XCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYmxvY2tfZ2F1Y2hlX2xpc3RbaV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkLWJsb2NrLWxlZnRcIik7IC8vIGFqb3V0ZXIgbGEgY2xhc3MgYW5pbWF0ZWQtYmxvY2stbGVmdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1biBibG9jIGdhdWNoZSBhcHBhcmFpdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBibG9ja19kcm9pdF9saXN0Lmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291Y291XCIpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSA+IGJsb2NrX2Ryb2l0X2xpc3RbYl0ub2Zmc2V0VG9wIC0gMzAwICYmXHJcbiAgICAgICAgICAgICAgICAhYmxvY2tfZHJvaXRfbGlzdFtiXS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRlZC1ibG9jay1yaWdodFwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrX2Ryb2l0X2xpc3RbYl0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkLWJsb2NrLXJpZ2h0XCIpOyAvLyBham91dGVyIGxhIGNsYXNzIGFuaW1hdGVkLWJsb2NrLWxlZnRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW4gYmxvYyBkcm9pdCBhcHBhcmFpdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIENvZGUgcG91ciBsJ2FjY29yZMOpb24gU0VPXHJcblxyXG4vLyBsZXQgbGFiZWwgcGVybWV0IGRlIHLDqWN1cMOpcmVyIHRvdXMgbGVzIMOpbMOpbWVudHMgYXlhbnQgbGEgY2xhc3NlIGxhYmVsXHJcbmxldCB0aXRyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLWJsb2NrXCIpO1xyXG5cclxuLy9sYSBmb25jdGlvbiBxdWkgcGVybWV0IGQnYWpvdXRlciBsYSBjbGFzc2UgYWN0aXZlIMOgIGwnw6lsw6ltZW50IGNsaXF1w6lcclxudGl0cmUuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKCk7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gY2V0dGUgZm9uY3Rpb24gcGVybWV0IGRlIHN1cHByaW1lciBsYSBjbGFzc2UgYWN0aXZlIGRlIHRvdXMgbGVzIMOpbMOpbWVudHNcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XHJcbiAgICB0aXRyZS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJ0aXRyZVNwYW5zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRucyIsImxvZ28iLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzIiwibDEiLCJsMiIsImxvZ29NZWRpYXMiLCJvbmxvYWQiLCJlIiwic3R5bGUiLCJkaXNwbGF5IiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJUTCIsImdzYXAiLCJ0aW1lbGluZSIsInBhdXNlZCIsInN0YWdnZXJGcm9tIiwidG9wIiwib3BhY2l0eSIsImVhc2UiLCJ3aWR0aCIsInRyYW5zZm9ybSIsInJpZ2h0IiwicGxheSIsIm5hdmJhck1lbnUiLCJnZXRFbGVtZW50QnlJZCIsImJ1cmdlck1lbnUiLCJvdmVybGF5TWVudSIsInRvZ2dsZU1lbnUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb2xsYXBzZVN1Yk1lbnUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmUiLCJ0b2dnbGVTdWJNZW51IiwidGFyZ2V0IiwiaGFzQXR0cmlidXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInByZXZlbnREZWZhdWx0IiwibWVudURyb3Bkb3duIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiYWRkIiwic3ViTWVudSIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlc2l6ZVdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsYWJlbCIsImZvckVhY2giLCJyZW1vdmVDbGFzcyIsImV2ZW50Iiwic2Nyb2xsIiwib2Zmc2V0VG9wIiwiYmxvY2tfZ2F1Y2hlX2xpc3QiLCJibG9ja19kcm9pdF9saXN0Iiwic2Nyb2xsWSIsImIiLCJ0aXRyZSJdLCJzb3VyY2VSb290IjoiIn0=