"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

require("./styles/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YourComponent = (_temp = _class =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(YourComponent, _PureComponent);

  function YourComponent(props) {
    var _this;

    _classCallCheck(this, YourComponent);

    _this = _possibleConstructorReturn(this, (YourComponent.__proto__ || Object.getPrototypeOf(YourComponent)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(YourComponent, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement("h2", {
        className: "title",
        key: "title"
      }, "react-component-project-template"), _react2.default.createElement("p", {
        key: "p"
      }, "By:", _react2.default.createElement("a", {
        href: "https://github.com/lijinke666/dawdler",
        target: "_blank"
      }, "Dawdler")));
    }
  }]);

  return YourComponent;
}(_react.PureComponent), _class.defaultProps = {}, _class.propTypes = {}, _temp);
exports.default = YourComponent;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(YourComponent, "YourComponent", "src\\index.js");
}();

;