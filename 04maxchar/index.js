// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar (str) {
    let charactersCount = {}
    let maxChar = ''
    let greaterCount = 0

    for(const char of str) {
        if(charactersCount[char]) {
            charactersCount[char]++
        } else {
            charactersCount[char] = 1
        }
        // if(charactersCount[char] > greaterCount) {
        //     greaterCount = charactersCount[char]
        //     maxChar = char
        // }
        for(const char in charactersCount) {
           if(charactersCount[char] > greaterCount){
            greaterCount = charactersCount[char]
            maxChar = char
           }
        }
    }
    return maxChar
}
maxChar("apple 1231111")
module.exports = maxChar;
