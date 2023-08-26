function mergeSortDates(dates) {
    if (dates.length <= 1) {
        return dates;
    }

    const mid = Math.floor(dates.length / 2);
    const left = dates.slice(0, mid);
    const right = dates.slice(mid);

    return merge(mergeSortDates(left), mergeSortDates(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const input = prompt("Enter dates as a comma-separated string: ");
const dates = input.split(",");
const sortedArray = mergeSortDates(dates);
sortedArray.forEach(date => console.log(date));
