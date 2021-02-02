// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

function buildTree(preorder, inorder) {
    if (!preorder.length && !inorder.length) return null;

    let splitpoint = inorder.indexOf(preorder[0]);
    let leftInorder = inorder.slice(0, splitpoint);
    let rightInorder = inorder.slice(splitpoint + 1);
    preorder.shift();
    let leftPreorder = preorder.slice(0, leftInorder.length);
    let rightPreorder = preorder.slice(leftInorder.length);

    return { "val": inorder[splitpoint], "left": buildTree(leftPreorder, leftInorder), "right": buildTree(rightPreorder, rightInorder) }
}

function buildTree(preorder, inorder) {
    function helper(start,end){
        if (start > end){
            return null
        }
        let rootVal = preorder.shift()
        let index = inorder_index_map[rootVal]
        let root = new TreeNode(rootVal)
        root.left = helper(start, index - 1)
        root.right = helper(index + 1, end)
        return root
    }
    //the object will store num:idx so we can have O(1)
    // lookup when we are getting the index of the root
    // in the inorder array
    inorder_index_map = {}
    for (let i = 0; i < inorder.length; i++){
        inorder_index_map[inorder[i]] = i
    }
    return helper(0,inorder.length - 1)
}
