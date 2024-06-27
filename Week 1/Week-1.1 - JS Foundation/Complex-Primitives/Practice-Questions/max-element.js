const arr = [21,22,23,24,25,26,27,28,29,33, 99,30,110];
let maxi = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i] > maxi){
        maxi = arr[i];
    }
}
console.log(maxi);