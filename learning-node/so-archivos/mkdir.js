const fs = require("fs");

fs.mkdir("platzi/escuela-js/node", { recursive: true }, err => {
  if (err) {
    return console.log(err);
  }
});
