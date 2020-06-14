'use strict';

const fizzBuzz = require('../fizzbuzztree');

function Node(value) {
    this.name = value;
    this.left = null;
    this.right = null;
}

describe('FizzBuzzTree', () => {

    let testTree = null;
    beforeEach(() => {
        let one = new Node(7);
        let two = new Node(3);
        let three = new Node(15);
        let four = new Node(20);
        one.left = two;
        one.right = three;
        three.right = four;
        testTree = one;

    });

    it('if tree value is divisible by %3 change it to fizz', () => {

        let test = fizzBuzz(testTree);
        expect(test.left.name).toEqual('fizz');
    });
    it('if tree value is divisible by %5 change it to buzz', () => {

        let test = fizzBuzz(testTree);
        expect(test.right.right.name).toEqual('buzz');
    });

    it('if tree value is not divisible by %3 & %5 change it string', () => {
        let test = fizzBuzz(testTree);
        expect(typeof testTree.name).toEqual('string');
    });


    it('if tree value is divisible by %3 & %5 change it fizzbuzz', () => {
        let test = fizzBuzz(testTree);
        expect(test.right.name).toEqual('fizzbuzz');

    });

});