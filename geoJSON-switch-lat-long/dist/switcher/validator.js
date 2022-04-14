"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geoSwitchValidator = void 0;

var _joi = _interopRequireDefault(require("joi"));

var geoSwitchValidator = _joi["default"].array().length(2).max(2).min(2);

exports.geoSwitchValidator = geoSwitchValidator;