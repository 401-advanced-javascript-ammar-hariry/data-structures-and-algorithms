'use strict';

const Pseudo = require('../lib/queue-with-stacks');


describe('Queue With Stacks', () => {

    it('Can add to queue', () => {
        let queue = new Pseudo();
        let test = queue.enqueue(1);
        expect(test.top.value).toEqual(1);
    });

    it('Can add more than once', () => {
        let queue = new Pseudo();
        queue.enqueue(10);
        queue.enqueue(15);
        let test = queue.enqueue(20);
        expect(test.top.value).toEqual(20);
    });

    it('Can rmove from the queue', () => {
        let queue = new Pseudo();
        queue.enqueue(10);
        queue.enqueue(15);
        let pop = queue.dequeue();
        expect(pop).toEqual(10);
    });

    it('Can remove more than once', () => {
        let queue = new Pseudo();
        queue.enqueue(10);
        queue.enqueue(15);
        queue.enqueue(20);
        queue.dequeue();
        let pop = queue.dequeue();
        console.log(pop);
        expect(pop).toEqual(15);

    });
});