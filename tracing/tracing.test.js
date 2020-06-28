'use strict';

const InsertionSort = require('./tracing');

describe('sorted array Module', () => {
    it('InsertionSort() sort a simple array', () => {
        let array1 = [20, 19, 12, 8, 5];
        let expected = InsertionSort(array1);
        expect(expected).toEqual([5, 8, 12, 19, 20]);
    });
    it('InsertionSort() sort a Descending order array', () => {
        let array1 = [20, 18, 15, 11, 9];
        let expected = InsertionSort(array1);
        expect(InsertionSort(expected)).toEqual([9, 11, 15, 18, 20]);
    });
    it('InsertionSort() sort an array that have a duplicate number', () => {
        let array1 = [5, 18, 5, 11, 9, 18];
        let expected = InsertionSort(array1);
        expect(InsertionSort(expected)).toEqual([5, 5, 9, 11, 18, 18]);
    });
    it('InsertionSort() sort a Descending order array and have a duplicate number', () => {
        let array1 = [20, 20, 18, 15, 11, 9, 9, 5, 5];
        let expected = InsertionSort(array1);
        expect(InsertionSort(expected)).toEqual([5, 5, 9, 9, 11, 15, 18, 20, 20]);
    });
});