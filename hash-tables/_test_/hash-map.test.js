'use strict';

const HashMap = require('../hash-map');

describe('Hash Map', () => {

    it('add() will add a new linked list to the Map', () => {

        let hashmap = new HashMap(1024);
        hashmap.add('carecter', 'Kaneki');
        expect(hashmap.contains('carecter')).toBeTruthy();
    });
    it('contain() will return true when the key is exists ', () => {

        let hashmap = new HashMap(1024);
        hashmap.add('carecter', 'Kaneki');
        expect(hashmap.contains('carecter')).toBeTruthy();
    });

    it('contain() will return true when the key is exists ', () => {

        let hashmap = new HashMap(1024);
        hashmap.add('carecter', 'Kaneki');
        expect(hashmap.contains('notExists')).toBeFalsy();
    });

});