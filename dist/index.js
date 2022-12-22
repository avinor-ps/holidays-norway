'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEaster = function getEaster(year) {
  var a = year % 19;
  var b = Math.floor(year / 100);
  var c = year % 100;
  var d = Math.floor(b / 4);
  var e = b % 4;
  var f = Math.floor((b + 8) / 25);
  var g = Math.floor((b - f + 1) / 3);
  var h = (19 * a + b - d - g + 15) % 30;
  var i = Math.floor(c / 4);
  var k = c % 4;
  var l = (32 + 2 * e + 2 * i - h - k) % 7;
  var m = Math.floor((a + 11 * h + 22 * l) / 451);
  var n0 = h + l + 7 * m + 114;
  var n = Math.floor(n0 / 31) - 1;
  var p = n0 % 31 + 1;
  return new Date(year, n, p);
};
var NORWEGIAN = 'no';
var ENGLISH = 'en';

exports.default = function (year) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var easter = getEaster(year);
  var locale = options.locale === ENGLISH ? ENGLISH : NORWEGIAN;
  var format = options.format === '' ? format : options.format;
  return [{
    name: locale === NORWEGIAN ? 'Skjærtorsdag' : 'Maundy Thursday',
    date: (0, _moment2.default)(easter).subtract(3, 'days').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? 'Langfredag' : 'Good Friday',
    date: (0, _moment2.default)(easter).subtract(2, 'days').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '1. påskedag' : 'First day of Easter',
    date: (0, _moment2.default)(easter).startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '2. påskedag' : 'Easter Monday',
    date: (0, _moment2.default)(easter).add(1, 'days').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? 'Kristi Himmelsprettsdag' : 'Christs Ascension Day',
    date: (0, _moment2.default)(easter).add(39, 'days').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '1. pinsedag' : 'Whit Sunday',
    date: (0, _moment2.default)(easter).add(49, 'days').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '2. pinsedag' : 'Whit Monday',
    date: (0, _moment2.default)(easter).add(50, 'days').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? 'Nyttårsdag' : 'New years day',
    date: (0, _moment2.default)().year(year).startOf('year').startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '1. mai' : 'May Day',
    date: (0, _moment2.default)().year(year).month('may').date(1).startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '17. mai' : 'Constitution Day',
    date: (0, _moment2.default)().year(year).month('may').date(17).startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? 'juleaften' : 'Christmas Eve',
    date: (0, _moment2.default)().year(year).month('december').date(24).startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '1. juledag' : 'Christmas Day',
    date: (0, _moment2.default)().year(year).month('december').date(25).startOf('day').format(format)
  }, {
    name: locale === NORWEGIAN ? '2. juledag' : 'Boxing Day',
    date: (0, _moment2.default)().year(year).month('december').date(26).startOf('day').format(format)
  }];
};
