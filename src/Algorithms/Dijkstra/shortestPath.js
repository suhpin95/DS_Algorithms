/**
 * Implement Shortest Path Algo
 * using Dijkstra Algo
 */
/**
    Dijsktras Algorithm
*/
class PriorityQ{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority-b.priority);
    }
}
class Dijsktras{
    // Implement A graph
    constructor(){
        this.adjacencyList = {};
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node:v2,weight});
        this.adjacencyList[v2].push({node:v1, weight});
    }
    //Re-arrange using Priority Queue   
    Dijsktras(startNode, finish){
        const nodes = new PriorityQ();
        // stores the distance from the startNode
        const distances = {};
        // store the visited nodes
        const previous = {};
        // traversed Path
        let path = [], smallest;

        //Buliding the initial Value
        for(let vertex in this.adjacencyList){
            if(vertex === startNode){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
        }

        //while there's node in the PriorityQ
        while(nodes.values.length){
           smallest = nodes.dequeue().val;
           if(smallest === finish){
               // Done
               // Push the values in Path
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
           }

           if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // finding neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate the total distances
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
           }
            
        } 
        // returning path in reverse order as we build it in reverse order
        return path.concat("A").reverse();;   
    }     
}
var graph = new Dijsktras()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijsktras("A","E");