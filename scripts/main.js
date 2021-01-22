/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/main.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/LoadCart.js":
      /*!*************************!*\
  !*** ./src/LoadCart.js ***!
  \*************************/
      /*! exports provided: RunCart */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunCart", function() { return RunCart; });\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ "./src/UI.js");\n/* harmony import */ var _Products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.js */ "./src/Products.js");\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar cartBtn = document.querySelector(".cart-btn");\nvar closeCartBtn = document.querySelector(".close-cart");\nvar cartWrap = document.querySelector(".cartWrap");\nvar cartContent = document.querySelector(".cart-content");\nvar cartOverlay = document.querySelector(".cart-overlay");\nvar RunCart = /*#__PURE__*/function () {\n  function RunCart() {\n    _classCallCheck(this, RunCart);\n  }\n\n  _createClass(RunCart, [{\n    key: "runCart",\n    value: function runCart() {\n      document.addEventListener("DOMContentLoaded", function () {\n        var ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__["UI"]();\n        ui.setupApp();\n        cartBtn.addEventListener("click", function () {\n          cartContent.classList.add("showCart");\n          cartOverlay.classList.add("backDrop");\n        });\n        closeCartBtn.addEventListener("click", function () {\n          cartContent.classList.remove("showCart");\n          cartOverlay.classList.remove("backDrop");\n        });\n        cartWrap.addEventListener("click", function () {\n          if (cartOverlay.opacity = "100%") {\n            cartContent.classList.remove("showCart");\n            cartOverlay.classList.remove("backDrop");\n          }\n        });\n        var products = new _Products_js__WEBPACK_IMPORTED_MODULE_1__["Products"]();\n        products.getProducts().then(function (products) {\n          ui.displayProducts(products);\n          _Storage_js__WEBPACK_IMPORTED_MODULE_2__["Storage"].saveProducts(products);\n        }).then(function () {\n          ui.getBagButtons();\n          ui.cartLogic();\n        });\n      });\n    }\n  }]);\n\n  return RunCart;\n}();\n\n//# sourceURL=webpack:///./src/LoadCart.js?'
        );

        /***/
      },

    /***/ "./src/Products.js":
      /*!*************************!*\
  !*** ./src/Products.js ***!
  \*************************/
      /*! exports provided: Products */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Products = /*#__PURE__*/function () {\n  function Products() {\n    _classCallCheck(this, Products);\n  }\n\n  _createClass(Products, [{\n    key: "getProducts",\n    value: function () {\n      var _getProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var result, data, products1;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return fetch("src/products.json");\n\n              case 3:\n                result = _context.sent;\n                _context.next = 6;\n                return result.json();\n\n              case 6:\n                data = _context.sent;\n                products1 = data.items1;\n                products1 = products1.map(function (item) {\n                  var id = item.sys.id;\n                  var _item$fields = item.fields,\n                      title = _item$fields.title,\n                      price = _item$fields.price;\n                  var image = item.fields.image.fields.file.url;\n                  var row = item.fields.row;\n                  return {\n                    title: title,\n                    id: id,\n                    price: price,\n                    image: image,\n                    row: row\n                  };\n                });\n                return _context.abrupt("return", products1);\n\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context["catch"](0);\n                console.log(_context.t0);\n\n              case 15:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 12]]);\n      }));\n\n      function getProducts() {\n        return _getProducts.apply(this, arguments);\n      }\n\n      return getProducts;\n    }()\n  }]);\n\n  return Products;\n}();\n\n//# sourceURL=webpack:///./src/Products.js?'
        );

        /***/
      },

    /***/ "./src/Storage.js":
      /*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
      /*! exports provided: Storage */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Storage = /*#__PURE__*/function () {\n  function Storage() {\n    _classCallCheck(this, Storage);\n  }\n\n  _createClass(Storage, null, [{\n    key: "saveProducts",\n    value: function saveProducts(products) {\n      localStorage.setItem("products", JSON.stringify(products));\n    }\n  }, {\n    key: "getProducts",\n    value: function getProducts(id) {\n      var products = JSON.parse(localStorage.getItem("products"));\n      return products.find(function (product) {\n        return product.id === id;\n      });\n    }\n  }, {\n    key: "saveCart",\n    value: function saveCart(cartProducts) {\n      localStorage.setItem("cart", JSON.stringify(cartProducts));\n    }\n  }, {\n    key: "clearCart",\n    value: function clearCart() {\n      localStorage.removeItem("cart");\n    }\n  }, {\n    key: "getCart",\n    value: function getCart() {\n      return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];\n    }\n  }]);\n\n  return Storage;\n}();\n\n//# sourceURL=webpack:///./src/Storage.js?'
        );

        /***/
      },

    /***/ "./src/UI.js":
      /*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
      /*! exports provided: UI */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });\n/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/Storage.js");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar cart = [];\nvar cartTotal = document.querySelector(".cart-total");\nvar cartItems = document.querySelector(".fa-square span");\nvar clearCartBtn = document.querySelector(".clear-cart");\nvar cartOverlay = document.querySelector(".cart-overlay"); // eslint-disable-next-line no-unused-vars\n\nvar cartItemPlace = document.querySelector(".cart-item");\nvar cartContent = document.querySelector(".cart-content"); // eslint-disable-next-line no-unused-vars\n\nvar cartDOM = document.querySelector(".cart");\nvar productsDOM = document.querySelector(".items"); // eslint-disable-next-line no-unused-vars\n\nvar rightArrow = document.querySelector(".fa-arrow-right");\nvar leftArrow = document.querySelector(".fa-arrow-left");\nvar buttonsDOM = [];\nvar removeButtonsDOM = [];\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n  }\n\n  _createClass(UI, [{\n    key: "displayProducts",\n    value: function displayProducts(products) {\n      var result = "";\n      products.forEach(function (product) {\n        result += " <div class=\\"item1\\">\\n        \\n        <img src=\\"".concat(product.image, "\\" alt=\\"\\" class=\\"image1\\" />\\n        <h4 class=\'productTitle my-1\'> ").concat(product.title, " <h4>\\n        <p class=\\"my-1 price1\\">$").concat(product.price, "</p>\\n        <button class=\\"btn-add add1\\" id=\\"add1\\" data-id=\\"").concat(product.id, "\\">\\n          Add to cart\\n        </button>\\n      </div>");\n      });\n      productsDOM.innerHTML = result;\n    }\n  }, {\n    key: "getBagButtons",\n    value: function getBagButtons() {\n      var _this = this;\n\n      var buttons = _toConsumableArray(document.querySelectorAll(".add1"));\n\n      buttonsDOM = buttons;\n      buttons.forEach(function (button) {\n        var id = button.dataset.id;\n        var inCart = cart.find(function (item) {\n          return item.id === id;\n        });\n\n        if (inCart) {\n          button.innerText = "In Cart";\n          button.disabled = true;\n        }\n\n        button.addEventListener("click", function (e) {\n          e.target.innerText = "In Cart";\n          e.target.disabled = true;\n\n          var cartItem = _objectSpread(_objectSpread({}, _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].getProducts(id)), {}, {\n            amount: 1\n          });\n\n          cart = [].concat(_toConsumableArray(cart), [cartItem]);\n          _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].saveCart(cart);\n\n          _this.setCartValue(cart);\n\n          _this.addCartItem(cartItem);\n        });\n      });\n    }\n  }, {\n    key: "setCartValue",\n    value: function setCartValue(cart) {\n      var tempTotal = 0;\n      var tempItemsTotal = 0;\n      cart.map(function (item) {\n        tempTotal += item.price * item.amount;\n        tempItemsTotal += item.amount;\n      });\n      cartTotal.innerText = tempTotal;\n      cartItems.innerText = tempItemsTotal;\n    }\n  }, {\n    key: "addCartItem",\n    value: function addCartItem(item) {\n      var div = document.createElement("div");\n      div.classList.add("cart-item");\n      div.innerHTML = "<img src=\\"".concat(item.image, "\\" alt=\\"\\" />\\n    \\n        <h4>").concat(item.title, "</h4>\\n        <h5>$").concat(item.price, "</h5>\\n        <span class=\\"remove-item\\" data-id = \'").concat(item.id, "\'>remove</span>  <div>\\n        <i class=\\"fas fa-chevron-up\\" data-id = \'").concat(item.id, "\'> </i>\\n        <p class=\\"item-amount\\"  >").concat(item.amount, "</p>\\n        <i class=\\"fas fa-chevron-down\\" data-id = \'").concat(item.id, "\'> </i>\\n      </div>");\n      cartContent.appendChild(div);\n    }\n  }, {\n    key: "setupApp",\n    value: function setupApp() {\n      cart = _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].getCart();\n      this.setCartValue(cart);\n      this.populate(cart);\n    }\n  }, {\n    key: "removeItems",\n    value: function removeItems(id) {\n      cart = cart.filter(function (item) {\n        return item.id != id;\n      });\n      this.setCartValue(cart);\n      _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].saveCart(cart);\n    }\n  }, {\n    key: "populate",\n    value: function populate(cart) {\n      var _this2 = this;\n\n      cart.forEach(function (item) {\n        _this2.addCartItem(item);\n      });\n    }\n  }, {\n    key: "cartLogic",\n    value: function cartLogic() {\n      var _this3 = this;\n\n      clearCartBtn.addEventListener("click", function () {\n        while (cartContent.children.length > 0) {\n          _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].clearCart();\n\n          _this3.setupApp();\n\n          buttonsDOM.forEach(function (button) {\n            button.innerText = "Add to cart";\n            button.disabled = false;\n          });\n          cartContent.innerHTML = "";\n        }\n      });\n      cartContent.addEventListener("click", function (e) {\n        if (e.target.classList.contains("remove-item")) {\n          var removeItem = e.target;\n          var id = removeItem.dataset.id;\n          cartContent.removeChild(removeItem.parentElement);\n\n          _this3.removeItems(id);\n\n          var button = buttonsDOM.find(function (btn) {\n            return btn.dataset.id === id;\n          });\n          button.innerText = "Add to cart";\n          button.disabled = false;\n        } else if (e.target.classList.contains("fa-chevron-up")) {\n          var addAmount = e.target;\n          var _id = addAmount.dataset.id;\n          var tempItem = cart.find(function (item) {\n            return item.id === _id;\n          });\n          tempItem.amount = tempItem.amount + 1;\n          _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].saveCart(cart);\n\n          _this3.setCartValue(cart);\n\n          addAmount.nextElementSibling.innerText = tempItem.amount;\n        } else if (e.target.classList.contains("fa-chevron-down")) {\n          var removeAmount = e.target;\n          var _id2 = removeAmount.dataset.id;\n\n          var _tempItem = cart.find(function (item) {\n            return item.id === _id2;\n          });\n\n          if (_tempItem.amount > 1) {\n            _tempItem.amount = _tempItem.amount - 1;\n            removeAmount.previousElementSibling.innerText = _tempItem.amount;\n          } else {\n            _tempItem.amount = 1;\n            removeAmount.previousElementSibling.innerText = _tempItem.amount;\n          }\n\n          _Storage_js__WEBPACK_IMPORTED_MODULE_0__["Storage"].saveCart(cart);\n\n          _this3.setCartValue(cart);\n        }\n      });\n    }\n  }]);\n\n  return UI;\n}();\n\n//# sourceURL=webpack:///./src/UI.js?'
        );

        /***/
      },

    /***/ "./src/main.js":
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LoadCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadCart.js */ "./src/LoadCart.js");\n\nvar hamburger = document.querySelector(".hamburger");\n\nvar menuHandler = function menuHandler() {\n  var links = document.querySelectorAll(".hamLinks");\n  var menuLinks = document.querySelector(".menuLinks");\n  var bar1 = document.querySelector(".bar1");\n  var bar2 = document.querySelector(".bar2");\n  var bar3 = document.querySelector(".bar3");\n  bar1.classList.toggle("activeBar1");\n  bar2.classList.toggle("activeBar2");\n  bar3.classList.toggle("actveBar3");\n  menuLinks.classList.toggle("showMenu");\n  links.forEach(function (link) {\n    link.style.opacity = "1";\n  });\n};\n\nhamburger.addEventListener("click", menuHandler);\n$(document).ready(function () {\n  $(".hero").animate({\n    left: "100px"\n  }, "slow");\n  $(".linkBtn").click(function (e) {\n    var linkHref = $(this).attr("href");\n    $("html, body").animate({\n      scrollTop: $(linkHref).offset().top\n    }, 500);\n  });\n  $(".linkNav").click(function (e) {\n    var linkHref = $(this).attr("href");\n    $("html, body").animate({\n      scrollTop: $(linkHref).offset().top\n    }, 850);\n    e.preventDefault();\n  });\n});\nvar runCart = new _LoadCart_js__WEBPACK_IMPORTED_MODULE_0__["RunCart"]();\nrunCart.runCart();\n\n//# sourceURL=webpack:///./src/main.js?'
        );

        /***/
      },

    /******/
  }
);
