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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tree\": () => (/* binding */ Tree),\n/* harmony export */   \"buildTree\": () => (/* binding */ buildTree)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./binaryTree/node.js\");\n/* harmony import */ var _helpFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpFunction */ \"./binaryTree/helpFunction.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ \"./binaryTree/error.js\");\n\n\n\n\nconst buildTree = (arrr, start = 0, end = arrr.length - 1) => {\n  if (start > end) return null;\n  const mid = Math.round((start + end) / 2);\n\n  const root = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(arrr[mid]);\n\n  root.left = buildTree(arrr, start, mid - 1);\n  root.right = buildTree(arrr, mid + 1, end);\n\n  return root;\n};\n\nconst Tree = (rawArr) => {\n  let treeRoot;\n  const Arr = [...new Set(rawArr)];\n\n  treeRoot = buildTree(Arr);\n\n  function find(value, binTree = treeRoot) {\n    let node = binTree;\n\n    while (node !== null) {\n      if (node.data === value) {\n        return node;\n      }\n      if (value < node.data) {\n        node = node.left;\n      } else {\n        node = node.right;\n      }\n    }\n    return null;\n  }\n\n  function insert(value, binTree = treeRoot) {\n    if (find(value)) {\n      (0,_error__WEBPACK_IMPORTED_MODULE_2__.alreadyExist)(value);\n      return;\n    }\n\n    const node = binTree;\n    const root = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(value);\n\n    if (value < node.data) {\n      if (node.left === null) {\n        node.left = root;\n        return;\n      }\n\n      insert(value, node.left);\n    } else {\n      if (node.right === null) {\n        node.right = root;\n        return;\n      }\n\n      insert(value, node.right);\n    }\n  }\n\n  function findNextBiggestNode(node) {\n    let root = node;\n\n    if (root.left === null) return root;\n    root = findNextBiggestNode(root.left);\n\n    return root;\n  }\n\n\n  function deleteNodeRec(tree, value) {\n    if (tree == null) return tree;\n\n    if (value < tree.data) {\n      tree.left = deleteNodeRec(tree.left, value);\n    } else if (value > tree.data) {\n      tree.right = deleteNodeRec(tree.right, value);\n    } else {\n      if (tree.left == null) {\n        return tree.right;\n      }\n      if (tree.right == null) {\n        return tree.left;\n      }\n      tree.data = findNextBiggestNode(tree.right).data;\n      tree.right = deleteNodeRec(tree.right, tree.data);\n    }\n\n    return tree;\n  }\n\n  function deleteNode(nodeValue) {\n    treeRoot = deleteNodeRec(treeRoot, nodeValue);\n  }\n\n  function depthSearchRec(node, func, queue = [treeRoot]) {\n    if (node == null) return;\n\n    func(node.data);\n    if (node.left !== null) queue.push(node.left);\n    if (node.right !== null) queue.push(node.right);\n    queue.shift();\n\n    depthSearchRec(queue[0], func, queue);\n  }\n\n  function levelOrder(func) {\n    depthSearchRec(treeRoot, func);\n  }\n\n  function inorder(func, node = treeRoot) {\n    if (node == null) return;\n\n    inorder(func, node.left);\n    func(node.data);\n    inorder(func, node.right);\n  }\n\n  function postorder(func, node = treeRoot) {\n    if (node == null) return;\n\n    postorder(func, node.left);\n    postorder(func, node.right);\n    func(node.data);\n  }\n\n  function preorder(func, node = treeRoot) {\n    if (node == null) return;\n\n    func(node.data);\n    preorder(func, node.left);\n    preorder(func, node.right);\n  }\n\n  function heightRec(node) {\n    if (node == null) {\n      return 0;\n    }\n    const leftHeight = heightRec(node.left);\n    const rightHeight = heightRec(node.right);\n\n    if (leftHeight < rightHeight) return rightHeight + 1;\n\n    return leftHeight + 1;\n  }\n\n  function height(nodeValue) {\n    const node = find(nodeValue);\n    if (node == null) return (0,_error__WEBPACK_IMPORTED_MODULE_2__.doNotExist)(nodeValue);\n    return heightRec(node);\n  }\n\n  function depth(nodeValue) {\n    let node = treeRoot;\n    let num = 0;\n    while (node !== null) {\n      if (node.data === nodeValue) {\n        return num;\n      }\n      if (nodeValue < node.data) {\n        node = node.left;\n        num += 1;\n      } else {\n        node = node.right;\n        num += 1;\n      }\n    }\n    return (0,_error__WEBPACK_IMPORTED_MODULE_2__.doNotExist)(nodeValue);\n  }\n\n  function isBalancedRec(node = treeRoot) {\n    if (node == null) return;\n    const leftNode = node.left;\n    const rightNode = node.right;\n\n    if (leftNode == null || rightNode == null) return;\n\n    const leftHeight = height(leftNode.data);\n    const rightHeight = height(rightNode.data);\n\n    if (isBalancedRec(leftNode) === false) {\n      return false;\n    }\n    if (isBalancedRec(rightNode) === false) {\n      return false;\n    }\n\n    if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {\n      return false;\n    }\n    return true;\n  }\n\n  function isBalanced(tree = treeRoot) {\n    return isBalancedRec(tree);\n  }\n\n  function reBalance(tree = treeRoot) {\n    const arr = [];\n    inorder((e) => {\n      arr.push(e);\n    }, tree);\n    treeRoot = buildTree(arr);\n  }\n\n  function toString(tree = treeRoot) {\n    (0,_helpFunction__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(tree);\n  }\n\n  return {\n    find,\n    insert,\n    deleteNode,\n    levelOrder,\n    inorder,\n    preorder,\n    postorder,\n    height,\n    depth,\n    isBalanced,\n    reBalance,\n    toString,\n  };\n};\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/tree.js?");

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