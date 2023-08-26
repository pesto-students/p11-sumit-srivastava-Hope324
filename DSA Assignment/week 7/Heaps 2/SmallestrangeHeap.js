function smallestRange(lists) {
    const k = lists.length;
    const pointers = new Array(k).fill(0);
    let minRange = Infinity;
    let result = [];
    let maxVal = -Infinity;
    let listWithMaxVal = 0;
    let elementsCovered = 0;
    let allListsCovered = false;

    while (!allListsCovered) {
        maxVal = -Infinity;

        // Find the list with the maximum value among the current pointers
        for (let i = 0; i < k; i++) {
            if (pointers[i] < lists[i].length && lists[i][pointers[i]] > maxVal) {
                maxVal = lists[i][pointers[i]];
                listWithMaxVal = i;
            }
        }

        // Move the pointer of the list with the maximum value
        pointers[listWithMaxVal]++;

        // Update the elements covered count
        elementsCovered++;

        // Check if all lists have been covered
        allListsCovered = elementsCovered === k;

        if (allListsCovered) {
            const minVal = lists[listWithMaxVal][pointers[listWithMaxVal] - 1];
            maxVal = lists[listWithMaxVal][pointers[listWithMaxVal] - 1];

            // Calculate the current range
            const currentRange = maxVal - minVal;

            // Update the minimum range if necessary
            if (currentRange < minRange) {
                minRange = currentRange;
                result = [minVal, maxVal];
            }

            // Move the pointers back to the previous position for all lists
            for (let i = 0; i < k; i++) {
                pointers[i]--;
            }

            // Reset the elements covered count
            elementsCovered = 0;

            // Check if any list is exhausted
            for (let i = 0; i < k; i++) {
                if (pointers[i] === lists[i].length) {
                    allListsCovered = false;
                    break;
                }
            }
        }
    }

    return result;
}

const k = parseInt(prompt("Enter the number of lists:"));
const lists = [];

for (let i = 0; i < k; i++) {
    const input = prompt(`Enter the elements of list ${i + 1} separated by spaces:`).split(" ").map(Number);
    lists.push(input);
}

const [min, max] = smallestRange(lists);
console.log(`${min} - ${max}`);
