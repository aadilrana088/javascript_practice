//Hoisting

getName();
console.log(x);
console.log(getName)

var x = 3;

function getName() {
    console.log("Hello Aadil");
}

// When we define a variable & print it before execution it is giving undefined, but when we log function it print whole function code, it happens before of memory execution phase