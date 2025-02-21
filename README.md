# Intermittent Error in Node.js Express Server

This repository demonstrates a bug where a Node.js Express server sometimes throws an error that is not handled properly, causing the server to crash. The error is simulated by randomly throwing an exception within an asynchronous operation. 

## Bug Description

A Node.js Express server is designed to handle requests. However, due to a flaw in error handling, an exception might be thrown during an asynchronous operation causing the process to terminate unexpectedly.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `node bug.js` to start the server.
4. Send requests to `http://localhost:3000`. You will notice the server sometimes crashes.

## Solution

The solution involves using a `try...catch` block to handle the error properly, preventing the server from crashing.  The solution is available in `bugSolution.js`.

## Technologies Used

* Node.js
* Express.js