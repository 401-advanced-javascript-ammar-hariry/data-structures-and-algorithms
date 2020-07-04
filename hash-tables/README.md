# data-structures-and-algorithms

# Stack and Queues:
this code will create a **Hash Map** and its own methods to hash the keys ,add  a linked-list , get a value for specific key and to check if the key exists or not.

## Challenge
- create a class **Node** 
- create a class **Linked List** 
- create a a class **Hash Map** and create method ``add()`` to add a linked-list to the map, ``hash()`` to hash the key, ``contains()`` to check if the key exists or not, and ``get()`` get a value and key for a specific key. 


## Approach & Efficiency
- create a **Hash Map**  class have a methods  to add linked-list by checking the top and add the new value to it, method to delete node by making the top pointer and make the next the new top, to check for empty or not I check the top pointer if it's null or have value and returns boolean,for peek a value I just return the top.


#### Stack:
- Big O (for time and space): for ``push method`` is O(1): it's check the top once and inserting the value to the top of **stack**
- Big O  (for time and space): for ``pop method`` is o(1): i just check the top once and make the next the new top
- Big O  (for time and space): for ``isEmpty method`` is o(1): check the top value if it is null or hav a value
- Big O  (for time and space): for ``peek method`` is O(1): just returns the top


#### Queue:
- Big O (for time and space): for ``enqueue method`` is O(1): it's check the front once and inserting the value to the front of **Queue**
- Big O  (for time and space): for ``dequeue method`` is o(1): i just check the front once and make the next the new front
- Big O  (for time and space): for ``isEmpty method`` is o(1): check the front value if it is null or hav a value
- Big O  (for time and space): for ``peek method`` is O(1): just returns the front

## Solution
![whiteboard of Solution for stack](https://i.ibb.co/DRqZdzH/Screenshot-62.png)
![whiteboard of Solution for queue](https://i.ibb.co/hmmqGc8/Screenshot-64.png)


