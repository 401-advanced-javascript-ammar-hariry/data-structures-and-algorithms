'use strict';

function insertShiftArray(arr, num) {

    //tlogic : this will work with if arr.length is even 
    //  let half = arr.length / 2; 

    // this will return the closest value to arr.length / 2 if the  arr.length is odd
    let half = Math.floor(arr.length / 2);
    let shiftedArr = [];

    shiftedArr[half] = num; // add the numer we have bassed to the middle index of the new array
    for (let i = 0; i < half; i++) { // this loop will iterat a half of array
        shiftedArr[i] = arr[i];
    }
    for (let i = arr.length; i > half; i--) { // this loop will iterat the rest of array reversly
        shiftedArr[i] = arr[i - 1];
    }
    return shiftedArr;
}

console.log(insertShiftArray([4, 8, 23, 42], 16));