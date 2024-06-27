// for...in loop
const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

// for...of loop
const myArray = ["apple", "banana", "cherry"];

for (const item of myArray) {
  console.log(item);
}
