# data-structures-and-algorithms

# Graphs:
this code will create a **Graph**, and methods to add vertex and edges, get the Neighbors of a vertex , to get all the vertexes and the edges in the graph and method to give the size of the graph and method to breadth first tave;

## Challenge
- create a class **Vertex** 
- create a class **Edge** 
- create a a class **Graph** and create method ``addVertex()`` to add vertex, ``addEdge()`` to add edges, ``getNeighbors()`` get the Neighbors of a vertex  ``getAll()`` to get all the vertexes and the edges in the graph, and ``size()``  to give the size of the graph;
- create ``getEdge()`` that get the edge between two nodes and return its weight.
- create ``bfs()`` method to make create Breadth-First Traversal of a Graph.
- create ``dfs()`` method to make create Breadth-First Traversal of a Graph.


## Big O:
- Big O (for time and space): for  ``addVertex()`` is O(1): it added the vertex directly set method of map
- Big O  (for time and space): for ``addEdge()`` is o(1): it added the vertex directly using get method of map and push the edgr to the vertex
- Big O  (for time and space): for ``getNeighbors()`` is o(1):it just get the vertex using get method of map and return it
- Big O  (for time and space): for ``getAll()`` is O(n): I use for loop to iterate inside the graph
- Big O  (for time and space): for ``size()`` is O(n): I use for loop to iterate inside the graph and add a counter to set the size
- Big O  (for time and space): for ``getEdge()`` is O(n): I use for loop to iterate thoght the given array 
- Big O  (for time and space): for ``bfs()`` is O(n): it depend on the number of nodes(vertex) 
- Big O  (for time and space): for ``dfs()`` is O(n): it depend on the number of nodes(vertex) 
 

## White-Board:
![whiteboard of Solution for graph](https://i.ibb.co/dBy9mpZ/graphs.png)
![whiteboard of Solution for graph](https://i.ibb.co/qjkgG3n/graph2.png)
![whiteboard of Solution for graph get edge](https://i.ibb.co/FK8V8Yn/graph-edges.png)
![whiteboard of Solution for graph dfs](https://i.ibb.co/x5PQtjK/Screenshot-77.png)



