function findBridges(adjList) {
    const numNodes = adjList.length;
    const visited = new Array(numNodes).fill(false);
    const ids = new Array(numNodes).fill(0);
    const low = new Array(numNodes).fill(0);
    const bridges = [];

    let id = 0;

    function dfs(node, parent) {
        visited[node] = true;
        ids[node] = low[node] = id++;

        for (const neighbor of adjList[node]) {
            if (neighbor === parent) continue;

            if (!visited[neighbor]) {
                dfs(neighbor, node);
                low[node] = Math.min(low[node], low[neighbor]);

                if (ids[node] < low[neighbor]) {
                    bridges.push([node, neighbor]);
                }
            } else {
                low[node] = Math.min(low[node], ids[neighbor]);
            }
        }
    }

    for (let i = 0; i < numNodes; i++) {
        if (!visited[i]) {
            dfs(i, -1);
        }
    }

    return bridges;
}

// Take input from the user
const input = prompt("Enter the adjacency list (use ; to separate rows and , to separate nodes):");
const lines = input.split(';');
const adjList = lines.map(line => line.split(',').map(Number));

// Find the bridges in the graph
const bridges = findBridges(adjList);

// Print the bridges
console.log(bridges);
