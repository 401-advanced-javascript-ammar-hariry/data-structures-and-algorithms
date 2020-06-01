# data-structures-and-algorithms

# Linked List
this code will create a **Linked List**, and method to add a **Node** to the **Linked List**, and method to search through the **Linked List** for a  value  whether this value exists as a Node’s value somewhere within the list and return aboolean result. and method to represent the node inside the **linked list** (as an array).
add two new methods one to insert a new value to the **linked list**  before an exists value and the other to insert a new value to the **linked list** after an exists value.
## Challenge
- create method  to search through the **Linked List** for a  value  whether this value exists as a Node’s value somewhere within the list and return aboolean result.
- create method to insert a new value to the **linked list**  before an exists value
- create method to insert a new value to the **linked list** after an exists value.
- create a method for the **Linked List** class which takes a number,  as a parameter. Return the node’s value that is k from the end of the **linked list**. 
## Approach & Efficiency
- create a **linked list** have a methods to add nodes.
- create another method to search in the **linked list** using while loop.
- create two methods to insert new value before or after an exists value using while loop and if statement. 

- Big O for ``append method`` is O(1): it's check once and inserting the value to the end of the **Linked List**
- Big O for ``include method`` is o(1): it's go throgh the **Linked List**  once to check the value exist in or not
- Big O for ``tostring method`` is o(n): it's go throgh the **Linked List**  once to represent the **Linked List**. 
- Big O for ``insertAfter method`` is O(n): it's go throgh the **Linked List**  and it stop when it found the value we want to insert after.
- Big O for ``insertBefore method`` is O(n): the same of ``insertAfter method`` but her it stopp when it found the value we want to insert before.
- Big O for ``kthFromEnd method`` is O(n): the method use a counter to go throgh the **Linked List** from head to tail.
## Solution
![whiteboard of Solution](https://i.ibb.co/SnDx7gx/20200527-214615.jpg)
![whiteboard of Solution](https://i.ibb.co/djHj0Gh/20200601-002025.jpg)
![whiteboard of Solution](https://i.ibb.co/nkjanc0a/1215155-005055.jpg)

