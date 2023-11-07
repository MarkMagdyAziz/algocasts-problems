// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     let reversedString = ''
//     for (const char of str) {
//         reversedString = char + reversedString
//     }
//     console.log(reversedString)
//     return reversedString === str

// }

function palindrome(str) {
    const check = str.split('').every((char,i)=>{
        return char === str[str.length - i - 1]
    })
    return check
}
palindrome("MARK")
module.exports = palindrome;
