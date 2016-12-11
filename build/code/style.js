"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.heading = exports.code = undefined;

var _colors = require("../colors");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    backgroundColor: _colors2.default.tiber,
    color: _colors2.default.white,
    padding: "0.5em",
    margin: "1em"
};
var code = exports.code = {
    margin: "2em",
    display: "block"
};

var heading = exports.heading = {
    margin: 0
};