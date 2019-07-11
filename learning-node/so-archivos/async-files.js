const fs = require("fs");

const file = process.argv[2];

if (!file) {
  throw new Error("Debes indicar el archivo que quieres leer");
}

const content = fs.readFile(file, function(err, content) {
  if (err) {
    return console.log(err);
  }

  const lines = content.toString().split("\n").length;
  console.log(lines);
});
