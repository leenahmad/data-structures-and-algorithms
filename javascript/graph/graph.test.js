'use strict';

const Graph = require('./graph');
const Vertex = require('./vertex');

describe('test Graph', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    expect(graph.addNode(one)).toEqual({ value: 1 });
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addNode(one);
    graph.addNode(two);
    graph.addEdge(one, two, 5);

    expect(graph.adjacenctList.get(one)).toEqual([
      { vertex: { value: 2 }, weight: 5 },
    ]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);

    graph.addEdge(one, three, 5);
    graph.addEdge(two, three, 5);
    graph.addEdge(two, four, 5);
    graph.addEdge(four, five, 5);
    graph.addEdge(five, three, 5);

    expect(graph.getNeighbors(one)).toEqual([
      { vertex: { value: 3 }, weight: 5 },
    ]);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);

    graph.addEdge(one, three, 5);
    graph.addEdge(two, three, 5);
    graph.addEdge(two, four, 5);
    graph.addEdge(four, five, 5);
    graph.addEdge(five, three, 5);

    expect(graph.getNeighbors(two)).toEqual([
      { vertex: { value: 3 }, weight: 5 },
      { vertex: { value: 4 }, weight: 5 },
    ]);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);

    graph.addNode(one);
    graph.addNode(two);
    graph.addNode(three);
    graph.addNode(four);
    graph.addNode(five);

    expect(graph.size()).toEqual(5);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();

    const one = new Vertex(1);
    const two = new Vertex(2);
    graph.addNode(one);
    graph.addNode(two);
    graph.addEdge(one, two, 5);

    expect(graph.adjacenctList.get(one)).toEqual([
      { vertex: { value: 2 }, weight: 5 },
    ]);
  });

  it('An empty graph properly returns null', () => {
    const graph = new Graph();
    expect(graph.size()).toEqual(null);
  });
});
