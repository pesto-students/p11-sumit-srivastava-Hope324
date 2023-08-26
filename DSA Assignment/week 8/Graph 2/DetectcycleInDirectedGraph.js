function hasCycle(adjList) {
    const numNodes = adjList.length;
    const visited = new Array(numNodes).fill(false);
    const recursionStack = new Array(numNodes).fill(false);

    function dfs(node) {
        visited[node] = true;
        recursionStack[node] = true;

        for (const neighbor of adjList[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) {
                    return true;
                }
            } else if (recursionStack[neighbor]) {
                return true;
            }
        }

        recursionStack[node] = false;
        return false;
    }

    for (let i = 0; i < numNodes; i++) {
        if (!visited[i]) {
            if (dfs(i)) {
                return true;
            }
        }
    }

    return false;
}

// Take input from the user
const input = prompt("Enter the adjacency list (use ; to separate rows and , to separate nodes):");
const lines = input.split(';');
const adjList = lines.map(line => line.split(',').map(Number));

// Check if the graph contains a cycle
const hasCycleInGraph = hasCycle(adjList);

// Print the result
console.log(hasCycleInGraph);
