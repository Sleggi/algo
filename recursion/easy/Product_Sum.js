
//   Write a function that takes in a "special" array and returns its product sum.

//   A "special" array is a non-empty array that contains either integers or other
//   "special" arrays. The product sum of a "special" array is the sum of its
//   elements, where "special" arrays inside it are summed themselves and then
//   multiplied by their level of depth.

  // array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

  //12 = calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

// O(n) time | O(d) space
  function productSum(array, multiplier = 1) {
	let summ = 0;
    for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (Array.isArray(element)){
                summ += productSum(element, multiplier + 1)
            } else {
                summ += element;
            }
        }
	return summ * multiplier;
}