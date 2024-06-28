/*
    The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
*/
function greet(){
    console.log("hi");
}
let myIntervel = setInterval(greet, 1*1000);