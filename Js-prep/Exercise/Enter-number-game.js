// const prompt = require("prompt-sync")();
let a = Math.random() * 100;
a = Number.parseInt(a);
let sc;
let score = 100;

while (sc != a) {
  score = score - 1;
  sc = prompt("Enter the number: ");
  sc = Number.parseInt(sc);

  if (sc == a) {
    console.log("You guessed the actual number!! " + a);
    console.log(`Guessed the number in ${100 - score} tries.`);
  } else if (sc > a && sc <= 100) {
    console.log("The number entered is greater than the actual number.");
  } else if (sc < a && sc >= 0) {
    console.log("The number entered is smaller than the actual number.");
  } else {
    console.log("Enter a number between 0 and 100.");
  }
}
