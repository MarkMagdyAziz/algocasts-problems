// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize (str) {
//     // convert the string to an array
//     let arrOfWords = str.split(' ')

//     // map over the array and do your work
//     arrOfWords = arrOfWords.map((word) => {
//         // let arrOfChars = word.split('')
//         // arrOfChars[0] = arrOfChars[0].toUpperCase()
//         // return arrOfChars.join('')

//         // return the capitilized word
//         return word[0].toUpperCase() + word.slice(1);
//     })
//     // convert back the array to string
//     return arrOfWords.join(' ')
// }

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }

    return result;
  }

capitalize('look, it is working!')
module.exports = capitalize;
