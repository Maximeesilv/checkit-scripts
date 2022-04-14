"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _figlet = _interopRequireDefault(require("figlet"));

var _db = require("./db");

console.log(_figlet["default"].textSync('Checkit - GeoJSON Switch'));
var db = await (0, _db.connectToDb)();
db.collection('events');
console.log(_figlet["default"].textSync('All events down here'));
var elements = await events.find();
console.log(elements);