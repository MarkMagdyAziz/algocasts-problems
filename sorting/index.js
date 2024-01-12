// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort (arr) {
    console.log('arr' + arr)

    for(let index = 0; index < arr.length; index++) {

        for(let j = 0; j < (arr.length - index - 1); j++) {
            // console.log('arr[j]' + arr[j], 'arr[j+1]' + arr[j + 1])

            if(arr[j] > arr[j + 1]) {
                const temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
            console.log('index' + index + 'arr:' +arr)

        }
    }
    return arr
}

function selectionSort (arr) {

}

function mergeSort (arr) {

}

function merge (left, right) {

}
bubbleSort([100, -40, 500, -124, 0, 21, 7])
module.exports = {bubbleSort, selectionSort, mergeSort, merge};
