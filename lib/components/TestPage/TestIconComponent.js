"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

require("./TestPage.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestIconComponent = function (_Component) {
	_inherits(TestIconComponent, _Component);

	function TestIconComponent(props) {
		_classCallCheck(this, TestIconComponent);

		var _this = _possibleConstructorReturn(this, (TestIconComponent.__proto__ || Object.getPrototypeOf(TestIconComponent)).call(this, props));

		_this.state = {
			index: 0
		};
		return _this;
	}

	_createClass(TestIconComponent, [{
		key: "onClickIcon",
		value: function onClickIcon() {
			if (this.state.index >= this.props.icons.length - 1) {
				this.setState({ index: 0 });
			} else {
				this.setState({ index: this.state.index + 1 });
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "TestIconComponent" },
				_react2.default.createElement(
					"div",
					{ className: "TestIconComponent-frame" },
					_react2.default.createElement(
						"p",
						{ className: "TestPage-icon TestPage-icon-clicked" },
						this.props.icons[this.state.index]
					),
					_react2.default.createElement(
						_semanticUiReact.Button,
						{ onClick: function onClick() {
								return _this2.onClickIcon();
							}, className: "TestIconComponent-Button" },
						"\u66F4\u65B0"
					)
				)
			);
		}
	}]);

	return TestIconComponent;
}(_react.Component);

exports.default = TestIconComponent;