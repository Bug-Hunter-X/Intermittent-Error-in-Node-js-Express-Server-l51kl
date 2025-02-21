const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate an error that is only sometimes thrown
      throw new Error('Something went wrong!');
    } else {
      res.send('Hello, world!');
    }
  }, 1000); // Simulate a delay
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});