
//   Given an array of positive integers representing the values of coins in your
//   possession, write a function that returns the minimum amount of change (the
//   minimum sum of money) that you cannot create. The given coins can have
//   any positive integer value and aren't necessarily unique (i.e., you can have
//   multiple coins of the same value)

  // input = [5, 7, 1, 1, 2, 3, 22]
  // output = 20

  // O(nlogn) time | O(1) space - where n is the number of coins
function nonConstructibleChange(coins) {
    // sort array to put highest number at the end
    coins.sort((a, b) =>  a - b);
    let currentChange = 0;
    for (const coin of coins) {
        // if our coin greater than current + 1 we just return coin + 1, because we cannot create this change + 1
        if (coin > currentChange + 1) return currentChange + 1
        // else simply add coin to the variable
        currentChange += coin
    }
    return currentChange + 1;
   }