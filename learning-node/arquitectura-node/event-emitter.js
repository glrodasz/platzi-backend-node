const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("Starting"));
logger.on("finish", () => console.log("Finishing"));
logger.on("finish", () => console.log("It's Done"));

// logger.execute(() => console.log("hello world"));
logger.execute(() => setTimeout(() => console.log('hello world'), 500));
