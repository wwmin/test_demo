/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  A;
  let result = true;
  let isLarge = A[A.length - 1] - A[0];
  if (isLarge === 0) return A.every(p => p === A[0]);
  let s = isLarge > 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (s) {
      if (A[i + 1] - A[i] >= 0) {
        continue;
      } else {
        result = false;
        break;
      }
    } else {
      if (A[i + 1] - A[i] <= 0) {
        continue;
      } else {
        result = false;
        break;
      }
    }
  }
  return result;
};

let A = [1, 2, 2, 3];
// console.log(isMonotonic(A));

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
  let a = Array.from(root);
  let r = a.filter(p => p !== null).sort((a, b) => a - b > 0);
  let s = r.join(',null,').split(',').map(p => p === 'null' ? null : Number(p));
  return s;
};

let root = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9];

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left || null;
  this.right = right || null;
  return val;
}

let nodeList = [];

function TreeNodeToArray(treeNode) {
  nodeList.push(treeNode.val);
  if (treeNode.left !== undefined && treeNode.left !== null) {
    TreeNodeToArray(treeNode.left);
  }
  if (treeNode.right !== undefined && treeNode.right !== null) {
    TreeNodeToArray(treeNode.right);
  }
}

let treeNode = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1
      }
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 6,
    right: {
      val: 8,
      left: {
        val: 7
      },
      right: {
        val: 9
      }
    }
  }
}
// 
// TreeNodeToArray(treeNode);
// console.log(nodeList);

// console.log(increasingBST(root));


function treeToList(treeNodes, opt) {

  if (!opt) {
    opt = {};
    opt.key = "id";
    opt.parent = "pid";
    opt.children = "children";
  }


  var NodeList = [];


  function appendChildren(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      //如果没有上层节点那么就是根节点
      if (node.parentNode == null) {
        node.Level = 0;
        node[opt.parent] = 0;
      }
      //判断是否有子节点
      if (node[opt.children] && node[opt.children].length > 0) {
        //所有子节点
        for (var k = 0; k < node.children.length; k++) {
          node[opt.children][k][opt.parent] = node[opt.parent];
          node[opt.children][k].Level = node.Level + 1;
          node[opt.children][k].parentNode = node;
        }
        appendChildren(node.children);
      }
      if (node.hasOwnProperty("parentNode"))
        delete node.parentNode;
      if (node.hasOwnProperty(opt.children))
        delete node[opt.children];
      NodeList.push(node);
    }
  }
  appendChildren(treeNodes);
  return NodeList;
}


var TreeNodes = [{
  "id": 1,
  "parent": 0,
  "children": [{
    "id": 2,
    "parent": 1
  }]
}];

var treeNodeList = treeToList(TreeNodes, {
  key: "id",
  parent: "pid",
  children: "children"
});
// console.log(JSON.stringify(treeNodeList));


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let stake = [];
  let list = [];
  while (true) {
    if (root != null) {
      stake.push(root);
      root = root.left;
    } else {
      if (stake.length === 0) {
        return list;
      }
      root = stake.pop();
      list.push(root.val);
      root = root.right;
    }
  }
};
console.log(inorderTraversal(treeNode));