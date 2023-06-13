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

// // SCOPE CHAIN

// let x = 10;

// function a() {
//     var y = 20;
//     b();
//     function b() {
//         console.log(y);
//         console.log(x);
//     }
// }
// a();

// // When a function is invoked, a lexical environment is created which has its local variable and refrence to outer variable in which it is created, and this chain is called scope chain.

//LET & CONST

// console.log(b);
// let a = 10;
// var b = 20 //normal execution

// console.log(a)
// let a = 10;
// var b = 20
// // a variable will be in temporal dead zone, it will not be accessible & it will give reference error

// const a;
// a = 500;
// console.log(a);
// let a = 20;
// let a = 30;
// console.log(a);

// Both the above case will produce result of syntax error, because you can't define let again, and you have initialize const once it is defined

//Block and Scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// In this a will be window, b & c and local scopped, so its output will be 10, 20, 30
// Uncaught ReferenceError: b is not defined

// var x = 10;
// let y = 20
// {
//     var x = 100;
//     let y = 200;
//     console.log(x)
//     console.log(y)
// }
// console.log(x)
// console.log(y)
// Output will be 100, 200, 100, 20
// because var is global scoped and y is local scoped and same is case with const, it is also locally await scoped
// Shodowing is overwritting a variable within its scoped

// Closure
// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();
// Y function has access to a because of lexical environment, x is closure for y.

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 100
//     return y
// }
// var z = x()
// console.log(z)
// z();

// function with its lexial environment bundled together is called closures.
// As per above example when cursor moves to line 138, x should be removed from memory, so at line 139, when we execute  z() it should not print anything, but it will print as it remembers its lexical environment because of clousres

// function z() {
//     var a = 10;
//     function y() {
//         var b = 100;
//         function x() {
//             console.log(a, b)
//         }
//         x();
//     }
//     y();
// }
// z();
// Output will be 10, 100. As it remebers all its parent lexical environment of closure (z) and closure (y)

//Settimeout & Closures
// function x() {
//     setTimeout(() => {
//         console.log("SetTimeout");
//     }, 1000);
//     console.log("Outside Closures")
// }
// x();

// function x() {
//     for (let i=0; i< 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         },[i*1000])
//     }
// }
// x()
// it print 0 to 5 becuause let is locally scoped, if we use var instead of let it will print 5 five times becuase it reference to global scoped.

// function x() {
//     for (var i=0; i< 5; i++) {
//         function closure(x) {
//             setTimeout(() => {
//                 console.log(x)
//             },[x*1000])
//         }
//         closure(i)
//     }
// }
// x()
// We can acheive the above functionality while using let by creating closure and calling it.

// function outer() {
//     function inner() {
//         console.log(x);
//     }
//     let x = 10;
//     return inner
// }
// let result = outer()();

// function outest() {
//     let a = 10;
//     function outer(b) {
//         let c = 30;
//         function inner() {
//             console.log(a, b, c)
//         }
//         return inner
//     }
//     return outer
// }
// let a = 40;
// let result  = outest()(20);
// result();
// Both let a has different scoped, it will prints its first parent

// Data hiding using closures
// function counter() {
//     let count = 0;
//     return function increamentCount() {
//         count++
//         console.log(count)
//     }
// }
// const counter1 = counter();
// counter1();
// counter1();

// const counter2 = counter();
// counter2();

// setTimeout(() => {
//     console.log('timer');
// }, 5000);

// function x(y) {
//     console.log('x');
//     y()
// }

// x(function y() {
//     console.log('y');
// });
// function attachEventListener() {
//     let count = 0;
//     document
//         .getElementById('clickMe')
//         .addEventListener('click', function xyz() {
//             console.log('Clicked', ++count);
//         });
// }
// attachEventListener();

// const radius = [2, 3, 4, 5];

// const calculateArea = function (radius) {
//     let output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//     let output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// };

// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//     let output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };

// console.log(calculateDiameter(radius));
// const radius = [2, 3, 4, 5];

// const area = function (radius) {
//     return Math.PI * radius * radius;
// };

// const cirumference = function (radius) {
//     return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//     return 2 * radius;
// };

// const calculate = function (arr, logic) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]))
//     }
//     return output
// };

// console.log(calculate(radius, area))
// console.log(radius.map(area))

// console.log(calculate(radius, cirumference))
// console.log(calculate(radius, diameter))

// Array.prototype.mapCalculate = function(logic) {
//     let output = [];
//     for (let i = 0; i< this.length;i++) {
//         output.push(logic(this[i]))
//     }
//     return output
// }

// console.log(radius.mapCalculate(area))
// console.log(radius.map(area))

// This is like map function

// Map, filter & Reduce;

// const arr = [2, 4, 6, 7, 3, 5];

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// let sumFilter = arr.reduce(function (acc, curr) {
//     return acc + curr;
// }, 0);
// console.log(sumFilter);

// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(arr));

// const maxFilter = arr.reduce(function (acc, curr) {
//     if(acc < curr) {
//         acc = curr;
//     }
//     return acc
// }, 0);

// console.log(maxFilter);

const users = [
    { firstName: 'Aadil', lastName: 'Rana', age: 24 },
    { firstName: 'Dilber', lastName: 'Hussain', age: 50 },
    { firstName: 'Saud', lastName: 'Khan', age: 26 },
    { firstName: 'Naqui', lastName: 'Hasan', age: 26 },
];

const fullName = users.map(user => {
    return `${user.firstName} ${user.lastName}`
})

console.log(fullName)  //Output (4) ['Aadil Rana', 'Dilber Hussain', 'Saud Khan', 'Naqui Hasan']

const result = users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc
},{})

console.log(result); //Output {24: 1, 25: 1, 26: 2}

//First Name of all people whose age is less than 30

let firstNameAge = users.filter(user => user.age < 30).map(user => user.firstName)

console.log(firstNameAge); //Output (3) ['Aadil', 'Saud', 'Naqui']

let firstNameAgeReduce = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc
},[] )

console.log(firstNameAgeReduce);
// The Above functionality is achieved using reduce function