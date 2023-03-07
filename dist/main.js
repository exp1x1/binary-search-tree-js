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

/***/ "./binaryTree/error.js":
/*!*****************************!*\
  !*** ./binaryTree/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alreadyExist\": () => (/* binding */ alreadyExist),\n/* harmony export */   \"doNotExist\": () => (/* binding */ doNotExist)\n/* harmony export */ });\nconst alreadyExist = (value='value') => {\n  console.log(`\"${value}\" already exist tree`)\n}\n\nconst doNotExist = (value) => {\n  console.log(`\"${value}\" do not exist in tree`)\n}\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/error.js?");

/***/ }),

/***/ "./binaryTree/helpFunction.js":
/*!************************************!*\
  !*** ./binaryTree/helpFunction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prettyPrint\": () => (/* binding */ prettyPrint)\n/* harmony export */ });\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/helpFunction.js?");

/***/ }),

/***/ "./binaryTree/node.js":
/*!****************************!*\
  !*** ./binaryTree/node.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node)\n/* harmony export */ });\nconst Node = (data=null, left = null, right = null) => {\n  return { data, left, right };\n};\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/node.js?");

/***/ }),

/***/ "./binaryTree/tree.js":
/*!****************************!*\
  !*** ./binaryTree/tree.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./binaryTree/node.js\");\n/* harmony import */ var _helpFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpFunction */ \"./binaryTree/helpFunction.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./binaryTree/error.js\");\n\n\n\n\nconst Tree = (rawArr) => {\n  let treeRoot;\n  rawArr = [...new Set(rawArr)];\n\n  const buildTree = (arrr, start, end) => {\n    if (start > end) return null;\n    const mid = Math.round((start + end) / 2);\n\n    const root = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(arrr[mid]);\n\n    root.left = buildTree(arrr, start, mid - 1);\n    root.right = buildTree(arrr, mid + 1, end);\n\n    return root;\n  };\n  treeRoot = buildTree(rawArr, 0, rawArr.length - 1);\n\n  const find = (value, binTree = treeRoot) => {\n    let node = binTree;\n\n    while (node !== null) {\n      if (node.data === value) {\n        return node;\n      } else if (value < node.data) {\n        node = node.left;\n      } else {\n        node = node.right;\n      }\n    }\n    return null;\n  };\n\n  const insert = (value, binTree = treeRoot) => {\n    if (find(value)) {\n      (0,_error__WEBPACK_IMPORTED_MODULE_2__.alreadyExist)(value);\n      return;\n    }\n\n    let node = binTree;\n    const root = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(value);\n\n    if (value < node.data) {\n      if (node.left === null) {\n        node.left = root;\n        return;\n      }\n\n      insert(value, node.left);\n    } else {\n      if (node.right === null) {\n        node.right = root;\n        return;\n      }\n\n      insert(value, node.right);\n    }\n  };\n\n  const searchLeftMostNode = (node) => {\n    let root = node;\n\n    if (root.left === null) return root;\n    root = searchLeftMostNode(root.left);\n\n    return root;\n  };\n\n  const searchParentNode = (value) => {\n    let node = treeRoot;\n    let parentNode;\n\n    while (node.data !== value) {\n      parentNode = node;\n      if (value < node.data) {\n        node = node.left;\n      } else {\n        node = node.right;\n      }\n    }\n    return parentNode;\n  };\n\n  // const deleteNode = (value, binTree = treeRoot) => {\n  //   let node = treeRoot;\n  //   if (!find(value)) {\n  //     doNotExist(value);\n  //     return;\n  //   }\n  //   let parentNode;\n  //   let grandChildNode;\n  //   let pos;\n  //   while (node.data !== value) {\n  //     parentNode = node;\n  //     if (value < node.data) {\n  //       node = node.left;\n  //       pos = \"left\";\n  //       grandChildNode = node.left;\n  //     } else {\n  //       node = node.right;\n  //       pos = \"right\";\n  //       grandChildNode = node.right;\n  //     }\n  //   }\n  //   // console.log(parentNode);\n\n  //   if (node.left === null && node.right === null) {\n  //     parentNode[pos] = null;\n  //   }\n  //   if (\n  //     (node.left === null && node.right !== null) ||\n  //     (node.right === null && node.left !== null)\n  //   ) {\n  //     console.log(node);\n  //     if (node.left !== null) {\n  //       parentNode[\"left\"] = node.left;\n  //     } else {\n  //       parentNode[\"right\"] = node.right;\n  //     }\n  //   }\n  //   if (node.right !== null && node.left !== null) {\n\n  //     grandChildNode = searchLeftMostNode(node.right);\n  //     const pNode = searchParentNode(node.data);\n  //     pNode[pos] = node.right;\n  //     node.right = null;\n\n  //     if (parentNode === undefined) {\n  //       const newNode = Node(grandChildNode.data, node.left, node.right);\n  //       treeRoot = newNode;\n  //     } else {\n  //       parentNode[pos] = grandChildNode;\n  //       grandChildNode.left = node.left;\n  //       grandChildNode.right = node.right;\n  //     }\n  //   }\n  // };\n\n  const toString = (tree = treeRoot) => {\n    (0,_helpFunction__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(tree);\n  };\n\n  // prettyPrint(treeRoot);\n  // console.log(treeRoot);\n  return { find, insert, deleteNode, toString };\n};\n\nconst array = [\n  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,\n  23, 24, 25, 26, 27, 28, 29, 30, 31,\n];\nconst trr = Tree(array);\n// trr.find(0);\n// trr.insert(3);\n// trr.insert(11);\ntrr.deleteNode(16);\ntrr.deleteNode(16);\n\ntrr.deleteNode(22);\ntrr.deleteNode(20);\ntrr.deleteNode(28);\ntrr.toString();\n\ntrr.deleteNode(18);\n\ntrr.toString();\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/tree.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./binaryTree/tree.js");
/******/ 	
/******/ })()
;