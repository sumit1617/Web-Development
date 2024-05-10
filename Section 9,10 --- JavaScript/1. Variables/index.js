console.log("---- Hoisting ----");

getName();
console.log(x);

var x = 5;

function getName() {
  console.log("Hello world");
}

console.log("---- Variable Concept ----");
var a; // Declare a variable without initializing it
var b = 5; // Initialize a variable with a value

console.log(a); // undefined
console.log(b);

var x;
console.log(x); // Output: undefined
x = 10;
console.log(x);
x = "hello world";
console.log(x);

function doSomething() {
  // This function does not return anything explicitly,
  // so it returns undefined by default
}
console.log(doSomething()); // Output: undefined

console.log(y); // ReferenceError: y is not defined
