'use strict';

const LinkedList = require('../lib/ll-merge');

describe('Linked-List', () => {

    it('it will return an array of the value of two  merged Linked List ', () => {
        let list1 = {
            head: {
                name: 1,
                next: {
                    name: 3,
                    next: {
                        name: 2,
                        next: null,
                    },
                },
            }
        };

        let list2 = {
            head: {
                name: 5,
                next: {
                    name: 9,
                    next: {
                        name: 4,
                        next: null,
                    },
                },
            }
        };
        let init = new LinkedList();
        let result = init.mergeLists(list1, list2);
        let llvalArr = [];
        let current = result.head;
        while (current.next) {
            llvalArr.push(current.name);
            current = current.next;
        }
        llvalArr.push(current.name);

        expect(llvalArr).toStrictEqual([1, 5, 3, 9, 2, 4]);
    });
});