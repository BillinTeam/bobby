'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.default = function (sample, expected) {
  if (typeof sample === 'undefined' || sample === null) return true;
  return expected === (0, _pattern2.default)(sample, regexp);
};