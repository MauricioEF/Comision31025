"use strict";

var array = [1, 2, 3, 4, 5];
array.map(function (value) {
  return value * 2;
}).forEach(function (value) {
  return console.log(value);
});
