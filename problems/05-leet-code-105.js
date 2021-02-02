// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

function buildTree(preorder, inorder) {

    //obj = {val: preorder[0]
        //   left: null
        //   right: null}
    //

    let splitpoint = inorder.indexOf(preorder[0]);
    let leftInorder = inorder.slice(0, splitpoint);
    let rightInorder = inorder.slice(splitpoint+1, inorder.length);

    return { "val": inorder(splitpoint), "left": buildTree(preorder, leftInorder), "right": buildTree(preorder, rightInorder) }
}

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

preorder2 = [20, 10, 12, 34, 28, 49, 36]
inorder2 = [10, 12, 20, 28, 34, 36, 49]

preorder3 = [12, 15, 5, 24, 8, 17, 10];
inorder3 = [5, 24, 15, 12, 17, 8, 10]
//compare preorder2[i] to inorder2[i+1] = same
    // preorder2[i+1] < preorder2[i]
