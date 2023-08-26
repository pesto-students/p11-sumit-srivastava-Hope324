function findMinVertexCover(adjList) {
    const numNodes = adjList.length;
    const visited = new Array(numNodes).fill(false);
    const vertexCover = [];

    for (let node = 0; node < numNodes; node++) {
        if (!visited[node]) {
            for (const neighbor of adjList[node]) {
                if (!visited[neighbor]) {
                    visited[node] = true;
                    visited[neighbor] = true;
                    vertexCover.push(node, neighbor);
                    break;
                }
            }
        }
    }

    return vertexCover;
}

// Take input from the user
const input = prompt("Enter the adjacency list (use ; to separate rows and , to separate nodes):");
const lines = input.split(';');
const adjList = lines.map(line => line.split(',').map(Number));

// Find the minimum vertex cover
const minVertexCover = findMinVertexCover(adjList);

// Print the result
console.log(minVertexCover);
