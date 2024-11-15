const http = require("http");

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding("utf-8");

  response.on("data", (data) => {
    console.log(data);
  });

  // optional error
  response.on("error", (error) => {
    console.log(error);
  });

  response.on("end", () => {
    console.log("");
  });
});
