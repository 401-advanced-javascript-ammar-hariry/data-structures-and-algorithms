'usr strict';

const Node = require('./node')


class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode.next) {
            var previousNode = currentNode.next;
            // console.log('this is the nexxt node---->',previousNode);
            if (currentNode.next.name === value) {
                // console.log('this is the nexxt node value---->',currentNode.next)
                currentNode.next = node;
            }
            currentNode = currentNode.next;
            // console.log('this is the nexxt node 2---->',currentNode.next)
        }
        currentNode.next = previousNode;
        // console.log('this is the nexxt node 3---->',currentNode.next)
        return this;
    }

    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode.next) {
            var previousNode = currentNode.next;
            // console.log('this is the nexxt node---->',previousNode);
            if (currentNode.name === value) {
                // console.log('this is the nexxt node value---->',currentNode.next)
                currentNode.next = node;
            }
            currentNode = currentNode.next;
            // console.log('this is the nexxt node 2---->',currentNode.next)
        }
        currentNode.next = previousNode;
        // console.log('this is the nexxt node 3---->',currentNode.next)
        return this;
    }
    include(value) {
        let current = this.head;
        while (current.next) {
            if (current.next.name === value) {
                return true;
            } else {
                current = current.next;
                return false;
            }
        }
    }
    toString() {
        let allNodes = [];
        let current = this.head;
        while (current.next) {
            allNodes.push(current.name);
            current = current.next;
        }
        allNodes.push(current.name);
        allNodes.push('null');

        let arrowNext = allNodes.join(' -> ');
        return arrowNext;
    }

}
// let list = new LinkedList();
// list.append(5);
// list.append(7);
// list.append(6);
// list.append(8);
// list.insertBefore(7, 4);
// list.insertAfter(6, 9);
// list.toString();
module.exports = LinkedList;