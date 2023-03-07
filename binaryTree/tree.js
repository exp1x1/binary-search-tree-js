import { Node } from "./node";
import { prettyPrint } from "./helpFunction";
import { alreadyExist, doNotExist } from "./error";

const Tree = (rawArr) => {
  let treeRoot;
  rawArr = [...new Set(rawArr)];

  const buildTree = (arrr, start, end) => {
    if (start > end) return null;
    const mid = Math.round((start + end) / 2);

    const root = Node(arrr[mid]);

    root.left = buildTree(arrr, start, mid - 1);
    root.right = buildTree(arrr, mid + 1, end);

    return root;
  };
  treeRoot = buildTree(rawArr, 0, rawArr.length - 1);

  const find = (value, binTree = treeRoot) => {
    let node = binTree;

    while (node !== null) {
      if (node.data === value) {
        return node;
      } else if (value < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  };

  const insert = (value, binTree = treeRoot) => {
    if (find(value)) {
      alreadyExist(value);
      return;
    }

    let node = binTree;
    const root = Node(value);

    if (value < node.data) {
      if (node.left === null) {
        node.left = root;
        return;
      }

      insert(value, node.left);
    } else {
      if (node.right === null) {
        node.right = root;
        return;
      }

      insert(value, node.right);
    }
  };

  const searchLeftMostNode = (node) => {
    let root = node;

    if (root.left === null) return root;
    root = searchLeftMostNode(root.left);

    return root;
  };

  const searchParentNode = (value) => {
    let node = treeRoot;
    let parentNode;

    while (node.data !== value) {
      parentNode = node;
      if (value < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return parentNode;
  };

  // const deleteNode = (value, binTree = treeRoot) => {
  //   let node = treeRoot;
  //   if (!find(value)) {
  //     doNotExist(value);
  //     return;
  //   }
  //   let parentNode;
  //   let grandChildNode;
  //   let pos;
  //   while (node.data !== value) {
  //     parentNode = node;
  //     if (value < node.data) {
  //       node = node.left;
  //       pos = "left";
  //       grandChildNode = node.left;
  //     } else {
  //       node = node.right;
  //       pos = "right";
  //       grandChildNode = node.right;
  //     }
  //   }
  //   // console.log(parentNode);

  //   if (node.left === null && node.right === null) {
  //     parentNode[pos] = null;
  //   }
  //   if (
  //     (node.left === null && node.right !== null) ||
  //     (node.right === null && node.left !== null)
  //   ) {
  //     console.log(node);
  //     if (node.left !== null) {
  //       parentNode["left"] = node.left;
  //     } else {
  //       parentNode["right"] = node.right;
  //     }
  //   }
  //   if (node.right !== null && node.left !== null) {

  //     grandChildNode = searchLeftMostNode(node.right);
  //     const pNode = searchParentNode(node.data);
  //     pNode[pos] = node.right;
  //     node.right = null;

  //     if (parentNode === undefined) {
  //       const newNode = Node(grandChildNode.data, node.left, node.right);
  //       treeRoot = newNode;
  //     } else {
  //       parentNode[pos] = grandChildNode;
  //       grandChildNode.left = node.left;
  //       grandChildNode.right = node.right;
  //     }
  //   }
  // };

  const toString = (tree = treeRoot) => {
    prettyPrint(tree);
  };

  // prettyPrint(treeRoot);
  // console.log(treeRoot);
  return { find, insert, deleteNode, toString };
};

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const trr = Tree(array);
// trr.find(0);
// trr.insert(3);
// trr.insert(11);
trr.deleteNode(16);
trr.deleteNode(16);

trr.deleteNode(22);
trr.deleteNode(20);
trr.deleteNode(28);
trr.toString();

trr.deleteNode(18);

trr.toString();
