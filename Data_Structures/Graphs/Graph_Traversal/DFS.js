import { Graph } from "../graphs.js";

class GraphTraversal extends Graph {
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacency;
        //IIFE
        (function dfs(vertex) {
            //avoid repitition of the visited neighbor
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
    depthFirstIterative(startNode) {
        let result = [],
            visited = {},
            stack = [],
            current;
        stack.push(startNode);
        visited[startNode] = true;

        while (stack.length) {
            console.log("::" + stack);
            // can change the order of traversal if use shift
            current = stack.pop();
            result.push(current);

            this.adjacency[current].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
}
let graph = new GraphTraversal();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.depthFirstRecursive("A"));
