import { Graph } from "../graphs.js";
class BFS extends Graph {
    breadthFirstIterative(StartNode) {
        let result = [],
            visited = {},
            queue = [],
            current;
        queue.push(StartNode);
        visited[StartNode] = true;

        while (queue.length) {
            current = queue.shift();
            result.push(current);

            this.adjacency[current].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}

let graph = new BFS();
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

graph.breadthFirstIterative("A");