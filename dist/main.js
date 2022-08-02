/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat/Montserrat-VariableFont_wght.ttf */ \"./src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Montserrat';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf'),\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf');\\n    font-weight: 600;\\n    font-style: normal;\\n  }\\n\\nbody, html {\\n    height: 100%;\\n    margin: 2em;\\n    margin-left: 8em;\\n    margin-right: 8em;\\n    font-family: 'Montserrat', sans-serif;\\n}\\n\\n.home-image {\\n    height: 45em;\\n}\\n\\n.header {\\n    display: flex;\\n    flex-direction: row-reverse;\\n    justify-content: space-between;\\n    align-items: center;\\n    /* width: 1084px; */\\n}\\n\\n    li {\\n        list-style: none;\\n    }\\n\\n    .nav-menu {\\n        display: flex;\\n        flex-direction: row;\\n        gap: 1em;\\n        text-decoration: none;\\n    }\\n\\n        .submenu-link:hover {\\n            color: brown;\\n        }\\n\\n        .submenu-link:active {\\n            color: black;\\n            text-decoration: none;\\n        }\\n\\n        a {\\n            text-decoration: none;\\n        }\\n\\n.body-container {\\n    width: 1084px;\\n}\\n\\n.cover-container {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n    /* MENU PAGE */\\n    .menu-page {\\n        display: grid;\\n        grid-template-rows: repeat(5, 1fr);\\n        grid-template-columns: 1fr;\\n        gap: .5em;\\n    }\\n\\n        .menu-header {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n            font-weight: bold;\\n            font-size: 2em;\\n            height: 4em;\\n        }\\n\\n        .menu-item {\\n            display: grid;\\n            /* background-color: #eae7dc; */\\n            padding: 1em;\\n            border: lightgray;\\n            border-style: solid;\\n            border-width: thin;\\n            border-radius: 1em;\\n            gap: .5em;\\n        }\\n\\n        /* .menu-item :hover {\\n            border: #e98074;\\n            border-style: solid;\\n            border-width: thin;\\n        } */\\n\\n            .item-name {\\n                font-size: 1em;\\n                font-weight: bold;\\n            }\\n\\n            .item-text {\\n                color: gray;\\n            }\\n\\n    /* ABOUT PAGE */\\n    .about-page {\\n        display: grid;\\n        grid-template-rows: 1fr 3fr 1fr;\\n        grid-template-columns: 1fr;\\n        gap: .5em;\\n    }\\n\\n        .about-header {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n            font-weight: bold;\\n            font-size: 2em;\\n            height: 4em;\\n        }\\n\\n        .about-cover {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n        }\\n\\n            .about-image {\\n                height: 30em;\\n            }\\n\\n        .about-text {\\n            display: flex;\\n            justify-content: center;\\n            align-items: center;\\n        }\\n\\n        .about-hours {\\n            display: grid;\\n            grid-template-rows: 1fr 1fr;\\n            grid-template-columns: 1fr 1fr;\\n            height: 1em;\\n        }\\n\\n            .hours-header {\\n                grid-row: 1;\\n                grid-column: 1 / 3;\\n                display: flex;\\n                justify-content: center;\\n                align-items: center;\\n                height: 2em;\\n                font-weight: bold;\\n                font-size: 1em;\\n                height: 2em;\\n            }\\n\\n            .hours-days {\\n                grid-row: 2;\\n                grid-column: 1 / 2;\\n                display: flex;\\n                justify-content: flex-end;\\n            }\\n\\n                .day-list {\\n                    position: relative;\\n                    right: 2em;\\n                }\\n\\n            .hours-time {\\n                grid-row: 2;\\n                display: flex;\\n                justify-content: flex-start;\\n            }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ABOUT_CONTAINER_DIV\": () => (/* binding */ ABOUT_CONTAINER_DIV),\n/* harmony export */   \"aboutCreate\": () => (/* binding */ aboutCreate),\n/* harmony export */   \"default\": () => (/* binding */ aboutChange)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n/* harmony import */ var _images_about_cover_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/about-cover.jpg */ \"./src/images/about-cover.jpg\");\n\n\n\n\n\n\n// Switch to location page\nconst ABOUT_CONTAINER_DIV = document.createElement('div')\nconst ABOUT_HEADER_DIV = document.createElement('div')\nconst ABOUT_TEXT_DIV = document.createElement('div')\nconst ABOUT_COVER_DIV = document.createElement('div')\nconst ABOUT_HOURS_DIV = document.createElement('div')\nconst HOURS_HEADER = document.createElement('div')\nconst HOURS_DAYS = document.createElement('div')\nconst HOURS_TIME = document.createElement('div')\n\n// List of Hours of Operation\nconst DAYS_UL = document.createElement('ul')\nconst SUNDAY_LI = document.createElement('li')\nconst MONDAY_LI = document.createElement('li')\nconst TUESDAY_LI = document.createElement('li')\nconst WEDNESDAY_LI = document.createElement('li')\nconst THURSDAY_LI = document.createElement('li')\nconst FRIDAY_LI = document.createElement('li')\nconst SATURDAY_LI = document.createElement('li')\n\nconst TIME_UL = document.createElement('ul')\nconst SUNDAY_TIME = document.createElement('li')\nconst MONDAY_TIME = document.createElement('li')\nconst TUESDAY_TIME = document.createElement('li')\nconst WEDNESDAY_TIME = document.createElement('li')\nconst THURSDAY_TIME = document.createElement('li')\nconst FRIDAY_TIME = document.createElement('li')\nconst SATURDAY_TIME = document.createElement('li')\n\n\nconst ABOUT_COVER = new Image();\nABOUT_COVER.src = _images_about_cover_jpg__WEBPACK_IMPORTED_MODULE_4__;\n\nfunction aboutChange() {\n    // alternatively set display: none for each container\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIV.style.display = 'none'\n    _location_js__WEBPACK_IMPORTED_MODULE_1__.LOCATION_CONTAINER_DIV.style.display = 'none'\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MENU_CONTAINER_DIV.style.display = 'none'\n    _events_js__WEBPACK_IMPORTED_MODULE_3__.EVENTS_CONTAINER_DIV.style.display = 'none'\n\n    document.body.appendChild(ABOUT_CONTAINER_DIV).className = 'about-page'\n    // ABOUT_CONTAINER_DIV.innerHTML = \"ABOUT PAGE\"\n    ABOUT_CONTAINER_DIV.style.display = 'grid'\n\n    return ABOUT_CONTAINER_DIV\n}\n\n// Function to create content on the page\nconst aboutCreate = () => {\n    // Page Header\n    ABOUT_CONTAINER_DIV.appendChild(ABOUT_HEADER_DIV).className = 'about-header'\n    ABOUT_HEADER_DIV.innerHTML = 'ABOUT'\n\n    // Page Image\n    ABOUT_CONTAINER_DIV.appendChild(ABOUT_COVER_DIV).className = 'about-cover'\n    ABOUT_COVER_DIV.appendChild(ABOUT_COVER).className = 'about-image'\n\n    // Descriptive text about the store\n    ABOUT_CONTAINER_DIV.appendChild(ABOUT_TEXT_DIV).className = 'about-text'\n    ABOUT_TEXT_DIV.innerHTML = 'Welcome to Initial Tea Boba Shop! We have the best boba in NYC!'\n\n    // Hours of Operation\n    ABOUT_CONTAINER_DIV.appendChild(ABOUT_HOURS_DIV).className = 'about-hours'\n    ABOUT_HOURS_DIV.appendChild(HOURS_HEADER).className = 'hours-header'\n    HOURS_HEADER.innerHTML = 'BUSINESS HOURS'\n\n    ABOUT_HOURS_DIV.appendChild(HOURS_DAYS).className = 'hours-days'\n    HOURS_DAYS.appendChild(DAYS_UL).className = 'day-list'\n    DAYS_UL.append(SUNDAY_LI, MONDAY_LI, TUESDAY_LI, WEDNESDAY_LI, THURSDAY_LI, FRIDAY_LI, SATURDAY_LI)\n    SUNDAY_LI.innerHTML = 'SUNDAY'\n    MONDAY_LI.innerHTML = 'MONDAY'\n    TUESDAY_LI.innerHTML = 'TUESDAY'\n    WEDNESDAY_LI.innerHTML = 'WEDNESDAY'\n    THURSDAY_LI.innerHTML = 'THURSDAY'\n    FRIDAY_LI.innerHTML = 'FRIDAY'\n    SATURDAY_LI.innerHTML = 'SATURDAY'\n\n    ABOUT_HOURS_DIV.appendChild(HOURS_TIME).className = 'hours-time'\n    HOURS_TIME.appendChild(TIME_UL).className = 'time-list'\n    TIME_UL.append(SUNDAY_TIME, MONDAY_TIME, TUESDAY_TIME, WEDNESDAY_TIME, THURSDAY_TIME, FRIDAY_TIME, SATURDAY_TIME)\n    SUNDAY_TIME.innerHTML = '12 PM - 8 PM'\n    MONDAY_TIME.innerHTML = '12 PM - 8 PM'\n    TUESDAY_TIME.innerHTML = '12 PM - 8 PM'\n    WEDNESDAY_TIME.innerHTML = '12 PM - 8 PM'\n    THURSDAY_TIME.innerHTML = '12 PM - 8 PM'\n    FRIDAY_TIME.innerHTML = '12 PM - 8 PM'\n    SATURDAY_TIME.innerHTML = '12 PM - 8 PM'\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVENTS_CONTAINER_DIV\": () => (/* binding */ EVENTS_CONTAINER_DIV),\n/* harmony export */   \"contactCreate\": () => (/* binding */ contactCreate),\n/* harmony export */   \"default\": () => (/* binding */ eventsChange)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\n// Switch to location page\nconst EVENTS_CONTAINER_DIV = document.createElement('div')\nconst CONTACT_HEADER_DIV = document.createElement('div')\nconst CONTACT_TEXT_DIV = document.createElement('div')\nconst CONTACT_FORM_CONTAINER_DIV = document.createElement('div')\n\n// Form variables\nconst CONTACT_FORM = document.createElement('form')\nconst FORM_UL = document.createElement('ul')\n\n// Form - First Name\nconst FORM_FIRST_NAME = document.createElement('li')\nconst FIRST_NAME_LABEL = document.createElement('label')\nconst FIRST_NAME_INPUT = document.createElement('input')\n\n// Form - Last Name\nconst FORM_LAST_NAME = document.createElement('li')\nconst LAST_NAME_LABEL = document.createElement('label')\nconst LAST_NAME_INPUT = document.createElement('input')\n\n// Form - Email\nconst FORM_EMAIL = document.createElement('li')\nconst EMAIL_LABEL = document.createElement('label')\nconst EMAIL_INPUT = document.createElement('input')\n\n// Form - Message\nconst FORM_MESSAGE = document.createElement('li')\nconst MESSAGE_LABEL = document.createElement('label')\nconst MESSAGE_INPUT = document.createElement('input')\n\nconst SUBMIT_BTN = document.createElement('input')\n\nfunction eventsChange() {\n    // alternatively set display: none for each container\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIV.style.display = 'none'\n    _location_js__WEBPACK_IMPORTED_MODULE_1__.LOCATION_CONTAINER_DIV.style.display = 'none'\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MENU_CONTAINER_DIV.style.display = 'none'\n    _about_js__WEBPACK_IMPORTED_MODULE_3__.ABOUT_CONTAINER_DIV.style.display = 'none'\n\n    document.body.appendChild(EVENTS_CONTAINER_DIV).className = 'events-page'\n    EVENTS_CONTAINER_DIV.style.display = 'grid'\n\n    return EVENTS_CONTAINER_DIV\n}\n\nconst contactCreate = () => {\n    // Page Header\n    EVENTS_CONTAINER_DIV.appendChild(CONTACT_HEADER_DIV).className = 'contact-header'\n    CONTACT_HEADER_DIV.innerHTML = 'CONTACT US'\n\n    EVENTS_CONTAINER_DIV.appendChild(CONTACT_TEXT_DIV).className = 'contact-text'\n    CONTACT_TEXT_DIV.innerHTML = 'Feel free to let us know how great our boba is down below!'\n\n    // Form - Container\n    EVENTS_CONTAINER_DIV.appendChild(CONTACT_FORM_CONTAINER_DIV).className = 'contact-form-container'\n    CONTACT_FORM_CONTAINER_DIV.appendChild(CONTACT_FORM).className = 'contact-form'\n\n    CONTACT_FORM.appendChild(FORM_UL)\n\n    FORM_UL.append(FORM_FIRST_NAME, FORM_LAST_NAME, FORM_EMAIL, FORM_MESSAGE)\n\n    FORM_FIRST_NAME.append(FIRST_NAME_LABEL, FIRST_NAME_INPUT)\n        FIRST_NAME_LABEL.innerHTML = 'FIRST NAME'\n        FIRST_NAME_LABEL.setAttribute('for', 'first-name')\n    FORM_LAST_NAME.append(LAST_NAME_LABEL, LAST_NAME_INPUT)\n        LAST_NAME_LABEL.innerHTML = 'LAST NAME'\n        LAST_NAME_LABEL.setAttribute('for', 'last-name')\n    FORM_EMAIL.append(EMAIL_LABEL, EMAIL_INPUT)\n        EMAIL_LABEL.innerHTML = 'EMAIL'\n        EMAIL_LABEL.setAttribute('for', 'email')\n    FORM_MESSAGE.append(MESSAGE_LABEL, MESSAGE_INPUT)\n        MESSAGE_LABEL.innerHTML = 'MESSAGE'\n        MESSAGE_LABEL.setAttribute('for', 'email')\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTAINER_DIV\": () => (/* binding */ CONTAINER_DIV),\n/* harmony export */   \"aboutTab\": () => (/* binding */ aboutTab),\n/* harmony export */   \"eventsTab\": () => (/* binding */ eventsTab),\n/* harmony export */   \"locationTab\": () => (/* binding */ locationTab),\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_boba_cover_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/boba-cover.jpg */ \"./src/images/boba-cover.jpg\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n// Home Page\n\n\n\n\n\n\n\n// GLOBAL SCOPE\nconst HEADER_DIV = document.createElement('div');\nconst CONTAINER_DIV = document.createElement('div');\n\n// Header submenu\nconst NAV_MENU_UL = document.createElement('ul');\nconst NAV_HOURS_LOCATION_LI = document.createElement('li');\nconst NAV_MENUS_LI = document.createElement('li');\nconst NAV_ABOUT_LI = document.createElement('li');\nconst NAV_PRIVATE_EVENTS_LI = document.createElement('li');\nconst NAV_LOGO_A = document.createElement('a');\nconst HOURS_LOCATION_A = document.createElement('a');\nconst MENUS_A = document.createElement('a');\nconst ABOUT_A = document.createElement('a');\nconst PRIVATE_EVENTS_A = document.createElement('a');\n\n// Submenu link HTML\nNAV_LOGO_A.innerHTML = 'INITIAL TEA SHOP'\nHOURS_LOCATION_A.innerHTML = 'LOCATION'\nMENUS_A.innerHTML = 'MENU'\nABOUT_A.innerHTML = 'ABOUT'\nPRIVATE_EVENTS_A.innerHTML = 'PRIVATE EVENTS'\n\n// Append href link to submenu links\nNAV_LOGO_A.setAttribute('href', '#');\nHOURS_LOCATION_A.setAttribute('href', '#');\nMENUS_A.setAttribute('href', '#');\nABOUT_A.setAttribute('href', '#');\nPRIVATE_EVENTS_A.setAttribute('href', '#');\n\n// Add cover image\n// Remove cover image when submenu-link is 'clicked'\nconst COVER_IMAGE = new Image();\nCOVER_IMAGE.src = _images_boba_cover_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n// Create container bodies\n// cover-container will disappear when a submenu-link is clicked\ndocument.body.appendChild(HEADER_DIV).className = 'header';\ndocument.body.appendChild(CONTAINER_DIV).className = 'cover-container';\n\nfunction homeChange() {\n    // alternatively set display: none for each container\n    _location_js__WEBPACK_IMPORTED_MODULE_2__.LOCATION_CONTAINER_DIV.style.display = 'none'\n    _menu_js__WEBPACK_IMPORTED_MODULE_3__.MENU_CONTAINER_DIV.style.display = 'none'\n    _about_js__WEBPACK_IMPORTED_MODULE_4__.ABOUT_CONTAINER_DIV.style.display = 'none'\n    _events_js__WEBPACK_IMPORTED_MODULE_5__.EVENTS_CONTAINER_DIV.style.display = 'none'\n\n    CONTAINER_DIV.style.display = 'block'\n\n    return CONTAINER_DIV\n}\n\n// Append links to header div\nHEADER_DIV.appendChild(NAV_MENU_UL).className = 'nav-menu';\nHEADER_DIV.appendChild(NAV_LOGO_A).className = 'nav-logo';\n\n// Define variable for id of header links\nNAV_LOGO_A.setAttribute('id', 'home-link');\nconst homeTab = document.querySelector('#home-link');\n\nNAV_MENU_UL.appendChild(NAV_HOURS_LOCATION_LI);\nNAV_HOURS_LOCATION_LI.appendChild(HOURS_LOCATION_A).className = 'submenu-link';\nHOURS_LOCATION_A.setAttribute('id', 'location-link');\nconst locationTab = document.querySelector('#location-link');\n\nNAV_MENU_UL.appendChild(NAV_MENUS_LI);\nNAV_MENUS_LI.appendChild(MENUS_A).className = 'submenu-link';\nMENUS_A.setAttribute('id', 'menu-link')\nconst menuTab = document.querySelector('#menu-link');\n\nNAV_MENU_UL.appendChild(NAV_ABOUT_LI);\nNAV_ABOUT_LI.appendChild(ABOUT_A).className = 'submenu-link';\nABOUT_A.setAttribute('id', 'about-link')\nconst aboutTab = document.querySelector('#about-link');\n\nNAV_MENU_UL.appendChild(NAV_PRIVATE_EVENTS_LI);\nNAV_PRIVATE_EVENTS_LI.appendChild(PRIVATE_EVENTS_A).className = 'submenu-link';\nPRIVATE_EVENTS_A.setAttribute('id', 'events-link')\nconst eventsTab = document.querySelector('#events-link');\n\n// Append banner image to homepage\nCONTAINER_DIV.appendChild(COVER_IMAGE).className = 'home-image';\n\n// Switch to home page\nhomeTab.addEventListener('click', () => {\n    homeChange();\n})\n\n// Switch to location page\n// locationChange function is added after the callback fn so it does not run immediately when the page runs\nlocationTab.addEventListener('click', () => {\n    ;(0,_location_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n// Switch to menu page\n;(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuCreate)();\nmenuTab.addEventListener('click', () => {\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\n// Switch to about page\n;(0,_about_js__WEBPACK_IMPORTED_MODULE_4__.aboutCreate)();\naboutTab.addEventListener('click', () => {\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n})\n\n// Switch to private events page\n;(0,_events_js__WEBPACK_IMPORTED_MODULE_5__.contactCreate)();\neventsTab.addEventListener('click', () => {\n    (0,_events_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n})\n\n\n\n// const aboutPage = new PageUI();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCATION_CONTAINER_DIV\": () => (/* binding */ LOCATION_CONTAINER_DIV),\n/* harmony export */   \"default\": () => (/* binding */ locationChange)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\n\n\n// Switch to location page\nconst LOCATION_CONTAINER_DIV = document.createElement('div')\n\nfunction locationChange() {\n    // alternatively set display: none for each container\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIV.style.display = 'none'\n    _menu_js__WEBPACK_IMPORTED_MODULE_1__.MENU_CONTAINER_DIV.style.display = 'none'\n    _about_js__WEBPACK_IMPORTED_MODULE_2__.ABOUT_CONTAINER_DIV.style.display = 'none'\n    _events_js__WEBPACK_IMPORTED_MODULE_3__.EVENTS_CONTAINER_DIV.style.display = 'none'\n\n    document.body.appendChild(LOCATION_CONTAINER_DIV).className = 'location-page'\n    LOCATION_CONTAINER_DIV.innerHTML = \"LOCATION PAGE\"\n    LOCATION_CONTAINER_DIV.style.display = 'block'\n\n    return LOCATION_CONTAINER_DIV\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/location.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MENU_CONTAINER_DIV\": () => (/* binding */ MENU_CONTAINER_DIV),\n/* harmony export */   \"default\": () => (/* binding */ menuChange),\n/* harmony export */   \"menuCreate\": () => (/* binding */ menuCreate),\n/* harmony export */   \"menuItem\": () => (/* binding */ menuItem)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\n\n\n// Switch to location page\n\n// Elements within menu page\nconst MENU_CONTAINER_DIV = document.createElement('div')\nconst MENU_HEADER_DIV = document.createElement('div')\nconst MENU_ITEM_ONE_DIV = document.createElement('div')\nconst MENU_ITEM_TWO_DIV = document.createElement('div')\nconst MENU_ITEM_THREE_DIV = document.createElement('div')\nconst MENU_ITEM_FOUR_DIV = document.createElement('div')\nconst MENU_ITEM_FIVE_DIV = document.createElement('div')\n\n// function to replicate a basic menu item\nconst menuItem = (div) => {\n    // elements within the menu line item\n    const itemName = document.createElement('div')\n    const itemText = document.createElement('div')\n    const itemPrice = document.createElement('div')\n    const itemImage = document.createElement('div')\n\n    div.appendChild(itemName).className = 'item-name'\n    div.appendChild(itemText).className = 'item-text'\n    div.appendChild(itemPrice).className = 'item-price'\n    div.appendChild(itemImage).className = 'item-image'\n}\n\nconst menuCreate = () => {\n    // create page layout for menu\n    MENU_CONTAINER_DIV.appendChild(MENU_HEADER_DIV).className = 'menu-header'\n    MENU_HEADER_DIV.innerHTML = 'MENU'\n\n    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_ONE_DIV).className = 'menu-item'\n    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_TWO_DIV).className = 'menu-item'\n    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_THREE_DIV).className = 'menu-item'\n    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_FOUR_DIV).className = 'menu-item'\n    MENU_CONTAINER_DIV.appendChild(MENU_ITEM_FIVE_DIV).className = 'menu-item'\n\n    // BUG: menuItem repeats after menuChange is called\n    menuItem(MENU_ITEM_ONE_DIV)\n    menuItem(MENU_ITEM_TWO_DIV)\n    menuItem(MENU_ITEM_THREE_DIV)\n    menuItem(MENU_ITEM_FOUR_DIV)\n    menuItem(MENU_ITEM_FIVE_DIV)\n\n    // Item One\n    MENU_ITEM_ONE_DIV.children[0].innerHTML = 'MILK TEA'\n    MENU_ITEM_ONE_DIV.children[1].innerHTML = 'Our most popular drink!'\n    MENU_ITEM_ONE_DIV.children[2].innerHTML = '$5.00'\n\n    // Item Two\n    MENU_ITEM_TWO_DIV.children[0].innerHTML = 'OOLONG TEA'\n    MENU_ITEM_TWO_DIV.children[1].innerHTML = 'Our second most popular drink!'\n    MENU_ITEM_TWO_DIV.children[2].innerHTML = '$5.00'\n\n    // Item Three\n    MENU_ITEM_THREE_DIV.children[0].innerHTML = 'BLACK TEA'\n    MENU_ITEM_THREE_DIV.children[1].innerHTML = 'Our third most popular drink!'\n    MENU_ITEM_THREE_DIV.children[2].innerHTML = '$5.00'\n\n    // Item Four\n    MENU_ITEM_FOUR_DIV.children[0].innerHTML = 'JASMINE TEA'\n    MENU_ITEM_FOUR_DIV.children[1].innerHTML = 'Our fourth most popular drink!'\n    MENU_ITEM_FOUR_DIV.children[2].innerHTML = '$5.00'\n\n    // Item Five\n    MENU_ITEM_FIVE_DIV.children[0].innerHTML = 'MANGO SLUSH'\n    MENU_ITEM_FIVE_DIV.children[1].innerHTML = 'Our fifth most popular drink!'\n    MENU_ITEM_FIVE_DIV.children[2].innerHTML = '$5.00'\n}\n\nfunction menuChange() {\n    // alternatively set display: none for each container\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTAINER_DIV.style.display = 'none'\n    _location_js__WEBPACK_IMPORTED_MODULE_1__.LOCATION_CONTAINER_DIV.style.display = 'none'\n    _about_js__WEBPACK_IMPORTED_MODULE_2__.ABOUT_CONTAINER_DIV.style.display = 'none'\n    _events_js__WEBPACK_IMPORTED_MODULE_3__.EVENTS_CONTAINER_DIV.style.display = 'none'\n\n    document.body.appendChild(MENU_CONTAINER_DIV).className = 'menu-page'\n    // MENU_CONTAINER_DIV.innerHTML = \"MENU PAGE\"\n    MENU_CONTAINER_DIV.style.display = 'grid'\n\n    return MENU_CONTAINER_DIV\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf":
/*!***************************************************************!*\
  !*** ./src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3faa3eef13649db02044.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/images/about-cover.jpg":
/*!************************************!*\
  !*** ./src/images/about-cover.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"193174368c93f51bd380.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/about-cover.jpg?");

/***/ }),

/***/ "./src/images/boba-cover.jpg":
/*!***********************************!*\
  !*** ./src/images/boba-cover.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9e57cbda77e907a57cd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/boba-cover.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;