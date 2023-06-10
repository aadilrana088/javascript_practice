//Hoisting

// getName();
// console.log(x);
// console.log(getName)

// var x = 3;

// function getName() {
//     console.log("Hello Aadil");
// }
// When we define a variable & print it before execution it is giving undefined, but when we log function it print whole function code, it happens before of memory execution phase

getName();
console.log(x);
console.log(getName)

var x = 3;

function getName() {
    console.log("Hello Aadil");
}  // will be full function in global execution
const getName3 = function() {
    console.log("getName3");
} //will treat it as variable, it will be undefined in global execution context
const getName2 = () => {
    console.log("Arrow function")
} //arrow function will be treated it as variable, it will be undefined in global execution context

// You can check the above by putting debugger