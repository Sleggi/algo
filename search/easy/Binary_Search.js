
//   Write a function that takes in a sorted array of integers as well as a target
//   integer. The function should use the Binary Search algorithm to determine if
//   the target integer is contained in the array and should return its index if it
//   is, otherwise -1;

// Time = O(log n), Space = O(1)
function binarySearch(array, target) {
    // determine left and right of our array
    let left = 0;
    let right = array.length - 1;
    // while left < right
    while (left <= right) {
        // determine mid point of an array, index
        let mid = Math.floor((left + right) / 2);
        // variable match to check for our element (we take mid point for this)
        const match = array[mid];
            if (target === match) {
                return mid;
            } else if (target < match) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }