// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.


function dfs(root){
    if (root === null) return [];

    let leftArr = dfs(root.left)
    let rightArr = dfs(root.right)

    return [root.val, ...leftArr, ...rightArr]
}

module.exports = { dfs };
