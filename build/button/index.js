"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _style = require("./style");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this.state = {
            hover: false,
            active: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: "setHover",
        value: function setHover(hover) {
            this.setState({
                hover: hover
            });
            return Promise.resolve();
        }
    }, {
        key: "setActive",
        value: function setActive(active) {
            this.setState({ active: active });
            return Promise.resolve();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                children = _props.children,
                type = _props.type,
                _onMouseEnter = _props.onMouseEnter,
                _onMouseLeave = _props.onMouseLeave,
                _onMouseDown = _props.onMouseDown,
                _onMouseUp = _props.onMouseUp,
                props = _objectWithoutProperties(_props, ["style", "children", "type", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp"]);

            style = _extends({}, this.style, style);

            return _react2.default.createElement(
                "button",
                _extends({
                    ref: "button",
                    style: style,
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setHover(true).then(_onMouseEnter);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setHover(false).then(_onMouseLeave);
                    },
                    onMouseDown: function onMouseDown() {
                        return _this2.setActive(true).then(_onMouseDown);
                    },
                    onMouseUp: function onMouseUp() {
                        return _this2.setActive(false).then(_onMouseUp);
                    }
                }, props),
                children
            );
        }
    }, {
        key: "style",
        get: function get() {
            var style = _style2.default;
            if (this.state.hover) {
                style = _extends({}, style, _style.hover);
            }
            if (this.state.active) {
                style = _extends({}, style, _style.active);
            }
            return style;
        }
    }]);

    return Button;
}(_react.Component);

exports.default = Button;