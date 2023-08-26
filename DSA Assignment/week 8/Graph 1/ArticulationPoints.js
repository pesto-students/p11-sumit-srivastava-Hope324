function findArticulationPoints(adjList) {
    const graph = adjList.map(row => row.split(',').map(Number));
    const n = graph.length;

    const visited = new Array(n).fill(false);
    const low = new Array(n).fill(0);
    const ids = new Array(n).fill(0);
    const parent = new Array(n).fill(-1);
    const isArticulationPoint = new Array(n).fill(false);
    
    let id = 0;

    function dfs(node, root, depth) {
        visited[node] = true;
        low[node] = ids[node] = id++;
        let children = 0;
        let isAP = false;

        for (const neighbor of graph[node]) {
            if (neighbor === parent[node]) {
                continue;
            }

            if (!visited[neighbor]) {
                children++;
                parent[neighbor] = node;
                dfs(neighbor, root, depth + 1);
                low[node] = Math.min(low[node], low[neighbor]);

                if (low[neighbor] >= ids[node] && node !== root) {
                    isAP = true;
                }
            } else {
                low[node] = Math.min(low[node], ids[neighbor]);
            }
        }

        if ((node === root && children > 1) || (node !== root && isAP)) {
            isArticulationPoint[node] = true;
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, i, 0);
        }
    }

    const articulationPoints = [];
    for (let i = 0; i < n; i++) {
        if (isArticulationPoint[i]) {
            articulationPoints.push(i);
        }
    }

    return articulationPoints;
}

// Take input from the user
const input = prompt("Enter the adjacency list of the graph (use ; to separate nodes):");

// Split input and find articulation points
const adjacencyList = input.split(';');
const articulationPoints = findArticulationPoints(adjacencyList);

// Print the result
console.log("Articulation Points:", articulationPoints);
