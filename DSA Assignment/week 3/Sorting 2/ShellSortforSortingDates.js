function shellSortDates(dates) {
    const n = dates.length;
    const timestamps = dates.map(date => new Date(date).getTime());
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = timestamps[i];
            let j;
            for (j = i; j >= gap && timestamps[j - gap] > temp; j -= gap) {
                timestamps[j] = timestamps[j - gap];
            }
            timestamps[j] = temp;
        }
    }
    const sortedDates = timestamps.map(timestamp => new Date(timestamp).toISOString());

    return sortedDates;
}
const input = prompt("Enter dates as a comma-separated string: ");
const dates = input.split(",");
const sortedArray = shellSortDates(dates);
console.log(sortedArray.join(", "));
