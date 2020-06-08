# data-structures-and-algorithms

# Queue with Stack  :
this code will create a **Queue** usibg two **Stack** , **PseudoQueue** class will create the standard **queue** interface .
## Challenge
- Create a brand new **PseudoQueue** class,  create the class with ``dequeue()`` and ``enqueue()`` methods.
## Approach & Efficiency
- create two stacks and used the ``push`` method to add to the first stack and used ``pop`` to remove from the other one 
- push all the nodes in the first **stack** to the second one so when i used  ``pop`` .
- take what was first element added , to make the first in first out (**queue**).

#### Big O:
- the **Big O** is o(1) for bothe **space** and **time**, because all methods check the valuse once also without using loops.

## Solution
![whiteboard of Solution for stack](https://i.ibb.co/DRqZdhs/Screnshot-68.png)


