// if-else statement is a control flow structure that execute a block of code if a specified conditonis true and another block of code if the condition is false.

let username = "Rajneesh";  // string
let age = 22;   // integer
let isMarried = false;  // boolean

if(isMarried == true){
    console.log(username+" is married");
}else{
    console.log(username+" is not married");
}


/*
    Ternary Operator
    condition ? trueExpression : falseExpression
*/
console.log(isMarried ? 1 : 0);
console.log(isMarried? username+" is married" : username+" is not married");