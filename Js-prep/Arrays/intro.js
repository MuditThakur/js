// Arrays are ordered collections of data.
// They can hold any type of data, including numbers, strings, objects, and even other arrays.
// Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

// Example 1: Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Example 2: Creating an array of strings
const names = ["John", "Jane", "Peter", "Mary"];

// Example 3: Creating an array of mixed data types
const mixedArray = [1, "hello", { name: "John" }, [1, 2]];

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(names[2]); // Output: Peter
console.log(mixedArray[1]); // Output: hello

// Modifying array elements
numbers[0] = 10;
console.log(numbers); // Output: [10, 2, 3, 4, 5]

// Array properties
console.log(numbers.length); // Output: 5
console.log(names.indexOf("Jane")); // Output: 1
console.log(mixedArray.includes("hello")); // Output: true

// Array methods
// Adding elements
numbers.push(6); // Add to the end
console.log(numbers); // Output: [10, 2, 3, 4, 5, 6]
numbers.unshift(0); // Add to the beginning
console.log(numbers); // Output: [0, 10, 2, 3, 4, 5, 6]

// Removing elements
numbers.pop(); // Remove from the end
console.log(numbers); // Output: [0, 10, 2, 3, 4, 5]
numbers.shift(); // Remove from the beginning
console.log(numbers); // Output: [10, 2, 3, 4, 5]

// Iterating over arrays
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using the forEach method
numbers.forEach((number) => {
  console.log(number);
});

// Slicing arrays
const slicedArray = numbers.slice(1, 3); // Output: [2, 3]
console.log(slicedArray);

// Splicing arrays
numbers.splice(1, 2); // Remove elements from index 1 to 2
console.log(numbers); // Output: [10, 4, 5]

// Sorting arrays
numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // Output: [4, 5, 10]

// Concatenating arrays
const combinedArray = numbers.concat(names);
console.log(combinedArray); // Output: [4, 5, 10, "John", "Jane", "Peter", "Mary"]

// Finding elements
console.log(names.find((name) => name === "Peter")); // Output: "Peter"

// Filtering arrays
const filteredArray = names.filter((name) => name.length > 4); // Output: ["Peter", "Mary"]
console.log(filteredArray);

// Mapping arrays
const mappedArray = numbers.map((number) => number * 2); // Output: [8, 10, 20]
console.log(mappedArray);

// Reducing arrays
const sum = numbers.reduce((total, number) => total + number, 0); // Output: 29
console.log(sum);
