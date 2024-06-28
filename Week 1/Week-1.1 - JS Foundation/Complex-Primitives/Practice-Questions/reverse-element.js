const arr = [1,2,3,4,5];
let n = arr.length;
// swaping using start and end counter 
let temp = arr[0];
arr[0] = arr[n-1];
arr[n-1] = temp;

// print the array
for(let i = 0; i < n; i++){
    console.log(arr[i]);
}



/* 
    1. using build-in function reverse()

        arr.reverse();
        console.log(arr);

    2. for loop
    for(let i = 0; i< n / 2; i++){
        temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    
    console.log(arr);

*/ 

