'use strict';


function BinarySearch(arr, num) {

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === num) {
            return 1;
        }
    }
    return -1;
}

console.log(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90));

module.exports = BinarySearch;