'use strict';


module.exports = function fizzBuzzTree(tree) {
    let _walk = (node) => {
        if (node.name % 3 === 0 && node.name % 5 === 0) {
            node.name = 'fizzbuzz';
        } else if (node.name % 3 === 0) {
            node.name = 'fizz';
        } else if (node.name % 5 === 0) {
            node.name = 'buzz';
        } else {
            node.name = `${node.value}`;
        }
        //preorder trivals
        if (node.left) _walk(node.left);
        if (node.right) _walk(node.right);
    }
    _walk(tree);
    return tree;
}

// another solution using another trivals method that return tree values to array elements and deal simply with array