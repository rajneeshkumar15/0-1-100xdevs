// Write a program that prints all the even numbers in an array

const arr = [21,22,23,24,25,26,27,28,29,30];
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}