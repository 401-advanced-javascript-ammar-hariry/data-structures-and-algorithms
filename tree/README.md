# data-structures-and-algorithms

# BinaryTree and BinarySearchTree:
-  Create a Node class that has properties of value , left and the right node . Create a **BinaryTree** class with ``preOrder()``,``postOrder()`` and ``inOrder()`` methods . 
- Create a **BinarySearchTree** class with ``add()`` and ``contain()`` methods

## Challenge
- create a class **Node** 
- create a a class **BinaryTree** and create method ``preOrder()``,``postOrder()`` and ``inOrder()`` methods for each of the depth first traversals. 
- create a a class **BinarySearchTree** and create method ``add()``  to add node to the tree and ``contain()`` to check if the value exists or not.

## Approach & Efficiency
- create a a class **BinaryTree** and create methods:
-  ``preOrder()``: traversals Perant - Left - Right.
- ``postOrder()`` :traversals Left - Right - Perant
-  ``inOrder()`` :traversals Left - Perant - Right

- create a a class **BinarySearchTree**
- create method ``add()``  to add node to the tree it will add the bigger value than the perant to the right and the smaller to the left 
- ``contain()`` to check if the value exists or not. compare between the value and the perant in order to go left or right (go left if smaller and right if it's bigger)

#### binarytree:
- Big O (for time ):  is O(n): becuse it depend on the number of the nodes
- Big O  (for space):  is o(h): becuse it depend on the height of tree



#### binarysearchtree:
- Big O (for time ): is O(log(n)):  becuse it depend on the number of the nodes will check
- Big O  (for space):  is o(h): becuse it depend on the height of tree


## Solution
![whiteboard of Solution for binarytree](https://i.ibb.co/Wc1681N/binary-tree.png)
![whiteboard of Solution for binarysearchtree](https://i.ibb.co/cCmNz3D/binary-search-tree.png)


