// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid (n) {
    const midpoint = Math.floor(n / 2);
    const midpoint2 = Math.floor((2 * n - 1) / 2);
    console.log(midpoint)
    console.log(midpoint2)

    for(let col = 0; col <= n; col++) {
        let logStr = ''
        for(let row = 0; row <= n; row++) {
            if(row <= col) {
                logStr += "#"
            }
            else {
                logStr += " "
            }
        }

    }
}
pyramid(23)
module.exports = pyramid;
