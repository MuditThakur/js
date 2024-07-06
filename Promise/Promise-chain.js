// Creating a new promise that will resolve after 3 seconds
let promise = new Promise(function(resolve, reject) {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(() => {
    resolve("done"); // Resolving the promise with the value "done"
  }, 3000);
});

// Handling the resolved value of the first promise
promise.then((value) => {
  // Logging the resolved value of the first promise
  console.log(value); // Output: "done"

  // Creating another promise that will resolve after 3 seconds
  let p2 = new Promise(function(resolve, reject) {
    // Simulating another asynchronous operation using setTimeout
    setTimeout(() => {
      resolve("done2"); // Resolving the second promise with the value "done2"
    }, 3000);
  });

  // Returning the second promise to chain another .then() handler
  return p2;
}).then((value) => {
  // Logging the resolved value of the second promise
  console.log(value); // Output: "done2"

  // Indicating that all asynchronous operations are complete
  console.log("we are done"); // Output: "we are done"
});
