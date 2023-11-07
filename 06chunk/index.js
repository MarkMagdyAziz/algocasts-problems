// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk (array, size) {
    let chunkedArray = [];
    let newArr = [];

    // Oterate over the target Array
    array.forEach((num, i) => {
        // Add numbers to the small array
        newArr.push(num);

        // Check incase the small array size is equal to the target size,
        // or it's the last element in the array
        if(newArr.length === size || i === array.length - 1) {
            // Push the small array to the chunked array
            chunkedArray.push([...newArr]);

            // Clear the small array
            newArr = [];
        }
    });
    return chunkedArray; // Return the chunked array
}
function chunk (array, size) {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    console.log(chunked)
    return chunked;
}
chunk([1, 2, 3, 4, 5], 2)
chunk([1, 2, 3, 4], 2)
module.exports = chunk;
