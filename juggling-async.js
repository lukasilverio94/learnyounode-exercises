"use strict";
const http = require("http");

const urls = process.argv.slice(2);

// Array to store the response data for each URL in the order they were provided
let results = Array(urls.length).fill(null);
let completedRequests = 0;

// function to make the request and handle data for each URL
urls.forEach((url, index) => {
  http.get(url, (response) => {
    let data = "";
    //collect data chunks
    response.on("data", (chunk) => {
      data += chunk;
    });

    //when response ends, store the data in the results array
    response.on("end", () => {
      results[index] = data;
      completedRequests++;

      // only print when all requests have completed
      if (completedRequests === urls.length) {
        results.forEach((result) => console.log(result));
      }
    });

    //handle errors
    response.on("error", (error) => {
      console.log(error);
    });
  });
});
