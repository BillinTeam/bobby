'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sample, expected) {
  var valid = false;

  switch (typeof expected === 'undefined' ? 'undefined' : (0, _typeof3.default)(expected)) {

    case 'object':
      switch (sample.constructor) {

        case Number:
          {
            var isValid = [];

            if (expected.max_length) {
              isValid.push(sample.toString().length <= expected.max_length);
            }
            if (expected.min_length) {
              isValid.push(sample.toString().length >= expected.min_length);
            }
            valid = isValid.every(function (e) {
              return e;
            });
            break;
          }

        default:
          {
            var _isValid = [];

            if (expected.max_length) {
              _isValid.push(sample.length <= expected.max_length);
            }
            if (expected.min_length) {
              _isValid.push(sample.length >= expected.min_length);
            }
            valid = _isValid.every(function (e) {
              return e;
            });
            break;
          }

      }
      break;

    default:
      switch (sample.constructor) {

        case Number:
          valid = sample.toString().length === expected;
          break;

        default:
          valid = sample.length === expected;
          break;

      }
  }

  return valid;
};