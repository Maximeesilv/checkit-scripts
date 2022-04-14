"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geoSwitch = geoSwitch;

var _validator = require("./validator");

/**
 * Will switch the values of the first index and last one
 * to match lat/lon or lon/lat
 * @param {Array} geoJson - [lat, lon]
 * @returns {Array} - [lon, lat]
 */
function geoSwitch() {
  var geoJson = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _geoSwitchValidator$v = _validator.geoSwitchValidator.validate(geoJson),
      error = _geoSwitchValidator$v.error,
      value = _geoSwitchValidator$v.value;

  if (error) throw new Error("GeoJson given not valid: ".concat(value));
  return [geoJson[1], geoJson[0]];
}