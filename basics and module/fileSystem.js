const fs = require("fs");

const fileAsync = fs.readdirSync("./");
console.log("Result Async", fileAsync);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
