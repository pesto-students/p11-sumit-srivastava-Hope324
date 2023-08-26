function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    let start = 0;
    let end = m;
    
    while (start <= end) {
        const mid1 = Math.floor((start + end) / 2);
        const mid2 = Math.floor((m + n + 1) / 2) - mid1;
        
        const maxLeft1 = (mid1 === 0) ? -Infinity : nums1[mid1 - 1];
        const maxLeft2 = (mid2 === 0) ? -Infinity : nums2[mid2 - 1];
        
        const minRight1 = (mid1 === m) ? Infinity : nums1[mid1];
        const minRight2 = (mid2 === n) ? Infinity : nums2[mid2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            end = mid1 - 1;
        } else {
            start = mid1 + 1;
        }
    }
    
    return 0;
}
const m = Number(prompt("Enter the size of nums1:"));
const nums1 = prompt("Enter the elements of nums1:").split(" ").map(Number);

const n = Number(prompt("Enter the size of nums2:"));
const nums2 = prompt("Enter the elements of nums2:").split(" ").map(Number);
const result = findMedianSortedArrays(nums1, nums2);
console.log(result.toFixed(1));
