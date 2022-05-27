'use strict';

const Edge = require('./edge');

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
    if(this.adjacenctList.size > 0){
      return this.adjacenctList.size;
    }
    else{
      return null;
    }
  }

  prints(){
    let string = '';
    for(const [vertex,Edge] of this.adjacenctList.entries()){
      let edge;
      if(Edge[0]){
        edge = '';
        for(let i = 0; i< Edge.length; i++ ){
          edge = Edge + `${Edge[i].vertex.value},`;
        }
      }
      else {
        edge = Edge;
      }
      string = string + `vertex ${vertex['value']} => edge ${edge} `;
    }
  }
}

module.exports = Graph;
