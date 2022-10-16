// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on("event", function firstListener() {
//   console.log("Helloooo! first listener");
// });
// // Second listener
// myEmitter.on("event", function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// // Third listener
// myEmitter.on("event", function thirdListener(...args) {
//   //   const parameters = args.join(", ");
//   console.log(`event with parameters ${args} in third listener`);
// });

// console.log(myEmitter.listeners("event"));

// myEmitter.emit("event", 1, 2, 3, 4, 5);

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// defined for example (function defined)
myEmitter.on("message", function () {
  console.log("called");
});

//call the emitter means (function called)
myEmitter.emit("message");

// ************** we can pass data also **************

myEmitter.on("passingData", function (event) {
  console.log("passingData", event);
});

myEmitter.emit("passingData", { id: 1, url: "/http" });
