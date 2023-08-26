function isBipartite(adjList) {
    const numNodes = adjList.length;
    const colors = new Array(numNodes).fill(0); // 0: uncolored, 1: color 1, 2: color 2
    const visited = new Array(numNodes).fill(false);

    function dfs(node, color) {
        visited[node] = true;
        colors[node] = color;

        for (const neighbor of adjList[node]) {
            if (!visited[neighbor]) {
                if (!dfs(neighbor, 3 - color)) { // Use 3 - color to alternate between 1 and 2
                    return false;
                }
            } else if (colors[neighbor] === colors[node]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < numNodes; i++) {
        if (!visited[i]) {
            if (!dfs(i, 1)) {
                return false;
            }
        }
    }

    return true;
}

// Take input from the user
const input = prompt("Enter the adjacency list (use ; to separate rows and , to separate nodes):");
const lines = input.split(';');
const adjList = lines.map(line => line.split(',').map(Number));

// Check if the graph is bipartite
const isGraphBipartite = isBipartite(adjList);

// Print the result
console.log(isGraphBipartite);
