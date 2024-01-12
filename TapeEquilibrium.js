// Task Description:
// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 is less than P and P is less than N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:

// class Solution { public int solution(int[] A); }

// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

// For example, given:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000]


// function solution (A) {
//     const ALen = A.length
//     const secondPart = []
//     let counter = 0

//     for(let i = 0; i < ALen-1; i++) {
//         let secondCounter = 0

//         const firstPointerElement = A[i];

//         counter = counter + firstPointerElement
//         // console.log(counter)


//         for(let j = ALen; j >= 0; j--) {
//             console.log(A[j-1])
//             const secondPointerElement = A[j];

//             secondCounter = secondCounter + secondPointerElement

//             // console.log("second ",secondCounter)
//         }

//         // console.log("first ",firstPointerElement)


//     }
// }

function solution (A){
    const sum = A.reduce((coml,num)=>coml+num,0)
    let rightSum = sum
    let leftSum = 0
    const ALen = A.length

    let minDiff = Number.MAX_VALUE

    for (let index = 0; index < ALen-1; index++) {
         leftSum = A[index] + leftSum
         rightSum = sum - A[index]
         let difference = Math.abs(leftSum - rightSum);
         minDiff = Math.min(minDiff, difference);
    }
    console.log(minDiff)

    return minDiff

}
solution([3, 1, 2, 4, 3])

