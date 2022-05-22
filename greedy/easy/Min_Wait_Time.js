//   You're given a non-empty array of positive integers representing the amounts
//   of time that specific queries take to execute. Only one query can be executed
//   at a time, but the queries can be executed in any order.

// A query's waiting time is defined as the amount of time that it must
// wait before its execution starts. In other words, if a query is executed
// second, then its waiting time is the duration of the first query; if a query
// is executed third, then its waiting time is the sum of the durations of the
// first two queries.

// === Sample ===
//   {
//     "queries": [3, 2, 1, 2, 6]
//   }
//   17


function minimumWaitingTime(queries) {
    // sort in asc order is the best choice because minimum waiting time for the elemtns which left
    queries.sort((a,b) => a - b);
    let time = 0;
    for (let i = 0; i < queries.length; i++) {
        // take the duration of current element
        const duration = queries[i];
        // take ammount of queries left
        const queriesLeft = queries.length - (i + 1);
        // multiply the duration of current element on ammount of queries left and summ it to all time
        time += duration * queriesLeft
    }
    return time
  }
  