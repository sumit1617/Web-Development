var x = 10;
function example() {
  var y = 20;
  console.log(x); // Output: 10
  console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Error: y is not defined

let a = 30;
if (true) {
  let b = 40;
  console.log(a); // Output: 30
  console.log(b); // Output: 40
}
console.log(a); // Output: 30
console.log(b); // Error: b is not defined

const PI = 3.14;
console.log(PI); // Output: 3.14
PI = 3.14159; // Error: Assignment to constant variable.

const person = {
  name: "John",
  age: 30,
};
console.log(person.name); // Output: John
person.name = "Jane"; // Allowed: Modifying the object's properties
console.log(person.name); // Output: Jane
