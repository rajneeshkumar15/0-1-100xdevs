/* doing something repeatedly until the specific condition is reached. 
    Components: 
        1. initialization: initialize a variable that serve counter. This step only happens once at the beginning.
        2. condition: specify a condition that determines when the loop should stop executing
        3. increment/decrement: how the counter variable changes after each iteration.
*/

// write a program that sum all the values from 0 to 1000.

let sum = 0;
for(let i = 0; i <= 1000; i++){
    sum += i;
}
console.log(sum);