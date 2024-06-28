/*
    A callback is a function passed as an argument to another function
    This technique alloes a function to call another function
    A callback function can run after another function has finish
*/

function findSum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is: "+data);
}

function displayResultPassive(data){
    console.log("Sum's result is: "+data);
}

findSum(2,5, displayResult);


// Arithmetic Calculate using callback-function

function calculateArithmetic1(a, b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

let res1 = calculateArithmetic1(30, 10, sub);
console.log(res1);



