// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.

function bfs(root, result=[], queue=[root.val]){
    // initialize [] starting at root;
    // shift the parent from queue []
        // push that shift into result array
    // push in the children into queue[]

    //loop that with recursion until [] is empty

    if(!queue.length) return;

    let currRoot = root;

    result.push(queue.shift());

    if(currRoot.left){
        queue.push(currRoot.left.val);
    }
    if(currRoot.right){
        queue.push(currRoot.right.val);
    }
    return bfs(currRoot, result, queue);

}

module.exports = { bfs };
