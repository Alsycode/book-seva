/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/skin/skin-3.css */ \"./css/skin/skin-3.css\");\n/* harmony import */ var _css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/switcher.css */ \"./styles/switcher.css\");\n/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\package3\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n //import Slider from \"react-rangeslider\";\n//import \"react-rangeslider/lib/index.css\";\n\n\n //import useScrollPosition from \"use-scroll-position\";\n//import \"../css/skin/skin-1.css\";\n//import \"../css/skin/skin-2.css\";\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: toggle1,\n    1: setToggle1\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: body_,\n    1: setbody_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: layout,\n    1: setLayout\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"wide\");\n  const {\n    0: header,\n    1: setHeader\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"fixed\");\n  const {\n    0: header_,\n    1: setHeader_\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: sliderValu,\n    1: setSliderValu\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setbody_(document.querySelector(\"body\"));\n    setHeader_(document.getElementsByClassName(\"main-bar-wraper\"));\n  }, []); // let scrollPosition = useScrollPosition();\n\n  function toggle() {\n    setToggle1(!toggle1);\n  }\n\n  const layoutChange = name => {\n    setLayout(name);\n    body_.className = name;\n  };\n\n  const backGroundChage = value => {\n    if (value === \"color_1\") {\n      body_.style.backgroundColor = \"rgb(137, 110, 255)\";\n    } else if (value === \"color_2\") {\n      body_.style.backgroundColor = \"rgb(245, 95, 141)\";\n    } else if (value === \"color_3\") {\n      body_.style.backgroundColor = \"rgb(239, 20, 110)\";\n    }\n  };\n\n  const backGroundImage = value => {\n    body_.style.backgroundImage = `url(${value})`;\n    body_.style.backgroundSize = \"auto\";\n  };\n\n  const chageHeader = value => {\n    setHeader(value);\n\n    if (value === \"fixed\") {\n      header_[0].classList.add(\"sticky-header\");\n      header_[0].classList.remove(\"sticky-no\");\n    } else {\n      header_[0].classList.add(\"sticky-no\");\n      header_[0].classList.remove(\"sticky-header\");\n      header_[0].classList.remove(\"is-fixed\");\n    }\n  };\n\n  const onChange = value => {\n    setSliderValu(value);\n    body_.style.padding = value + \"px\";\n  };\n  /*  header === \"fixed\" && scrollPosition > 10\r\n     ? header_ && header_[0].classList.add(\"is-fixed\")\r\n     : header_ && header_[0].classList.remove(\"is-fixed\"); */\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Samar - React Template\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        sizes: \"16x16\",\n        href: \"/images/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 3\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"page-wraper\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"https://themeforest.net/cart/configure_before_adding/32950742/?license=regular;\",\n      target: \"_blank\",\n      className: \"bt-buy-now theme-btn\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n        className: \"ti-shopping-cart\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n        children: \"Buy Now\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"https://support.w3itexperts.com\",\n      target: \"_blank\",\n      className: \"bt-support-now theme-btn\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n        className: \"ti-headphone-alt\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n        children: \"Support\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"a\", {\n      href: \"#top\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"button\", {\n        className: \"scroltop icon-up\",\n        type: \"button\",\n        style: {\n          display: \"inline-block\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"i\", {\n          className: \"fa fa-arrow-up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0UsZUFBUyxFQUFDLDBCQUhaO0FBQUEsOEJBS0U7QUFBRyxpQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsZUF5QkU7QUFBRyxVQUFJLEVBQUMsTUFBUjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxrQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUVpQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUhUO0FBQUEsK0JBS0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUEsa0JBREY7QUFxQ0Q7O0FBRUQsaUVBQWVuQyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtYXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtcmFuZ2VzbGlkZXJcIjtcclxuLy9pbXBvcnQgXCJyZWFjdC1yYW5nZXNsaWRlci9saWIvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuLy9pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuLy9pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbi8vaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0yLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFwid2lkZVwiKTtcclxuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoXCJmaXhlZFwiKTtcclxuICBjb25zdCBbaGVhZGVyXywgc2V0SGVhZGVyX10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzbGlkZXJWYWx1LCBzZXRTbGlkZXJWYWx1XSA9IHVzZVN0YXRlKDIwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuICAgIHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuIC8vIGxldCBzY3JvbGxQb3NpdGlvbiA9IHVzZVNjcm9sbFBvc2l0aW9uKCk7XHJcbiAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgc2V0VG9nZ2xlMSghdG9nZ2xlMSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsYXlvdXRDaGFuZ2UgPSAobmFtZSkgPT4ge1xyXG4gICAgc2V0TGF5b3V0KG5hbWUpO1xyXG4gICAgYm9keV8uY2xhc3NOYW1lID0gbmFtZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBiYWNrR3JvdW5kQ2hhZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJjb2xvcl8xXCIpIHtcclxuICAgICAgYm9keV8uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTM3LCAxMTAsIDI1NSlcIjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiY29sb3JfMlwiKSB7XHJcbiAgICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI0NSwgOTUsIDE0MSlcIjtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiY29sb3JfM1wiKSB7XHJcbiAgICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIzOSwgMjAsIDExMClcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBiYWNrR3JvdW5kSW1hZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt2YWx1ZX0pYDtcclxuICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJhdXRvXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhZ2VIZWFkZXIgPSAodmFsdWUpID0+IHtcclxuICAgIHNldEhlYWRlcih2YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiZml4ZWRcIikge1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktbm9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5hZGQoXCJzdGlja3ktbm9cIik7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreS1oZWFkZXJcIik7XHJcbiAgICAgIGhlYWRlcl9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWZpeGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTbGlkZXJWYWx1KHZhbHVlKTtcclxuICAgIGJvZHlfLnN0eWxlLnBhZGRpbmcgPSB2YWx1ZSArIFwicHhcIjtcclxuICB9O1xyXG5cclxuIC8qICBoZWFkZXIgPT09IFwiZml4ZWRcIiAmJiBzY3JvbGxQb3NpdGlvbiA+IDEwXHJcbiAgICA/IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwiaXMtZml4ZWRcIilcclxuICAgIDogaGVhZGVyXyAmJiBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTsgKi9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPlNhbWFyIC0gUmVhY3QgVGVtcGxhdGU8L3RpdGxlPlxyXG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2ltYWdlcy9mYXZpY29uLnBuZ1wiLz5cclxuICAgICAgICA8L0hlYWQ+XHRcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBlclwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9jYXJ0L2NvbmZpZ3VyZV9iZWZvcmVfYWRkaW5nLzMyOTUwNzQyLz9saWNlbnNlPXJlZ3VsYXI7XCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LWJ1eS1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXNob3BwaW5nLWNhcnRcIiAvPlxyXG4gICAgICAgIDxzcGFuPkJ1eSBOb3c8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdXBwb3J0LnczaXRleHBlcnRzLmNvbVwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJidC1zdXBwb3J0LW5vdyB0aGVtZS1idG5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwidGktaGVhZHBob25lLWFsdFwiIC8+XHJcbiAgICAgICAgPHNwYW4+U3VwcG9ydDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBocmVmPVwiI3RvcFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sdG9wIGljb24tdXBcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctdXBcIiAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJib2R5XyIsInNldGJvZHlfIiwibGF5b3V0Iiwic2V0TGF5b3V0IiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiaGVhZGVyXyIsInNldEhlYWRlcl8iLCJzbGlkZXJWYWx1Iiwic2V0U2xpZGVyVmFsdSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0b2dnbGUiLCJsYXlvdXRDaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiYmFja0dyb3VuZENoYWdlIiwidmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tHcm91bmRJbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY2hhZ2VIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInBhZGRpbmciLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/skin/skin-3.css":
/*!*****************************!*\
  !*** ./css/skin/skin-3.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();