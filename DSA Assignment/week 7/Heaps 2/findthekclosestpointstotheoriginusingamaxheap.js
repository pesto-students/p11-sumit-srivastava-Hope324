class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(point) {
        this.heap.push(point);
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.distance(this.heap[currentIndex]) > this.distance(this.heap[parentIndex])) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.maxHeapify(0);
        }

        return max;
    }

    maxHeapify(index) {
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;
        let largest = index;

        if (leftChild < this.heap.length && this.distance(this.heap[leftChild]) > this.distance(this.heap[largest])) {
            largest = leftChild;
        }
        if (rightChild < this.heap.length && this.distance(this.heap[rightChild]) > this.distance(this.heap[largest])) {
            largest = rightChild;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.maxHeapify(largest);
        }
    }

    distance(point) {
        return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
    }
}

function findKClosestPoints(points, k) {
    const maxHeap = new MaxHeap();

    for (const point of points) {
        if (maxHeap.heap.length < k) {
            maxHeap.insert(point);
        } else if (maxHeap.distance(point) < maxHeap.distance(maxHeap.heap[0])) {
            maxHeap.extractMax();
            maxHeap.insert(point);
        }
    }

    const result = [];
    while (maxHeap.heap.length > 0) {
        result.push(maxHeap.extractMax());
    }

    return result;
}

const k = parseInt(prompt("Enter the value of k:"));
const inputPoints = prompt("Enter the points as x,y coordinates, separated by spaces:").split(" ");
const points = inputPoints.map(point => point.split(",").map(Number));

const closestPoints = findKClosestPoints(points, k);

console.log(`K closest points to the origin (0, 0):`);
for (const point of closestPoints) {
    console.log(`${point[0]},${point[1]}`);
}
