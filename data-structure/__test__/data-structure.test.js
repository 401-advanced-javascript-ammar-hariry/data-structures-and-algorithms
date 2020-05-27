'use strict';

let challenges = require('../lib/Mock-Interviews');


describe('Fiboconni Sequence Methods', () => {
    it('the input is equal the index for the Fiboconni Sequence and should return the value', () => {
        expect(challenges.fibonacciSequence(8)).toStrictEqual(21);
        expect(challenges.fibonacciSequence(14)).toStrictEqual(377);
    });
    it('use another method to solve the previous challenge (for the Fiboconni Sequence)', () => {
        expect(challenges.fibonacciSequence2(9)).toStrictEqual(34);
        expect(challenges.fibonacciSequence2(19)).toStrictEqual(4181);
    });
});