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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergSort\": () => (/* binding */ mergSort),\n/* harmony export */   \"prettyPrint\": () => (/* binding */ prettyPrint),\n/* harmony export */   \"randomArrGen\": () => (/* binding */ randomArrGen)\n/* harmony export */ });\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\n\nconst comapreValue = (v1, v2) => {\n  if (v1 < v2) {\n    return 1;\n  }\n  if (v1 > v2) {\n    return 2;\n  }\n  if (v1 == v2) {\n    return 0;\n  }\n};\n\nconst merge = (left, right, arr = []) => {\n  const arrLen = left.length + right.length;\n\n  for (let i = 0; i < arrLen; i++) {\n    if (left.length === 0) {\n      arr.push(right.shift());\n      continue;\n    }\n    if (right.length === 0) {\n      arr.push(left.shift());\n      continue;\n    }\n\n    const comp = comapreValue(left[0], right[0]);\n    if (comp == 1) {\n      arr.push(left.shift());\n    }\n    if (comp == 2) {\n      arr.push(right.shift());\n    }\n    if (comp == 0) {\n      arr.push(left.shift());\n    }\n  }\n\n  return arr;\n};\n\nconst mergSort = (arr) => {\n  if (arr.length < 2) {\n    return arr;\n  }\n  const fh = mergSort(arr.slice(0, Math.ceil(arr.length / 2)));\n  const sh = mergSort(arr.slice(Math.ceil(arr.length / 2)));\n  // console.log(`first:${fh} , second:${sh}`);\n  return merge(fh, sh);\n};\n\nconst randomArrGen = (num) => {\n  const arr = [];\n  while (arr.length < num) {\n    const randomNum = Math.floor(Math.random() * num);\n    if (!arr.includes(randomNum)) {\n      arr.push(randomNum);\n    }\n  }\n  return arr;\n};\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/helpFunction.js?");

/***/ }),

