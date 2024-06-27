// Function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Function call
greet("World");

// Anonymous function
const square = function(number) {
  return number * number;
};

// Arrow function
const cube = (number) => {
  return number * number * number;
};

// Function with default parameter
function multiply(a = 1, b = 1) {
  return a * b;
}

// Function with rest parameter
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
// Function call examples
console.log(square(5));
console.log(cube(3));
console.log(multiply(2, 3));
console.log(sum(1, 2, 3, 4, 5));