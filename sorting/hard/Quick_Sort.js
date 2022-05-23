

// Worst = O(N^2) time N - length of the array
// Best (if pivot cuts array in the halth) = O(N * log(N)) time
// O(log(N)) space
function quickSort(array) { 
	// we put our array, first index, last index to helper function
  quickSortHelper(array, 0, array.length -1);
	return array;
}

function quickSortHelper(array, startIdx, endIdx) {
	// base case, length of the array is 1
	if (startIdx >= endIdx) {
		return
	}
	let pivotIdx = startIdx;
	let leftIdx = startIdx + 1;
	let rightIdx = endIdx;
	while (rightIdx >= leftIdx) {
		// if left index greater then pivot and right index less then pivot
		if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
			// swap indexes 
			swap(leftIdx, rightIdx, array)
		}
		// if array left index less then pivot
		if (array[leftIdx] <= array[pivotIdx]) {
			// increment left index
			leftIdx++
		}
		if (array[rightIdx] >= array[pivotIdx]) {
			rightIdx--
		}
	}
	// spawn indexes, move pivot to the right of the array
	swap(pivotIdx, rightIdx, array)
	// check which side of the array is smaller
	const leftSubArrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
	// if left is smaller call sorting on left side first
	if (leftSubArrayIsSmaller) {
		quickSortHelper(array, startIdx, rightIdx - 1);
		quickSortHelper(array, rightIdx + 1, endIdx)
	} else {
		quickSortHelper(array, rightIdx + 1, endIdx)
		quickSortHelper(array, startIdx, rightIdx - 1);
	}
}

function swap (i, j, array) {
	let temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}