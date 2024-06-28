
let arr =[1,2,3,45,5]


let updated = arr.map((value,element,arrays) => {
  console.log(value,element,arrays)
  return value + 1;
});
console.log(updated);


let arr2 =[1,2,3,4,5,6,7,4,,5,4,5456,675,45,34,5,4645]
let updated2 = arr2.filter((a)=>
  {
    return a>15
  })
console.log(updated2.sort())
// Map example: Square each number in an array
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Reduce example: Sum all the numbers in an array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Filter example: Get all the even numbers from an array
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]