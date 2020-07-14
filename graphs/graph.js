'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjancyList = new Map();
    }
    addVertex(vertex) {
        this._adjancyList.set(vertex, [])
    }
    addEdge(startVex, endVex, weight) {
        if (!this._adjancyList.has(startVex) || !this._adjancyList.has(endVex)) {
            return 'vertex not found';
        } else {

            const adjacencies = this._adjancyList.get(startVex);
            adjacencies.push(new Edge(endVex, weight));
        }
    }
    getNeighbors(vertex) {
        if (this._adjancyList.has(vertex)) {
            console.log(this._adjancyList.get(vertex));
            return this._adjancyList.get(vertex);

        } else {
            console.log('vertex does not exist!!');
        }
    }

    getAll() {
        let arr = [];
        // console.log(this._adjancyList.entries());
        for (const [vertex, edge] of this._adjancyList.entries()) {
            arr.push([vertex, edge]);
            console.log("V ====> ", vertex);
            console.log("E ====>", edge);
        }
        //         console.log(arr);
        return arr;
    }
    size() {
        let graphSize = 0;
        for (const [vertex, edge] of this._adjancyList.entries()) {
            graphSize++;
        }
        return graphSize;
    }
    bfs(startNode) {
        const queue = [];
        const vistedNodes = new Set();

        queue.push(startNode);
        vistedNodes.add(startNode);

        while (queue.length) {
            const currentNode = queue.shift();

            const neighbors = this.getNeighbors(currentNode);

            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if (vistedNodes.has(neighborNode)) {
                    continue;
                } else {
                    vistedNodes.add(neighborNode);
                }
                queue.push(neighborNode);
            }
        }
    }
    getEdge(arr) {

        if (arr.length == 0) {
            return 'the array is empty'
        }
        let neighrborArr = this.getNeighbors(arr[0]);
        for (let i = 0; i < neighrborArr.length; i++) {
            if (arr[1].value === neighrborArr[i].vertex.value) {
                return `true  ${neighrborArr[i].weight}$`;
            }
        }
        return `false 0$`;
    }
    dfs(startNode) {
        const Stack = [];
        const vistedNodes = new Set();

        Stack.push(startNode);
        vistedNodes.add(startNode);

        while (Stack.length) {
            const currentNode = Stack.pop();

            const neighbors = this.getNeighbors(currentNode);

            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if (vistedNodes.has(neighborNode)) {
                    continue;
                } else {
                    vistedNodes.add(neighborNode);
                }
                Stack.push(neighborNode);
            }
        }
    }
}

const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(ten);

graph.addEdge(two, seven);
graph.addEdge(three, eight);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(ten, two);
graph.addEdge(ten, three);
graph.addEdge(ten, six);
graph.addEdge(eight, seven);

graph.bfs(ten);

module.exports = { Vertex, Edge, Graph };