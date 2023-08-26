
function getSlope(p1, p2) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    if (x1 === x2) {
        return "vertical"; // Special case of vertical line
    }
    return (y2 - y1) / (x2 - x1);
}
function maxPointsOnLine(points) {
    if (points.length <= 2) {
        return points.length;
    }

    let maxPoints = 0;

    for (let i = 0; i < points.length; i++) {
        const slopes = new Map();
        let duplicate = 1; // To count the points that are duplicates of the current point
        let vertical = 0; // To count the points with the same x-coordinate

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                if (points[i][0] === points[j][0]) {
                
                    vertical++;
                } else if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {

                    duplicate++;
                } else {
                    const slope = getSlope(points[i], points[j]);
                    slopes.set(slope, (slopes.get(slope) || 0) + 1);
                }
            }
        }

        maxPoints = Math.max(maxPoints, duplicate + vertical);

        for (const count of slopes.values()) {
            maxPoints = Math.max(maxPoints, count + duplicate);
        }
    }

    return maxPoints;
}

// Function to parse the input string into an array of 2D points
function parseInput(input) {
    return JSON.parse(input);
}

// Function to run the maxPointsOnLine function with user input
function runMaxPointsOnLine() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the array of 2D points in JSON format: ", (input) => {
        const points = parseInput(input);
        const maxPoints = maxPointsOnLine(points);
        console.log("Maximum Points on the Same Line:", maxPoints);
        rl.close();
    });
}

runMaxPointsOnLine();
