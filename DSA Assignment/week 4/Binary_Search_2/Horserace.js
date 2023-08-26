function race(groups) {
    if (groups.length === 1) {
        let maxStrength = -1;
        let maxIndex = -1;

        for (let i = 0; i < groups[0].length; i++) {
            if (groups[0][i] > maxStrength) {
                maxStrength = groups[0][i];
                maxIndex = i;
            }
        }

        return maxIndex;
    }

    const newGroups = [];
    for (let i = 0; i < groups.length; i += 2) {
        if (i + 1 < groups.length) {
            const winnerIndex = race([groups[i], groups[i + 1]]);
            newGroups.push([groups[i][winnerIndex]]);
        } else {
            newGroups.push(groups[i]);
        }
    }

    return race(newGroups);
}
const [N, K] = prompt("Enter N and K:").split(" ").map(Number);
const strengths = prompt("Enter strength values of horses:")
    .split(" ")
    .map(Number);
const initialGroups = [];
for (let i = 0; i < strengths.length; i++) {
    initialGroups.push([strengths[i]]);
}
const winnerIndex = race(initialGroups);
console.log(winnerIndex);
