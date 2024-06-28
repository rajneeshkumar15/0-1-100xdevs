/*
    Function are set of code which performs somethings for us.
    Function are used to modularise code
    Function are used to increase readability
    Function are used to use same code multiple time
*/

function sum(a, b){
    const sumValue = a + b;
    return sumValue;
}

let res = sum(5,8);
console.log(res);

console.log();

function reverseArray(arr, n){
    for(let i=0;i<n/2;i++){
        let temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
}
const arr = [1,2,3];
let n = arr.length;
reverseArray(arr, n);
for(let i=0;i<n;i++){
    console.log(arr[i]);
}