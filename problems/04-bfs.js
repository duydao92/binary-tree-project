// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.

function bfs(root, result=[], queue=[root]){
    // initialize [] starting at root;
    // shift the parent from queue []
        // push that shift into result array
    // push in the children into queue[]

    //loop that with recursion until [] is empty

    if(!queue.length) return result;
    if (root === null) return [];

    let currRoot = root;
    const val = queue[0].val;
    queue.shift()
    result.push(val);

    if(currRoot.left){
        queue.push(currRoot.left);
    }
    if(currRoot.right){
        queue.push(currRoot.right);
    }
    return bfs(queue[0], result, queue);
}

module.exports = { bfs };
