//   You're given a string of available characters and a string representing a
//   document that you need to generate. Write a function that determines if you
//   can generate the document using the available characters. If you can generate
//   the document, your function should return true, otherwise false

// === Sample ===
//   {
//     "characters": "Bste!hetsi ogEAxpelrt x ",
//     "document": "AlgoExpert is the Best!"
//   }
//   true

//   {
//     "characters": "heol",
//     "document": "hello"
//   }
//   false


// O(n + m) time | O(c) space - where n is the number of characters, m is
// the length of the document, and c is the number of unique characters in the characters string
function generateDocument(characters, document) {
    // create hash map
    const map = {};
    // iterate chars of characters
    for (char of characters) {
        // if we don't have char in map, create new with 0 value
        if (!(char in map)) map[char] = 0
        // else char ++
        map[char]++
    }
    // iterate docs
    for (docChar of document) {
        // if we have char in map AND value of this char > 0
        if ((docChar in map) && map[docChar] > 0) {
            // decrement this value
            map[docChar]--
        } 
        // if no char or value <= 0 we return false
        else return false
    }
    // return true if we can generate document 
    return true
}

