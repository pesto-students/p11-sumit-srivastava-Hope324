function shortestPath(adjList, source) {
    const numNodes = adjList.length;
    const distances = new Array(numNodes).fill(Infinity);
    const predecessors = new Array(numNodes).fill(null);

    distances[source] = 0;

    for (let i = 0; i < numNodes - 1; i++) {
        for (let u = 0; u < numNodes; u++) {
            for (const [v, weight] of adjList[u]) {
                if (distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                    predecessors[v] = u;
                }
            }
        }
    }

    for (let u = 0; u < numNodes; u++) {
        for (const [v, weight] of adjList[u]) {
            if (distances[u] + weight < distances[v]) {
                return "Graph contains negative cycle";
            }
        }
    }

    return { distances, predecessors };
}

// Take input from the user
const input = prompt("Enter the weighted adjacency list (use ; to separate rows and , to separate edges and weights):");
const lines = input.split(';');
const adjList = lines.map(line => line.split(',').map(Number));

const source = parseInt(prompt("Enter the source node:"));

// Find the shortest path using the Bellman-Ford algorithm
const result = shortestPath(adjList, source);

// Print the distances and predecessors arrays
console.log(result.distances);
console.log(result.predecessors);
