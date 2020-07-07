'use strict';

const leftJoin = require('../leftjoin.js');

let leftTable;
let rightTable;
describe('leftJoin Logic in hash-tables', () => {

    beforeEach(() => {
        leftTable = {
            'read': 'ahmad',
            'write': 'saleem',
            'create': 'rami',
            'seeker': 'me'
        }

        rightTable = {
            'read': 'sami',
            'play': 'saleem',
            'create': 'romie'
        }
    });

    it('leftJoin()', () => {

        let result = leftJoin(leftTable, rightTable);
        let expects = [
            ['read', 'ahmad', 'sami'],
            ['write', 'saleem', null],
            ['create', 'rami', 'romie'],
            ['seeker', 'me', null]
        ]
        expect(result).toEqual(expects);
    });
    it('leftJoin() will inset null to the result row', () => {

        let result = leftJoin(leftTable, rightTable);
        expect(result[1].includes(null)).toBeTruthy();
    });
    it('leftJoin() will inset values of  matches kyes from both tables to the result row', () => {

        let result = leftJoin(leftTable, rightTable);
        expect(result[2].includes('romie')).toBeTruthy();
    });
});