/***/ "./binaryTree/index.js":
/*!*****************************!*\
  !*** ./binaryTree/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./binaryTree/tree.js\");\n/* harmony import */ var _helpFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpFunction */ \"./binaryTree/helpFunction.js\");\n\n\n\nconst A = (0,_helpFunction__WEBPACK_IMPORTED_MODULE_1__.randomArrGen)(200);\n\nconst tree = (0,_tree__WEBPACK_IMPORTED_MODULE_0__.Tree)(A);\ntree.toString();\n\n// output\n// │                       ┌── 199\n// │                       │   └── 198\n// │                   ┌── 197\n// │                   │   └── 196\n// │                   │       └── 195\n// │               ┌── 194\n// │               │   │   ┌── 193\n// │               │   │   │   └── 192\n// │               │   └── 191\n// │               │       └── 190\n// │               │           └── 189\n// │           ┌── 188\n// │           │   │       ┌── 187\n// │           │   │       │   └── 186\n// │           │   │   ┌── 185\n// │           │   │   │   └── 184\n// │           │   │   │       └── 183\n// │           │   └── 182\n// │           │       │   ┌── 181\n// │           │       │   │   └── 180\n// │           │       └── 179\n// │           │           │   ┌── 178\n// │           │           └── 177\n// │           │               └── 176\n// │       ┌── 175\n// │       │   │           ┌── 174\n// │       │   │           │   └── 173\n// │       │   │       ┌── 172\n// │       │   │       │   └── 171\n// │       │   │       │       └── 170\n// │       │   │   ┌── 169\n// │       │   │   │   │   ┌── 168\n// │       │   │   │   │   │   └── 167\n// │       │   │   │   └── 166\n// │       │   │   │       └── 165\n// │       │   │   │           └── 164\n// │       │   └── 163\n// │       │       │       ┌── 162\n// │       │       │       │   └── 161\n// │       │       │   ┌── 160\n// │       │       │   │   └── 159\n// │       │       │   │       └── 158\n// │       │       └── 157\n// │       │           │   ┌── 156\n// │       │           │   │   └── 155\n// │       │           └── 154\n// │       │               │   ┌── 153\n// │       │               └── 152\n// │       │                   └── 151\n// │   ┌── 150\n// │   │   │               ┌── 149\n// │   │   │               │   └── 148\n// │   │   │           ┌── 147\n// │   │   │           │   └── 146\n// │   │   │           │       └── 145\n// │   │   │       ┌── 144\n// │   │   │       │   │   ┌── 143\n// │   │   │       │   │   │   └── 142\n// │   │   │       │   └── 141\n// │   │   │       │       └── 140\n// │   │   │       │           └── 139\n// │   │   │   ┌── 138\n// │   │   │   │   │       ┌── 137\n// │   │   │   │   │       │   └── 136\n// │   │   │   │   │   ┌── 135\n// │   │   │   │   │   │   └── 134\n// │   │   │   │   │   │       └── 133\n// │   │   │   │   └── 132\n// │   │   │   │       │   ┌── 131\n// │   │   │   │       │   │   └── 130\n// │   │   │   │       └── 129\n// │   │   │   │           │   ┌── 128\n// │   │   │   │           └── 127\n// │   │   │   │               └── 126\n// │   │   └── 125\n// │   │       │           ┌── 124\n// │   │       │           │   └── 123\n// │   │       │       ┌── 122\n// │   │       │       │   └── 121\n// │   │       │       │       └── 120\n// │   │       │   ┌── 119\n// │   │       │   │   │   ┌── 118\n// │   │       │   │   │   │   └── 117\n// │   │       │   │   └── 116\n// │   │       │   │       └── 115\n// │   │       │   │           └── 114\n// │   │       └── 113\n// │   │           │       ┌── 112\n// │   │           │       │   └── 111\n// │   │           │   ┌── 110\n// │   │           │   │   └── 109\n// │   │           │   │       └── 108\n// │   │           └── 107\n// │   │               │   ┌── 106\n// │   │               │   │   └── 105\n// │   │               └── 104\n// │   │                   │   ┌── 103\n// │   │                   └── 102\n// │   │                       └── 101\n// └── 100\n//     │                   ┌── 99\n//     │                   │   └── 98\n//     │               ┌── 97\n//     │               │   └── 96\n//     │               │       └── 95\n//     │           ┌── 94\n//     │           │   │   ┌── 93\n//     │           │   │   │   └── 92\n//     │           │   └── 91\n//     │           │       └── 90\n//     │           │           └── 89\n//     │       ┌── 88\n//     │       │   │       ┌── 87\n//     │       │   │       │   └── 86\n//     │       │   │   ┌── 85\n//     │       │   │   │   └── 84\n//     │       │   │   │       └── 83\n//     │       │   └── 82\n//     │       │       │   ┌── 81\n//     │       │       │   │   └── 80\n//     │       │       └── 79\n//     │       │           │   ┌── 78\n//     │       │           └── 77\n//     │       │               └── 76\n//     │   ┌── 75\n//     │   │   │           ┌── 74\n//     │   │   │           │   └── 73\n//     │   │   │       ┌── 72\n//     │   │   │       │   └── 71\n//     │   │   │       │       └── 70\n//     │   │   │   ┌── 69\n//     │   │   │   │   │   ┌── 68\n//     │   │   │   │   │   │   └── 67\n//     │   │   │   │   └── 66\n//     │   │   │   │       └── 65\n//     │   │   │   │           └── 64\n//     │   │   └── 63\n//     │   │       │       ┌── 62\n//     │   │       │       │   └── 61\n//     │   │       │   ┌── 60\n//     │   │       │   │   └── 59\n//     │   │       │   │       └── 58\n//     │   │       └── 57\n//     │   │           │   ┌── 56\n//     │   │           │   │   └── 55\n//     │   │           └── 54\n//     │   │               │   ┌── 53\n//     │   │               └── 52\n//     │   │                   └── 51\n//     └── 50\n//         │               ┌── 49\n//         │               │   └── 48\n//         │           ┌── 47\n//         │           │   └── 46\n//         │           │       └── 45\n//         │       ┌── 44\n//         │       │   │   ┌── 43\n//         │       │   │   │   └── 42\n//         │       │   └── 41\n//         │       │       └── 40\n//         │       │           └── 39\n//         │   ┌── 38\n//         │   │   │       ┌── 37\n//         │   │   │       │   └── 36\n//         │   │   │   ┌── 35\n//         │   │   │   │   └── 34\n//         │   │   │   │       └── 33\n//         │   │   └── 32\n//         │   │       │   ┌── 31\n//         │   │       │   │   └── 30\n//         │   │       └── 29\n//         │   │           │   ┌── 28\n//         │   │           └── 27\n//         │   │               └── 26\n//         └── 25\n//             │           ┌── 24\n//             │           │   └── 23\n//             │       ┌── 22\n//             │       │   └── 21\n//             │       │       └── 20\n//             │   ┌── 19\n//             │   │   │   ┌── 18\n//             │   │   │   │   └── 17\n//             │   │   └── 16\n//             │   │       │   ┌── 15\n//             │   │       └── 14\n//             │   │           └── 13\n//             └── 12\n//                 │       ┌── 11\n//                 │       │   └── 10\n//                 │   ┌── 9\n//                 │   │   └── 8\n//                 │   │       └── 7\n//                 └── 6\n//                     │   ┌── 5\n//                     │   │   └── 4\n//                     └── 3\n//                         │   ┌── 2\n//                         └── 1\n//                             └── 0\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/index.js?");

