// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse (str) {

//     const reversedString = str.split('').reverse().join('')

//     return reversedString
// }

// function reverse (str) {
//     const reversedString = str.split('').reduce((accum,currentChar,index,arr)=>{
//         return currentChar+accum
//     },'')
//     return reversedString
// }


function reverse (str) {
    let reversedString = ''
    for(const char of str) {
        reversedString = char + reversedString
    }
    return reversedString
}
reverse("MARK")
module.exports = reverse;
