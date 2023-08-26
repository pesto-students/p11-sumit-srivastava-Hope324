function cocktailShakerSort(arr) {
    const n = arr.length;
    let swapped;
    let start = 0;
    let end = n - 1;

    do {
        swapped = false;

        for (let i = start; i < end; i++) {
            if (countVowels(arr[i]) > countVowels(arr[i + 1])) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }

        end--;
        for (let i = end; i > start; i--) {
            if (countVowels(arr[i]) < countVowels(arr[i - 1])) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true;
            }
        }

        start++;
    } while (swapped);

    return arr;
}

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Read input from user as comma-separated string
const input = prompt("Enter strings as a comma-separated string: ");
const strings = input.split(",");

// Call the cocktailShakerSort function and print the sorted strings
const sortedArray = cocktailShakerSort(strings);
sortedArray.forEach(str => console.log(str));
