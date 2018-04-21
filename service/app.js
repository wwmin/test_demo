"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("../public/libs/test.js");
var app = express();
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.use(express.static("public"));
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("this app listening at http://%s:%s", host, port);
});
