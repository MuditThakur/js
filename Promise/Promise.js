const checkEvenNumber = (number) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (number % 2 === 0) {
              resolve(`The number ${number} is even.`);
          } else {
              reject(`The number ${number} is odd.`);
          }
      }, 1000);
  });
};
//then and catch
checkEvenNumber(4)
    .then((message) => {
        console.log(message); // This block runs if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This block runs if the promise is rejected
    });

checkEvenNumber(3)
    .then((message) => {
        console.log(message); // This block runs if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This block runs if the promise is rejected
    });
