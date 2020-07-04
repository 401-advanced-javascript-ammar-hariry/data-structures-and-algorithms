# data-structures-and-algorithms

# Stack and Queues:
this code will create a **Hash Map** and its own methods to hash the keys ,add  a linked-list , get a value for specific key and to check if the key exists or not.

## Challenge
- create a class **Node** 
- create a class **Linked List** 
- create a a class **Hash Map** and create method ``add()`` to add a linked-list to the map, ``hash()`` to hash the key, ``contains()`` to check if the key exists or not, and ``get()`` get a value and key for a specific key. 


## Approach & Efficiency
- create a **Hash Map**  class have a methods  to add linked-list by create a linked list with the value and keys pairs and add it to the map (after hashed the keys), method to hash the key by converte the words to ASCI code and multbling it by pa prime number, method to get a value and key pairs by get the value of map array of the hashed key,  and method to checkif the key exists or not by checing the get method return true or false, .


#### Hash-Map:
- Big O  (for time): for ``add method`` is o(1): i just check for the linked list and created alinked list if it's not exists
- Big O  (for time): for ``get method`` is o(1): check the value of specific key in a map array
- Big O  (for time): for ``hash method`` is O(n):  using a reduce method
- Big O  (for time): for ``contains method`` is O(1):  using get method to check if the key exists or not 

- for all method the Big O  for the space is O(n) n for number of entries

## Solution
![whiteboard of Solution for hash map](https://i.ibb.co/7tjghvH/20200705-004218.jpg)