/***/ }),

/***/ "./binaryTree/tree.js":
/*!****************************!*\
  !*** ./binaryTree/tree.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _helpFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpFunction */ \"./binaryTree/helpFunction.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ \"./binaryTree/error.js\");\n\n\n\nconst Node = (data = null, left = null, right = null) => ({\n  data,\n  left,\n  right,\n});\n\nconst buildTree = (arrr, start = 0, end = arrr.length - 1) => {\n  if (start > end) return null;\n  const mid = Math.round((start + end) / 2);\n\n  const root = Node(arrr[mid]);\n\n  root.left = buildTree(arrr, start, mid - 1);\n  root.right = buildTree(arrr, mid + 1, end);\n\n  return root;\n};\n\n// eslint-disable-next-line import/prefer-default-export\nconst Tree = (rawArr) => {\n  let treeRoot;\n\n  let Arr = [...new Set(rawArr)];\n  Arr = (0,_helpFunction__WEBPACK_IMPORTED_MODULE_0__.mergSort)(Arr);\n\n  treeRoot = buildTree(Arr);\n\n  function find(value, binTree = treeRoot) {\n    let node = binTree;\n\n    while (node !== null) {\n      if (node.data === value) {\n        return node;\n      }\n      if (value < node.data) {\n        node = node.left;\n      } else {\n        node = node.right;\n      }\n    }\n    return null;\n  }\n\n  function insert(value, binTree = treeRoot) {\n    if (find(value)) {\n      (0,_error__WEBPACK_IMPORTED_MODULE_1__.alreadyExist)(value);\n      return;\n    }\n\n    const node = binTree;\n    const root = Node(value);\n\n    if (value < node.data) {\n      if (node.left === null) {\n        node.left = root;\n        return;\n      }\n\n      insert(value, node.left);\n    } else {\n      if (node.right === null) {\n        node.right = root;\n        return;\n      }\n\n      insert(value, node.right);\n    }\n  }\n\n  function findNextBiggestNode(node) {\n    let root = node;\n\n    if (root.left === null) return root;\n    root = findNextBiggestNode(root.left);\n\n    return root;\n  }\n\n  function deleteNodeRec(tree, value) {\n    if (tree == null) return tree;\n\n    if (value < tree.data) {\n      tree.left = deleteNodeRec(tree.left, value);\n    } else if (value > tree.data) {\n      tree.right = deleteNodeRec(tree.right, value);\n    } else {\n      if (tree.left == null) {\n        return tree.right;\n      }\n      if (tree.right == null) {\n        return tree.left;\n      }\n      tree.data = findNextBiggestNode(tree.right).data;\n      tree.right = deleteNodeRec(tree.right, tree.data);\n    }\n\n    return tree;\n  }\n\n  function deleteNode(nodeValue) {\n    treeRoot = deleteNodeRec(treeRoot, nodeValue);\n  }\n\n  function depthSearchRec(node, func, queue = [treeRoot]) {\n    if (node == null) return;\n\n    func(node.data);\n    if (node.left !== null) queue.push(node.left);\n    if (node.right !== null) queue.push(node.right);\n    queue.shift();\n\n    depthSearchRec(queue[0], func, queue);\n  }\n\n  function levelOrder(func) {\n    depthSearchRec(treeRoot, func);\n  }\n\n  function inorder(func, node = treeRoot) {\n    if (node == null) return;\n\n    inorder(func, node.left);\n    func(node.data);\n    inorder(func, node.right);\n  }\n\n  function postorder(func, node = treeRoot) {\n    if (node == null) return;\n\n    postorder(func, node.left);\n    postorder(func, node.right);\n    func(node.data);\n  }\n\n  function preorder(func, node = treeRoot) {\n    if (node == null) return;\n\n    func(node.data);\n    preorder(func, node.left);\n    preorder(func, node.right);\n  }\n\n  function heightRec(node) {\n    if (node == null) {\n      return 0;\n    }\n    const leftHeight = heightRec(node.left);\n    const rightHeight = heightRec(node.right);\n\n    if (leftHeight < rightHeight) return rightHeight + 1;\n\n    return leftHeight + 1;\n  }\n\n  function height(nodeValue) {\n    const node = find(nodeValue);\n    if (node == null) return (0,_error__WEBPACK_IMPORTED_MODULE_1__.doNotExist)(nodeValue);\n    return heightRec(node);\n  }\n\n  function depth(nodeValue) {\n    let node = treeRoot;\n    let num = 0;\n    while (node !== null) {\n      if (node.data === nodeValue) {\n        return num;\n      }\n      if (nodeValue < node.data) {\n        node = node.left;\n        num += 1;\n      } else {\n        node = node.right;\n        num += 1;\n      }\n    }\n    return (0,_error__WEBPACK_IMPORTED_MODULE_1__.doNotExist)(nodeValue);\n  }\n\n  function isBalancedRec(node = treeRoot) {\n    if (node == null) return;\n    const leftNode = node.left;\n    const rightNode = node.right;\n\n    if (leftNode == null || rightNode == null) return;\n\n    const leftHeight = height(leftNode.data);\n    const rightHeight = height(rightNode.data);\n\n    if (isBalancedRec(leftNode) === false) {\n      return false;\n    }\n    if (isBalancedRec(rightNode) === false) {\n      return false;\n    }\n\n    if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {\n      return false;\n    }\n    return true;\n  }\n\n  function isBalanced(tree = treeRoot) {\n    return isBalancedRec(tree);\n  }\n\n  function reBalance(tree = treeRoot) {\n    const arr = [];\n    inorder((e) => {\n      arr.push(e);\n    }, tree);\n    treeRoot = buildTree(arr);\n  }\n\n  function toString(tree = treeRoot) {\n    (0,_helpFunction__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(tree);\n  }\n\n  return {\n    find,\n    insert,\n    deleteNode,\n    levelOrder,\n    inorder,\n    preorder,\n    postorder,\n    height,\n    depth,\n    isBalanced,\n    reBalance,\n    toString,\n  };\n};\n\n\n//# sourceURL=webpack://binary-search-tree/./binaryTree/tree.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./binaryTree/index.js");
/******/ 	
/******/ })()
;