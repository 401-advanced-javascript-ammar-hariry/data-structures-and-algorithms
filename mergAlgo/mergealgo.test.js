'use strict';

const merge = require('./mergealgo');


describe('Merge Sort', () => {


    it('Sort an array ', () => {
        expect(merge([1, 9, 5, 8, 7, 2])).toEqual([1, 2, 5, 7, 8, 9]);
    });
    it('Sort a Reverse-sorted array', () => {
        expect(merge([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
    });
    it('Sort an array have a Few uniques: ', () => {
        expect(merge([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
    });
    it('Sort a Nearly-sorted array : ', () => {
        expect(merge([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
    });


});