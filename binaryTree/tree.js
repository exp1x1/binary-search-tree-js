import { Node } from "./node";
import { prettyPrint } from "./helpFunction";
import { alreadyExist, doNotExist } from "./error";

export const buildTree = (arrr, start = 0, end = arrr.length - 1) => {
  if (start > end) return null;
  const mid = Math.round((start + end) / 2);

  const root = Node(arrr[mid]);

  root.left = buildTree(arrr, start, mid - 1);
  root.right = buildTree(arrr, mid + 1, end);

  return root;
};

export const Tree = (rawArr) => {
  let treeRoot;
  const Arr = [...new Set(rawArr)];

  treeRoot = buildTree(Arr);

  function find(value, binTree = treeRoot) {
    let node = binTree;

    while (node !== null) {
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  }

  function insert(value, binTree = treeRoot) {
    if (find(value)) {
      alreadyExist(value);
      return;
    }

    const node = binTree;
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
  }

  function findNextBiggestNode(node) {
    let root = node;

    if (root.left === null) return root;
    root = findNextBiggestNode(root.left);

    return root;
  }


  function deleteNodeRec(tree, value) {
    if (tree == null) return tree;

    if (value < tree.data) {
      tree.left = deleteNodeRec(tree.left, value);
    } else if (value > tree.data) {
      tree.right = deleteNodeRec(tree.right, value);
    } else {
      if (tree.left == null) {
        return tree.right;
      }
      if (tree.right == null) {
        return tree.left;
      }
      tree.data = findNextBiggestNode(tree.right).data;
      tree.right = deleteNodeRec(tree.right, tree.data);
    }

    return tree;
  }

  function deleteNode(nodeValue) {
    treeRoot = deleteNodeRec(treeRoot, nodeValue);
  }

  function depthSearchRec(node, func, queue = [treeRoot]) {
    if (node == null) return;

    func(node.data);
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
    queue.shift();

    depthSearchRec(queue[0], func, queue);
  }

  function levelOrder(func) {
    depthSearchRec(treeRoot, func);
  }

  function inorder(func, node = treeRoot) {
    if (node == null) return;

    inorder(func, node.left);
    func(node.data);
    inorder(func, node.right);
  }

  function postorder(func, node = treeRoot) {
    if (node == null) return;

    postorder(func, node.left);
    postorder(func, node.right);
    func(node.data);
  }

  function preorder(func, node = treeRoot) {
    if (node == null) return;

    func(node.data);
    preorder(func, node.left);
    preorder(func, node.right);
  }

  function heightRec(node) {
    if (node == null) {
      return 0;
    }
    const leftHeight = heightRec(node.left);
    const rightHeight = heightRec(node.right);

    if (leftHeight < rightHeight) return rightHeight + 1;

    return leftHeight + 1;
  }

  function height(nodeValue) {
    const node = find(nodeValue);
    if (node == null) return doNotExist(nodeValue);
    return heightRec(node);
  }

  function depth(nodeValue) {
    let node = treeRoot;
    let num = 0;
    while (node !== null) {
      if (node.data === nodeValue) {
        return num;
      }
      if (nodeValue < node.data) {
        node = node.left;
        num += 1;
      } else {
        node = node.right;
        num += 1;
      }
    }
    return doNotExist(nodeValue);
  }

  function isBalancedRec(node = treeRoot) {
    if (node == null) return;
    const leftNode = node.left;
    const rightNode = node.right;

    if (leftNode == null || rightNode == null) return;

    const leftHeight = height(leftNode.data);
    const rightHeight = height(rightNode.data);

    if (isBalancedRec(leftNode) === false) {
      return false;
    }
    if (isBalancedRec(rightNode) === false) {
      return false;
    }

    if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {
      return false;
    }
    return true;
  }

  function isBalanced(tree = treeRoot) {
    return isBalancedRec(tree);
  }

  function reBalance(tree = treeRoot) {
    const arr = [];
    inorder((e) => {
      arr.push(e);
    }, tree);
    treeRoot = buildTree(arr);
  }

  function toString(tree = treeRoot) {
    prettyPrint(tree);
  }

  return {
    find,
    insert,
    deleteNode,
    levelOrder,
    inorder,
    preorder,
    postorder,
    height,
    depth,
    isBalanced,
    reBalance,
    toString,
  };
};
