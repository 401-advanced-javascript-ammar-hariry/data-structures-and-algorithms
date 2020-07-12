'use strict';

const GraphImp = require('../graph');
jest.spyOn(global.console, 'log')

const graph = new GraphImp.Graph();

const two = new GraphImp.Vertex(2);
const three = new GraphImp.Vertex(3);
const six = new GraphImp.Vertex(6);
const seven = new GraphImp.Vertex(7);
const eight = new GraphImp.Vertex(8);
const five = new GraphImp.Vertex(10);

// graph.addVertex(two);
// 
// graph.addVertex(six);

// 
// graph.addVertex(ten);

//
// 
// graph.addEdge(six, seven);
// graph.addEdge(six, eight);
// graph.addEdge(ten, two);
// graph.addEdge(ten, three);
// graph.addEdge(ten, six);
// graph.addEdge(eight, seven);

describe('Graph', () => {
    it('addVertex() will add a vertex', () => {

        graph.addVertex(two);
        expect(graph.size()).toEqual(1);
    });
    it('addEdge() will return error message if the vertext not exists', () => {

        expect(graph.addEdge(three, five)).toEqual('vertex not found');
    });
    it('getAll() will console log all the vertex in the graph', () => {

        graph.getAll();
        expect(console.log).toBeCalled();
    });
    it('getNeighbors() will console log error if the vertext not exists', () => {

        graph.getNeighbors(eight);
        expect(console.log).toBeCalled();
    });
    it('size() will return the size of the graph', () => {

        graph.addVertex(seven);
        graph.addVertex(three);
        graph.addVertex(eight);
        graph.addEdge(two, seven);
        graph.addEdge(three, eight);
        expect(graph.size()).toEqual(4);
    });
    it('getNeighbors() will return an exist vertex', () => {

        expect(graph.getNeighbors(eight)).toEqual(graph._adjancyList.get(eight));
    });
})