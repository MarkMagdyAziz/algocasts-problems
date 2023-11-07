// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt (n) {
    let reversedStr = ''

    //step 1 convert the integer to string
    //step 2 reverse the string
    for(const number in n.toString()) {
        reversedStr = number + reversedStr
    }
    //step 3 convert back the string to an integer
    //step 4 assign the sign to the integer

    return parseInt(reversedStr) * Math.sign(n)
}
reverseInt(-5214)
module.exports = reverseInt;
