function getSquareRoot(target) {
    let start = 0;
    let end = target;

    while (start <= end) {
        const mid = start + (end - start) / 2;
        const midSquared = mid * mid;

        if (Math.abs(midSquared - target) < 1e-6) {
            return mid.toFixed(6);
        } else if (midSquared < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return end.toFixed(6);
}
const target = parseInt(prompt("Enter the positive integer: "));
const squareRoot = getSquareRoot(target);
console.log(squareRoot);
