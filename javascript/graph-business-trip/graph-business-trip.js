'use strict';


const Edge = require('../graph/edge');

class Graph {

  constructor() {
    this.adjacenctList = new Map();
  }

  addNode(value) {
    this.adjacenctList.set(value, []);
    return value;
  }

  addEdge(node1, node2, weight) {


    if (!this.adjacenctList.has(node1) || !this.adjacenctList.has(node2)) {
      return 'one node or both node are not existed';
    }

    const adjacencies = this.getNeighbors(node1);
    adjacencies.push(new Edge(node2, weight));

    const adjacencies2 = this.getNeighbors(node2);
    adjacencies2.push(new Edge(node1, weight));
  }

  getNodes() {
    return this.adjacenctList;
  }

  getNeighbors(node) {
    if (!this.adjacenctList.has(node)) {
      return 'node dose not exist!!';
    }
    return this.adjacenctList.get(node);
  }

  size() {
    if (this.adjacenctList.size > 0) {
      return this.adjacenctList.size;
    }
    else {
      return null;
    }
  }

  breadthFirst(node) {
    if (typeof node !== 'object') {
      return 'Eror the node shold ba an object';
    }

    if (this.size() === 0) {
      return 'graph is empty!';
    }

    const visited = new Set();
    let queue = [];
    queue.push(node);

    while(queue.length){
      let currentNode = queue.shift();
      visited.add(currentNode);
      this.adjacenctList.get(currentNode).forEach((vertex) => {
        if(!visited.has(vertex.vertex)){
          queue.push(vertex.vertex);
        }
      });
    }
    return[...visited];


  }



}

function business(graph, cityNames) {
  let total = 0;

  for (let i = 0; i < cityNames.length - 1; i++) {
    let neighbors = graph.getNeighbors(cityNames[i]);
    for (let j = 0; j <= neighbors.length - 1; j++) {
      if (cityNames[i + 1] === neighbors[j].vertex) {
        total += neighbors[j].weight;
      }
    }
    if (total === 0) {
      return `null`;
    }
  }
  return `$ ${total}`;
}

module.exports = {
  Graph ,
  business,
};
