function hasEulerianPathOrCircuit(adjList) {
    const graph = adjList.map(row => row.split(',').map(Number));
    const n = graph.length;

    const inDegrees = new Array(n).fill(0);
    const outDegrees = new Array(n).fill(0);

    let startNode = -1, endNode = -1;
    let outMinusIn = 0, inMinusOut = 0;

    for (let i = 0; i < n; i++) {
        outDegrees[i] = graph[i].length;
        for (const neighbor of graph[i]) {
            inDegrees[neighbor]++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (outDegrees[i] - inDegrees[i] === 1) {
            outMinusIn++;
            startNode = i;
        } else if (inDegrees[i] - outDegrees[i] === 1) {
            inMinusOut++;
            endNode = i;
        }
    }

    if ((outMinusIn === 1 && inMinusOut === 1) || (outMinusIn === 0 && inMinusOut === 0)) {
        return true;
    }

    return false;
}

// Take input from the user
const input = prompt("Enter the adjacency list of the graph (use ; to separate nodes):");

// Split input and check if the graph has an Eulerian path or circuit
const adjacencyList = input.split(';');
const result = hasEulerianPathOrCircuit(adjacencyList);
console.log(result);
