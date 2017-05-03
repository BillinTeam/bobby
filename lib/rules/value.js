"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sample, expected) {
  if (sample.constructor === Array) {
    return sample.length === expected.length && (0, _stringify2.default)(sample) === (0, _stringify2.default)(expected);
  }
  return sample === expected;
};