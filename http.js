const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Welome to Home Page");
    res.end();
  }
  if (req.url == "/api/v1") {
    res.write("API List Page: ");
    res.end();
  }
  if (req.url == "") {
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(3000);

console.log("started");
