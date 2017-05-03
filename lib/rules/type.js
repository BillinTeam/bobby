'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sample, expected) {
  if (typeof sample === 'undefined' || sample === null) return true;
  return sample.constructor === expected;
};