"use strict";

var _Color = _interopRequireDefault(require("./classes/Color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colorService = new _Color["default"]();
console.log(colorService.getRandomColor());