// Task 12
// Create a promise that will resolve in 5 seconds and return the string 'Promise Data'.
// Create a second promise that will reject upon clicking the "Cancel Promise" button. Add a handler for the button.
// Use the race method to organize "promise cancellation".

const p12_1 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise Data'), 5000);
})

const p12_2 = new Promise((resolve, reject) => {
    const cancelPromise = document.querySelector('#btn-cancel-promise');
    cancelPromise.addEventListener('click', () => {
        reject('Promise cancelled');
    })
});

Promise.race([p12_1, p12_2])
  .then((data) => {
      console.log(data);
  })
  .catch((error) => {
      console.log(error);
  });

// Task 13
// Create two promises. The first promise returns an object { name: "Anna" } after 2 seconds,
// the second promise is rejected with a value of "Promise Error".
// Run both promises in parallel and retrieve the results of those that complete successfully.

const p13_1 = new Promise((resolve) => {
    setTimeout(() => resolve({name: 'Anna'}), 2000);
})

const p13_2 = new Promise((resolve, reject) => {
    reject('Promise Error');
})

Promise.allSettled([p13_1, p13_2])
  .then((results) => {
    // тут можно применить метод .filter()
      results.forEach((result) => {
          if (result.status === "fulfilled") {
              console.log(result.value);
          }
      });
  })
  .catch((error) => {
      console.log(error);
  });

// Task 14
// Create two promises. The first promise returns an object { name: "Anna" } after 2 seconds,
// the second promise returns a default object { name: "Unknown" } after 1 second.
// Run both promises in parallel and retrieve the result of the one that resolves first.

const p14_1 = new Promise((resolve) => {
    setTimeout(() => resolve({name: 'Anna'}), 2000);
})

const p14_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Unknown" });
    }, 1000);
});

Promise.race([p14_1, p14_2])
  .then((result) => {
      console.log(result);
  })
  .catch((error) => {
      console.log(error);
  });
