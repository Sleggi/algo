
//   Write a function that takes in an array of integers and returns a sorted
//   version of that array. Use the Bubble Sort algorithm to sort the array.

// Space = O(1) (runs in place); Time = O(N^2) - looping multiple times until get sorted

function bubbleSort(array) {
    let isSorted = false;
    while (!isSorted) {
		isSorted = true;
		// - 1 because we comparing nimber to the next one, so we don't need the final value
		for (let i = 0; i < array.length - 1; i ++) {
			if (arry[i] > array[i + 1]) {
				swap(i, i + 1, array)
				isSorted = false;
			}
		}
	}
	return array;
}

function swap(i, j, array) {
	const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}