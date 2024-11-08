// ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.

// Example as input to filter .js files:
// node filtered-ls.js "/home/lucas/Documents/development/Nodejs/learnyounode/" js

const fs = require("fs");

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    throw new Error(err);
  }

  const lines = data.split("\n");
  console.log(lines.length - 1); // subtract 1 because the last line may not have a newline
});
