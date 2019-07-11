const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, enconding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
