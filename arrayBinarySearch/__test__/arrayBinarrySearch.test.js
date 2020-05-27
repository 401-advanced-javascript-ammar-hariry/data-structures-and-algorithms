'use strict';

const binarySearch = require('../arrayBinarySearch')

describe('list', () => {

    it('it should return -1 when the value not inside the array', () => {
        let searchArr = [2, 5, 7, 3];
        expect(binarySearch(searchArr, 4)).toEqual(-1);
    });

    it('inputs can be string also ', () => {
        let searchArr = [5, 4, 9, 3, 10];
        expect(binarySearch(searchArr, 10)).toEqual(1);
    });



});