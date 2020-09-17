export class Graph {
    constructor() {
      this.adjacency = {};
    }
    addVertex(key) {
      //checks if node is present
      if (!this.adjacency[key]) {
        // initialize with empty array
        this.adjacency[key] = [];
      }
    }
    addEdge(vertex1, vertex2) {
      //checking the vertices
      if (this.adjacency[vertex1] && this.adjacency[vertex2]) {
        // push the values into the array
        this.adjacency[vertex1].push(vertex2);
        this.adjacency[vertex2].push(vertex1);
      } else {
        let output = "Check the vertices in adjacency list";
        return output;
      }
    }
    removeEdge(vertex1, vertex2) {
      this.adjacency[vertex1] = this.adjacency[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacency[vertex2] = this.adjacency[vertex2].filter(
        (v) => v !== vertex1
      );
    }
    removeVertex(vertex) {
      // remove all the edges before we can remove the vertex
      while (this.adjacency[vertex].length) {
        const adjacentVertex = this.adjacency[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      //remove the entry from the adjacencyList
      delete this.adjacency[vertex];
    }
  }
  
  let graph = new Graph();
  graph.addVertex("SF");
  graph.addVertex("FL");
  graph.addVertex("GB");
  graph.addVertex("HYD");
  
  graph.addEdge("SF", "FL");
  graph.addEdge("SF", "HYD");
  