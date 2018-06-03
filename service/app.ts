import * as express from "express";

import "../libs/sort.js";




var app = express();
app.use(express.static('tabCommunication'));
app.get("/", function (req, res) {
  // res.send("Hello world!");
  res.sendfile('tabCommunication/index.html')
});
app.use(express.static("public"));
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("app listening at http://%s:%s", host, port);
});

