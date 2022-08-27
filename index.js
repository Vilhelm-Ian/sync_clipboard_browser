const fs = require("fs");

fs.watchFile("./clipboard.txt", (curr, prev) => {
  console.log(` file Changed`);
});
