function findCircularTour(petrolPumps) {
    let start = 0;
    let remainingPetrol = 0;

    let totalPetrol = 0;
    let totalDistance = 0;

    for (let i = 0; i < petrolPumps.length; i++) {
        const petrol = petrolPumps[i][0];
        const distance = petrolPumps[i][1];

        totalPetrol += petrol;
        totalDistance += distance;

        remainingPetrol += petrol - distance;
        if (remainingPetrol < 0) {
            start = i + 1;
            remainingPetrol = 0;
        }
    }
    if (totalPetrol < totalDistance) {
        return -1;
    }

    return start;
}
const N = parseInt(prompt("Enter the number of petrol pumps:"));
const petrolPumps = [];
for (let i = 0; i < N; i++) {
    const pumpDetails = prompt(`Enter petrol and distance for petrol pump ${i + 1}:`).split(" ").map(Number);
    petrolPumps.push(pumpDetails);
}
const result = findCircularTour(petrolPumps);
if (result === -1) {
    console.log("No solution possible.");
} else {
    console.log(`Start from petrol pump ${result + 1}.`);
}
