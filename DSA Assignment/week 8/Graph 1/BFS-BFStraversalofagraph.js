function bfsTraversal(adjList, startNode) {
    const graph = adjList.map(row => row.split(',').map(Number));
    const n = graph.length;

    const visited = new Array(n).fill(false);
    const queue = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length > 0) {
        const node = queue.shift();
        processNode(node); // You can replace this with your own processing or printing logic

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
}

// Take input from the user
const input = prompt("Enter the adjacency list of the graph (use ; to separate nodes):");
const startNode = parseInt(prompt("Enter the start node:"));

// Split input and perform BFS traversal
const adjacencyList = input.split(';');
bfsTraversal(adjacencyList, startNode);
