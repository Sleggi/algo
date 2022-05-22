function forEach (arr, cb) {
    for (let i = 0; i < arr.length; i ++) {
        cb(arr[i], i, arr)
    }
}

function map (arr, cb) {
    const newArray = [];
    // map returns new array
    for (let i = 0; i < arr.length; i ++) {
        newArray.push(cb(arr[i], i, arr))
    }
    return newArray;
}

function filter (arr, cb) {
    const newArray = [];
    for (let i = 0; i < arr.length; i ++) {
        const element = arr[i];
        // if our callback returns true, we push it in new array
        if (cb(element, i, arr)) newArray.push(element);
    }
    return newArray;
}

// reduce accepts array, cb and initialValue(optional)
function reduce (arr, cb, initialValue) {
    let currentValue = initialValue;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // if on first iteration our initialValue hasn't set, we set our current value (initial value) to the current element.
        if (initialValue == null && i === 0) {
            currentValue = element;
        }
        // if we have initial value 
        else {
            currentValue = cb(initialValue, element, i, arr)
        }
        
    }
    return currentValue
}
// === Reduce example === 

const people = [
    { name: 'Nick', age: 20 },
    { name: 'Mark', age: 21 },
    { name: 'Din', age: 20 },
    { name: 'Lilo', age: 30 },
]

const newMap = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if (!(age in groupedPeople)){ 
      groupedPeople[age] = []
    } 
    groupedPeople[age].push(person);
    return groupedPeople
}, {}) // {} - our initialValue

// returns 
// {
//     20: [{ name: 'Nick', age: 20 }, { name: 'Din', age: 20 },],
//     30: [{ name: 'Lilo', age: 30 }],
//     21: [{ name: 'Mark', age: 21 }]
// }


function some (arr, cb) {
    // if at least one element is true, return true
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) return true
        else return false
    }
}

function every (arr, cb) {
    // if at least one element is false, return false
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], i, arr)) return false
        else return true
    }
}

// flat accepts array and depth (by default it's 1)
function flat (arr, depth = 1) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // if our element is array and depth greate then 0
        if (Array.isArray(element) && depth > 0) {
            // we spread values which already saved in newArray and then push the new ones and decreasing depth
            newArray.push(...flat(element, depth - 1))
        } 
        // if our element not an array, (simple value), we push element into array
        else {
            newArray.push(element);
        }
    }
    return newArray;
}

function find (arr, cb) {
    // finds the very first element that matches the creteria and returns it
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (cb(element, i, arr)) return element
    }
}