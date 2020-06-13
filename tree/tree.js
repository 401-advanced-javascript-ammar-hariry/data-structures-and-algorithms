'use strict';

class Node {
    constructor(name, left = null, right = null) {
        this.name = name;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let treeResults = [];
        let _walk = (node) => {
            //   console.log('this is node', node)
            treeResults.push(node.name);
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        }
        _walk(this.root);
        return treeResults;
    }
    postOrder() {
        let treeResults = [];
        let _walk = (node) => {

            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            treeResults.push(node.name);
        }
        _walk(this.root);
        return treeResults;
    }
    inOrder() {
        let treeResults = [];
        let _walk = (node) => {

            if (node.left) _walk(node.left);
            treeResults.push(node.name);
            if (node.right) _walk(node.right);
        }
        _walk(this.root);
        return treeResults;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(value) {
        let treeValue = new Node(value);
        if (this.root === null) {
            this.root = treeValue;
            return this.root;
        }
        let _walk = (node) => {
            if (node.name > value) {
                if (node.left) {
                    _walk(node.left);
                } else {
                    node.left = treeValue;
                }
            } else if (node.name < value) {
                if (node.right) {
                    _walk(node.right);
                } else {
                    node.right = treeValue;
                }
            }
        }
        _walk(this.root);
        return this.root;
    }
    contain(val) {
        let treeResults = [];
        let _walk = (node) => {
            if (node.name === val) return treeResults.push(val);
            if (node.name > val) {
                if (node.left) {
                    _walk(node.left);
                }
            } else if (node.name < val) {
                if (node.right) {
                    _walk(node.right);
                }
            }
        }
        _walk(this.root);

        //         console.log(treeResults[0]);
        if (treeResults[0]) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = { Node, BinaryTree, BinarySearchTree };