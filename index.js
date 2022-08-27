const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

fs.watchFile("./clipboard.txt", (curr, prev) => {
  console.log(` file Changed,`);
  console.log(
    "The contents of the current file are:",
    fs.readFileSync("clipboard.txt", "utf8")
  );
});
