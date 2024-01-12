// function solution (A) {
//     const orderedArray = A.sort((a, b) => a - b)
//     for(let index = 0; index < orderedArray.length; index++) {

//         if(orderedArray[index] != index + 1) {
//             return index + 1
//         }
//     }
// }


function solution (A) {
let ALen = A.length // sum -n * (n+1)/2

// equation calc the sum
let sum = (ALen+1) * (ALen+2) / 2

// array sum
let arrSum = 0

// calc the array sum
    for (let index = 0; index < ALen; index++) {
        console.log(A[index])
        arrSum += A[index]
    }

    // console.log(sum)
    // console.log(arrSum)
    // console.log(sum-arrSum)
    return sum - arrSum
}


const missingElement = solution([2, 3, 1, 5, 4, 6, 8,7,10,11])

console.log(missingElement)