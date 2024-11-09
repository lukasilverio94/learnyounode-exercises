const net = require("node:net");

const PORT = process.argv[2];

const server = net.createServer((socket) => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hour}:${minute}\n`;

  socket.write(formattedDate);
  socket.end();
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
