"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./AdCreatePage.css");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//css


//semantic UI


var ReturnSelectionComponent = function (_Component) {
	_inherits(ReturnSelectionComponent, _Component);

	function ReturnSelectionComponent() {
		_classCallCheck(this, ReturnSelectionComponent);

		return _possibleConstructorReturn(this, (ReturnSelectionComponent.__proto__ || Object.getPrototypeOf(ReturnSelectionComponent)).apply(this, arguments));
	}

	_createClass(ReturnSelectionComponent, [{
		key: "ButtonCreator",

		//TODO : <Button.Or>をつけたいけどやり方がわからない
		value: function ButtonCreator(id, text) {
			var _this2 = this;

			if (id === 1) {
				return _react2.default.createElement(
					_semanticUiReact.Button,
					{ key: id, onClick: function onClick() {
							return _this2.onClickButton(id);
						} },
					text
				);
			} else {
				return _react2.default.createElement(
					_semanticUiReact.Button,
					{ key: id, onClick: function onClick() {
							return _this2.onClickButton(id);
						} },
					" ",
					text,
					" "
				);
			}
		}
	}, {
		key: "ButtonGroupCreator",
		value: function ButtonGroupCreator(buttons) {
			var _this3 = this;

			var buts = buttons.map(function (button) {
				return _this3.ButtonCreator(button.id, button.text);
			});
			return _react2.default.createElement(
				_semanticUiReact.Button.Group,
				null,
				buts
			);
		}
	}, {
		key: "onClickButton",
		value: function onClickButton(id) {
			window.console.log(id);
			this.props.onClick(id);
		}
	}, {
		key: "render",
		value: function render() {
			var buttonGroup = this.ButtonGroupCreator(this.props.buttons);
			return _react2.default.createElement(
				"div",
				{ className: "AdCreatePage-ReturnSelectionComponent" },
				buttonGroup
			);
		}
	}]);

	return ReturnSelectionComponent;
}(_react.Component);

exports.default = ReturnSelectionComponent;