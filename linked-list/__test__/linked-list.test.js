'usr strict';

const LinkedList = require('../lib/linked-list');

describe('Linked List Module', () => {

    it('test empty Linked List', () => {
        let linked = new LinkedList();
        expect(linked.head).toBeNull();
    });
    it('if head will  point to fiest node in the Linked List', () => {
        let linked = new LinkedList();
        linked.append('a');
        expect(linked.head.name).toEqual('a');
    });
    it('append() will append more than one node to the linked list', () => {
        let linked = new LinkedList();
        linked.append('a');
        linked.append('b');
        linked.append('c');

        expect(linked.head.next.next.name).toEqual('c');
    });
    it('include() will search if the value exists in the Linked', () => {
        let linked = new LinkedList();
        linked.append('a');
        linked.append('b');
        linked.append('c');

        expect(linked.include('b')).toBeTruthy();
        expect(linked.include('d')).toBeFalsy();
    });
    it('toString() will provide the Linked List as it is', () => {
        let linked = new LinkedList();
        linked.append('a');
        linked.append('b');
        linked.append('c');
        expect(linked.toString()).toEqual('a -> b -> c -> null');
    });
});