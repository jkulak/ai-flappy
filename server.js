const hostname = "0.0.0.0";
const port = 3003;

const express = require("express");
const server = express();
server.use(function(req, res, next) {
  console.log("🌍 " + req.url + " was requested.");
  next();
});
server.use("/", express.static(__dirname + "/public"));

server.listen(port, hostname, () => {
  console.log(`👌🏼 Server running at http://${hostname}:${port}/`);
});
