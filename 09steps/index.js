// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps (n) {
//     for(let row = 0; row < n; row++) {
//         let logStr = ''

//         for(let col = 0; col < n; col++) {
//             if(col <= row){
//                 logStr += "#"
//             }else {
//                 logStr += ' '
//             }

//         }
//         console.log(logStr)
//     }
// }

function steps (n, row = 0, stair = '') {
    if(row === n) {
        return;
    }

    if(n === stair.length) {
        console.log(stair)
        return steps(n, row + 1, '')
    }
    const char = stair.length <= row ? "#" : ' '
    steps(n, row + 1, stair + char)
}
steps(4)
module.exports = steps;
