const Tree = require('../tree');

describe('Binary Tree', () => {

    let tree = null;

    beforeAll(() => {
        // create my tree 
        let one = new Tree.Node(1);
        let two = new Tree.Node(2);
        let three = new Tree.Node(3);
        let four = new Tree.Node(4);
        let five = new Tree.Node(5);
        let six = new Tree.Node(6);
        let seven = new Tree.Node(7);
        let eight = new Tree.Node(8);
        let nine = new Tree.Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new Tree.BinaryTree(one);
        //         console.log(tree)
    });

    it('preOrder()', () => {
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expected);
    });

    it('inOrder()', () => {
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expected);
    });

    it('postOrder()', () => {
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expected);
    });

});

describe('Binary Aearch Tree', () => {

    let terr2 = null;
    beforeEach(() => {
        terr2 = new Tree.BinarySearchTree();
    });

    it('it add() can be add a new value to the tree', () => {
        terr2.add(10);
        terr2.add(2);
        let terr2Tree = terr2.add(12);
        //         console.log(terr2Tree)
        expect(terr2Tree.left.name).toEqual(2);
        expect(terr2Tree.right.name).toEqual(12);
    });


    it('it contain() Can check if tree contain certain value ', () => {

        terr2.add(17);
        terr2.add(16);
        terr2.add(23);
        terr2.add(20);
        terr2.add(50);

        expect(terr2.contain(23)).toBeTruthy();
        expect(terr2.contain(54)).toBeFalsy();
    });

});