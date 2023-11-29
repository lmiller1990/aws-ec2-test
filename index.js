"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var PORT = 5555;
var app = express();
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, function () { return console.log("Listening on ".concat(PORT)); });
