'use strict';

function bubble(arr) {

    for ( let n = 0; n < arr.length; n++ ) {
        for(let i = 0; i < arr.length - 1; i++) {

            if(arr[i] > arr[i + 1]){

                let swap = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = swap
            }
        }
    }
    return arr
}
console.log(bubble([3,5,7,2,6,8,1,9,4]));