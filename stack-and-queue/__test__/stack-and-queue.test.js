'use strict';

const stackAndQueue = require('../lib/stack-and-queue');

let stack = new stackAndQueue.Stack();
let queue = new stackAndQueue.Queue();

describe('Stack', () => {
    it('create an empty stack', () => {
        expect(stack.top).toBeNull;
    });
    it('push() Can successfully push onto a stack', () => {
        stack.push(5);
        stack.push(2);
        stack.push(6);
        stack.push(7);
        stack.push(1);
        expect(stack.top.node).toEqual(1);
    });
    it('pop() Can successfully pop off the stack', () => {
        stack.push(5);
        stack.push(2);
        stack.push(6);
        stack.push(7);
        stack.push(1);
        stack.pop();
        expect(stack.top.node).toEqual(7);
    });
    it('pop() Can successfully pop off the stack', () => {
        stack.push(5);
        stack.push(2);
        stack.push(6);
        stack.push(7);
        stack.push(1);
        stack.pop();
        expect(stack.top.node).toEqual(7);
        stack.pop();
        expect(stack.top.node).toEqual(6);
        stack.pop();
        expect(stack.top.node).toEqual(2);
        stack.pop();
        expect(stack.top.node).toEqual(5);
        stack.pop();
        expect(stack.top).toBeNull;
    });
    it('peek() Can successfully peek the top item on the stack', () => {
        stack.push(5);
        stack.push(2);
        stack.push(6);
        stack.push(7);
        stack.push(1);
        expect(stack.peek()).toEqual(stack.top);
    });
    it('isEmpty() Can successfully instantiate an empty stack', () => {
        expect(stack.isEmpty()).toBeTruthy;
    });
    it('isEmpty() can check if the stack not empty', () => {
        stack.push(5);
        stack.push(2);
        stack.push(6);
        stack.push(7);
        stack.push(1);
        expect(stack.isEmpty()).toBeFalse;
    });
});


describe('Stack', () => {
    it('create an empty stack', () => {
        expect(queue.front).toBeNull;
    });
    it('enqueue() Can successfully enqueue onto a queue', () => {
        queue.enqueue(5);
        queue.enqueue(2);
        queue.enqueue(6);
        queue.enqueue(7);
        queue.enqueue(1);
        expect(queue.front.node).toEqual(5);
    });
    it('dequeue() Can successfully dequeue off the queue', () => {
        queue.dequeue();
        expect(queue.front.node).toEqual(2);
        queue.dequeue();
        expect(queue.front.node).toEqual(6);
        queue.dequeue();
        expect(queue.front.node).toEqual(7);
        queue.dequeue();
        expect(queue.front).toBeNull;
    });
    it('peek() Can successfully peek the front item on the queue', () => {
        queue.enqueue(5);
        queue.enqueue(2);
        queue.enqueue(6);
        queue.enqueue(7);
        queue.enqueue(1);
        expect(queue.peek()).toEqual(queue.front);
    });
    it('isEmpty() Can successfully instantiate an empty queue', () => {
        expect(queue.isEmpty()).toBeTruthy;
    });
    it('isEmpty() can check if the queue not empty', () => {
        queue.enqueue(5);
        queue.enqueue(2);
        queue.enqueue(6);
        queue.enqueue(7);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBeFalse;
    });
});