"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDb = connectToDb;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function connectToDb() {
  return _connectToDb.apply(this, arguments);
}

function _connectToDb() {
  _connectToDb = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongoose["default"].connect(process.env.MONGO_APP + process.env.MONGO_PWD + process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            }, function (err, client) {
              if (err) console.log(err);
              if (client) console.log('Connection Established with Database, Ready to play');
            });

          case 2:
            return _context.abrupt("return", _mongoose["default"]);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _connectToDb.apply(this, arguments);
}