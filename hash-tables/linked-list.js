'use strict';

class Node {

    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {

        this.head = null;
    }
    addNode(val) {

        let node = new Node(val)
        if (!this.head) {
            this.head = val;
            return;
        }
        let current = this.head;
        while (this.next) {
            current = current.next
        }
        current.next = node;
    }
}


module.exports = LinkedList;