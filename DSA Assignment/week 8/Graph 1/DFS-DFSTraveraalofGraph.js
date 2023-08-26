function dfsTraversal(adjList, startNode) {
    const graph = adjList.map(row => row.split(',').map(Number));
    const n = graph.length;

    const visited = new Array(n).fill(false);

    function dfs(node) {
        visited[node] = true;
        processNode(node); 

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    dfs(startNode);
}

// Take input from the user
const input = prompt("Enter the adjacency list of the graph (use ; to separate nodes):");
const startNode = parseInt(prompt("Enter the start node:"));

// Split input and perform DFS traversal
const adjacencyList = input.split(';');
dfsTraversal(adjacencyList, startNode);
