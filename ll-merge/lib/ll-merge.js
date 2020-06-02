'use strict';

class Node {
    constructor(value) {
        this.name = value;
        this.next = null;
    }
}

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
    mergeLists(list1, list2) {

        let current1 = list1.head;
        let current2 = list2.head;
        while (current1 && current2) {
            this.append(current1.name);
            this.append(current2.name);
            current1 = current1.next;
            current2 = current2.next;
        }
        return this;
    }
}

module.exports = LinkedList;