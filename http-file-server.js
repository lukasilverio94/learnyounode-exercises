const http = require("node:http");
const fs = require("fs");

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(res);

  // handle stream errors
  fileStream.on("error", (err) => {
    res.statusCode = 500;
    res.end("Internal Server Error: ", err);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
