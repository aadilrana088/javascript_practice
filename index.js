//Hoisting

// getName();
// console.log(x);
// console.log(getName)

// var x = 3;

// function getName() {
//     console.log("Hello Aadil");
// }
// When we define a variable & print it before execution it is giving undefined, but when we log function it print whole function code, it happens before of memory execution phase

// getName();
// console.log(x);
// console.log(getName)

// var x = 3;

// function getName() {
//     console.log("Hello Aadil");
// }  // will be full function in global execution
// const getName3 = function() {
//     console.log("getName3");
// } //will treat it as variable, it will be undefined in global execution context
// const getName2 = () => {
//     console.log("Arrow function")
// } //arrow function will be treated it as variable, it will be undefined in global execution context

//FUNCTIONS

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x)
// }

// function b() {
//     var x = 100;
//     console.log(x)
// }

// Output will be 10, 100, 1

// // Small program
// var a = 10;
// console.log(a);
// console.log(window.a)
// console.log(this.a)

// SCOPE CHAIN

let x = 10;

function a() {
    var y = 20;
    b();
    function b() {
        console.log(y);
        console.log(x);
    }
}
a();

// When a function is invoked, a lexical environment is created which has its local variable and refrence to outer variable in which it is created, and this chain is called scope chain.