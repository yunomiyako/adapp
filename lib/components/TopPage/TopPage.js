"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./TopPage.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopPage = function (_Component) {
	_inherits(TopPage, _Component);

	function TopPage() {
		_classCallCheck(this, TopPage);

		return _possibleConstructorReturn(this, (TopPage.__proto__ || Object.getPrototypeOf(TopPage)).apply(this, arguments));
	}

	_createClass(TopPage, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "TopPage" },
				_react2.default.createElement(
					"div",
					{ className: "ui animated button", tabIndex: "0" },
					_react2.default.createElement(
						"div",
						{ className: "visible content" },
						"Next"
					),
					_react2.default.createElement(
						"div",
						{ className: "hidden content" },
						_react2.default.createElement("i", { className: "right arrow icon" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "ui vertical animated button", tabIndex: "0" },
					_react2.default.createElement(
						"div",
						{ className: "hidden content" },
						"Shop"
					),
					_react2.default.createElement(
						"div",
						{ className: "visible content" },
						_react2.default.createElement("i", { className: "shop icon" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "ui labeled button", tabIndex: "0" },
					_react2.default.createElement(
						"div",
						{ className: "ui button" },
						_react2.default.createElement("i", { className: "heart icon" }),
						" Like"
					),
					_react2.default.createElement(
						"a",
						{ className: "ui basic label" },
						"0"
					)
				),
				_react2.default.createElement(
					"button",
					{ className: "ui twitter button" },
					_react2.default.createElement("i", { className: "twitter icon" }),
					"Twitter"
				)
			);
		}
	}]);

	return TopPage;
}(_react.Component);

exports.default = TopPage;