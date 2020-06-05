'use srtrict';
class Node {
    constructor(node) {
        this.node = node;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }
    push(val) {

        let newNode = new Node(val);
        if (this.top === null) {
            this.top = newNode;
            //   console.log('this is the top first go', this.top);
        } else {
            newNode.next = this.top;
            this.top = newNode;
            //   console.log('this is the top', newNode);
        }
    }
    pop() {

        if (this.top != null) {
            this.top = this.top.next;
            return this.top;
        } else {
            return null;
        }
    }
    peek() {

        return this.top;
    }

    isEmpty() {

        if (this.top === null) {
            return true;
        } else {
            return false;
        }
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (this.front === null) {
            this.front = newNode;
            this.back = newNode;
            // newNode.next=  this.back 

        } else {
            //  console.log(this.back)
            //  console.log(thos.back.next)
            this.back.next = newNode;
            this.back = newNode;
            //   console.log(this)
            return this;
        }
    }
    dequeue() {
        if (this.front === null) {
            this.back = null;
            return null;
        } else {
            this.front = this.front.next;
            return this;
        }
    }
    peek() {
        return this.front;
    }
    isEmpty() {
        if (this.front === null) {
            return true;
        } else {
            return false;
        }
    }
}

// let stack = new Stack();
// stack.push(5);
// stack.push(4);
// stack.push(1);
// stack.push(9);
// stack.pop();
// console.log(stack)
// let queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.peek()
// queue.isEmpty()
// queue.dequeue();

module.exports = { Stack, Queue };