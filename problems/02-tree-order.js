// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.


const {TreeNode} = require('./01-tree-node.js')
function preOrderArray(root) {
    // Your code here
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root) {
    if (root === null) return [];
    // if (root === undefined) return []

    let leftArr = inOrderArray(root.left)
    let rightArr = inOrderArray(root.right)
    console.log(leftArr, rightArr)

    return [...leftArr, root.val, ...rightArr]
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root) {

    if (root === null) return [];
    // if (root === undefined) return []

    let leftArr = postOrderArray(root.left)
    let rightArr = postOrderArray(root.right)

    return [...leftArr, ...rightArr, root.val];
}
let root = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(inOrderArray(root))
// //[ 'd', 'b', 'e', 'a', 'c', 'f' ]

module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
