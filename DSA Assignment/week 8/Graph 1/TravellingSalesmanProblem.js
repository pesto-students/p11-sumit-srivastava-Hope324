function findShortestRoute(cities) {
    const n = cities.length;
    let shortestDistance = Infinity;
    let shortestRoute = [];

    function getPermutations(arr, start) {
        if (start === arr.length - 1) {
            const distance = calculateDistance(arr);
            if (distance < shortestDistance) {
                shortestDistance = distance;
                shortestRoute = [...arr];
            }
            return;
        }

        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            getPermutations(arr, start + 1);
            swap(arr, start, i);
        }
    }

    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function calculateDistance(route) {
        let distance = 0;
        for (let i = 0; i < n - 1; i++) {
            distance += cities[route[i]][route[i + 1]];
        }
        distance += cities[route[n - 1]][route[0]]; // Return to starting city
        return distance;
    }

    const initialRoute = Array.from({ length: n }, (_, i) => i);
    getPermutations(initialRoute, 0);

    return shortestRoute;
}

// Take input from the user
const input = prompt("Enter the distances between cities (use ; to separate rows and , to separate distances):");
const distances = input.split(';').map(row => row.split(',').map(Number));

// Solve the Traveling Salesman Problem and print the shortest route
const shortestRoute = findShortestRoute(distances);
console.log(shortestRoute);
