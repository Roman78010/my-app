"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var x = 25,
  y = 10;
var coords = {
  x: x,
  // Аналогично: x: x,
  y: y,
  // Аналогично: y: y
  calcSq: function calcSq() {
    console.log(this.x * this.y);
  } // Аналогично: calcSq: function() {
  //     console.log(this.x * this.y);
  // }
};
coords.calcSq(); // 250

console.log(coords);
var user = {
  name: {
    first: 'Sam',
    second: 'Smith'
  },
  pass: 'qwerty',
  rights: 'user'
};

// const userName = user.name;
var _user$name = user.name,
  first = _user$name.first,
  second = _user$name.second,
  pass = user.pass,
  rights = user.rights;
console.log(first, second, rights);
function connect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$host = _ref.host,
    host = _ref$host === void 0 ? 'localhost' : _ref$host,
    _ref$port = _ref.port,
    port = _ref$port === void 0 ? 3000 : _ref$port,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? 'default' : _ref$user;
  console.log("host: ".concat(host, ", port: ").concat(port, ", user: ").concat(user));
}

// connect({
//   port: 232,
//   host: 'sasd'
// });

connect(); // host: localhost, port: 3000, user: default
// connect(); Если никаких параметров не передать в вызов функции то произойдет ошибка, так как не будет свойств которые можно деструктурировать. Но можно избавиться от этой ошибки назначив объекту который передается в качестве аргумета внутри функции значение по умолчанию пустой объект. 

var numbers = [[3, 5], [6, 6]];
var _numbers$ = _slicedToArray(numbers[0], 2),
  a = _numbers$[0],
  b = _numbers$[1],
  _numbers$2 = _slicedToArray(numbers[1], 2),
  c = _numbers$2[0],
  d = _numbers$2[1];
console.log(a, b, c, d);
var country = {
  name: 'England',
  population: 2000000,
  gender: {
    male: ['15%', '40%'],
    female: ['16%', '29%']
  }
};

// country.gender.male[0];
var _country$gender = country.gender,
  _country$gender$male = _slicedToArray(_country$gender.male, 2),
  maleUnder18 = _country$gender$male[0],
  maleAdult = _country$gender$male[1],
  _country$gender$femal = _slicedToArray(_country$gender.female, 2),
  femaleUnder18 = _country$gender$femal[0],
  femaleAdult = _country$gender$femal[1];
console.log(maleUnder18, femaleAdult);