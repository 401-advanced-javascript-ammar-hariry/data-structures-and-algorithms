  'use strict';

  const interSection = require('../tree-intersection');

  function Node(value) {
      this.val = value;
      this.left = null;
      this.right = null;
  }

  describe('InterSection()', () => {

      let firstTree;
      let secondTree;
      beforeEach(() => {

          firstTree = { head: null };
          let one = new Node(1);
          let two = new Node(2);
          let three = new Node(3);
          let four = new Node(4);
          let five = new Node(5);
          firstTree.head = one;
          one.left = two;
          one.right = three;
          three.left = four;
          three.right = five;

          secondTree = { head: null };
          let a = new Node(1);
          let b = new Node(2);
          let c = new Node(3);
          secondTree.head = a;
          a.left = b;
          a.right = c;
      });

      it('InterSection() will return an array of repeated values', () => {
          expect(interSection(firstTree, firstTree)).toEqual([1, 2, 3, 4, 5]);
      });

      it('InterSection() will avoid the length of the trees', () => {
          expect(interSection(firstTree, secondTree)).toEqual([1, 2, 3]);
      });

      it('InterSection() will work with same tree length', () => {
          expect(interSection(secondTree, secondTree)).toEqual([1, 2, 3]);
      });
  });