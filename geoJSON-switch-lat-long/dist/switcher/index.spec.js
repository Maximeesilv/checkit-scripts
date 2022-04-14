"use strict";

var _figlet = require("figlet");

var _ = require(".");

describe('geoSwitch', function () {
  test('should make the switch between two values', function () {
    var mockLocation = [5, 6];
    expect((0, _.geoSwitch)(mockLocation)).toStrictEqual([6, 5]);
  });
  test('should throw when input does not respect expected schema', function () {
    var mockLocations = {
      empty: [],
      one: [1],
      tooMuch: [1, 2, 3]
    };
    expect(function () {
      (0, _.geoSwitch)(mockLocations.empty);
    }).toThrow();
    expect(function () {
      (0, _.geoSwitch)(mockLocations.one);
    }).toThrow();
    expect(function () {
      (0, _.geoSwitch)(mockLocations.tooMuch);
    }).toThrow();
  });
});