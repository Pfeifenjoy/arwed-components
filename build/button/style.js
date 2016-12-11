"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.active = exports.hover = undefined;

var _extends2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors = require("../colors");

var _colors2 = _interopRequireDefault(_colors);

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _extends({}, _style.text, (_extends2 = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "none",
    justifyContent: "center",
    padding: "0.5em",
    borderRadius: "0.1em"
}, _defineProperty(_extends2, "borderRadius", "0.2em"), _defineProperty(_extends2, "display", "flex"), _defineProperty(_extends2, "alignItems", "center"), _defineProperty(_extends2, "backgroundColor", _colors2.default.silver), _defineProperty(_extends2, "cursor", "pointer"), _defineProperty(_extends2, "boxShadow", "0 3px 0 0 #007299"), _defineProperty(_extends2, "outline", "none"), _defineProperty(_extends2, "display", "block"), _defineProperty(_extends2, "marginBottom", 0), _extends2));
var hover = exports.hover = {
    opacity: "0.9"
};

var active = exports.active = {
    transform: "translateY(3px)",
    boxShadow: "none"
};