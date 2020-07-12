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
        //         console.log(graphSize);
        return graphSize;
    }
}

module.exports = { Vertex, Edge, Graph };