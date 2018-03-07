"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * @version 0.0.1
 * @name npm-component-project-template
 * @description by Dawdler
 * @author jinke.li
 */

var ComponentName = function (_PureComponent) {
  _inherits(ComponentName, _PureComponent);

  function ComponentName(props) {
    _classCallCheck(this, ComponentName);

    var _this = _possibleConstructorReturn(this, (ComponentName.__proto__ || Object.getPrototypeOf(ComponentName)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ComponentName, [{
    key: "render",
    value: function render() {
      return [_react2.default.createElement(
        "h2",
        { className: "title" },
        "react-component-project-template"
      ), _react2.default.createElement(
        "p",
        null,
        "By:",
        _react2.default.createElement(
          "a",
          { href: "https://github.com/lijinke666/dawdler", target: "_blank" },
          "Dawdler"
        )
      )];
    }
  }]);

  return ComponentName;
}(_react.PureComponent);

ComponentName.defaultProps = {};
ComponentName.PropTypes = {};
var _default = ComponentName;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ComponentName, "ComponentName", "src/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/index.js");
}();

;