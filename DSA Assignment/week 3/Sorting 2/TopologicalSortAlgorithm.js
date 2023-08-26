function topologicalSort(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const stack = [];

    function dfs(vertex) {
        visited[vertex] = true;

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graph[vertex][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }

        stack.push(vertex);
    }

    for (let vertex = 0; vertex < n; vertex++) {
        if (!visited[vertex]) {
            dfs(vertex);
        }
    }

    return stack.reverse();
}
const n = parseInt(prompt("Enter the number of vertices: "));
const adjacencyMatrix = [];
for (let i = 0; i < n; i++) {
    const row = prompt(`Enter row ${i+1} of the adjacency matrix (space-separated 0s and 1s): `)
        .split(" ")
        .map(Number);
    adjacencyMatrix.push(row);
}
const sortedVertices = topologicalSort(adjacencyMatrix);
console.log(sortedVertices.join(" -> "));
