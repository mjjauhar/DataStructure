function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// TRAVERSAL
// In Order traversal
const inorder = (root) => {
  const nodes = [];
  if (root) {
    inorder(root.left);
    nodes.push(root.val);
    inorder(root.right);
  }
  return nodes;
};

// Post Order traversal
const postorder = (root) => {
  const nodes = [];
  if (root) {
    postorder(root.left);
    postorder(root.right);
    nodes.push(root.val);
  }
  return nodes;
};

// Pre Order traversal
const preorder = (root) => {
  const nodes = [];
  if (root) {
    nodes.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  return nodes;
};

// IS VALID BINARY SEARCH TREE
const isValidBST = (root) => {
  const helper = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

// FIND MAX-DEPTH
const maxDept = (root) => {
  const calc = (node) => {
    if (!node) return 0;
    return Math.max(1 + calc(node.left), 1 + calc(node.right));
  };
  return calc(root);
};

// FIND LOWEST COMMON ANCESTOR BETWEEN TWO NODES
const lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  const isCommonPath = (node) => {
    if (!node) return false;
    var isLeft = isCommonPath(node.left);
    var isRight = isCommonPath(node.right);
    var isMid = node == p || node == q;
    if ((isMid && isLeft) || (isMid && isRight) || (isLeft && isRight)) {
      lca = node;
    }
    return isLeft || isRight || isMid;
  };
  isCommonPath(root);
  return lca;
};
