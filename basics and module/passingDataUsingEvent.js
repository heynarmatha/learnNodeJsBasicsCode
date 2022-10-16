const EventEmitter = require("events");

const Logger = require("./eventPassing");
const logger = new Logger();

logger.on("message", function (event) {
  console.log("Passing Data", event);
});

logger.log("message");
