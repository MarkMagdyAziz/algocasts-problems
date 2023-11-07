// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
    let stringACountChars = buildCharMap(stringA)
    let stringBCountChars = buildCharMap(stringB)
    if(Object.keys(stringACountChars).length !== Object.keys(stringBCountChars).length) {
        return false;
    }

    for(let char in stringACountChars) {
        if(stringACountChars[char] !== stringBCountChars[char]) {
            return false;
        }
    }

    return true;
    // return JSON.parse(JSON.stringify(stringACountChars)) === JSON.parse(JSON.stringify(stringBCountChars))

}




function buildCharMap (str) {
    let stringCountChars = {}

    for(const charA of str.toLowerCase()) {
        if(stringCountChars[charA]) {
            stringCountChars[charA]++
        } else {
            stringCountChars[charA] = 1
        }
    }
    return stringCountChars
}
anagrams('rail safety', 'fairy tales')
module.exports = anagrams;
