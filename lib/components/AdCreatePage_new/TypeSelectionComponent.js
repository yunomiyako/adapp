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


//TODO : なんか違うんだよなあ・・・
function renderNewLine(text) {
	return text.split("\n").map(function (m) {
		return _react2.default.createElement(
			"p",
			{ key: m },
			m
		);
	});
}

var TypeSelectionComponent = function (_Component) {
	_inherits(TypeSelectionComponent, _Component);

	function TypeSelectionComponent() {
		_classCallCheck(this, TypeSelectionComponent);

		return _possibleConstructorReturn(this, (TypeSelectionComponent.__proto__ || Object.getPrototypeOf(TypeSelectionComponent)).apply(this, arguments));
	}

	_createClass(TypeSelectionComponent, [{
		key: "renderButtons",
		value: function renderButtons(buttons) {
			var _this2 = this;

			return buttons.map(function (btn) {
				if (_this2.props.type === btn.id) {
					return _react2.default.createElement(
						"div",
						{ key: btn.id, className: "button" + (btn.id + 1) },
						_react2.default.createElement(
							_semanticUiReact.Button,
							{ disabled: true, key: btn.id, onClick: function onClick() {
									return _this2.props.onClick(btn.id);
								} },
							renderNewLine(btn.btnText)
						)
					);
				} else {
					return _react2.default.createElement(
						"div",
						{ key: btn.id, className: "button" + (btn.id + 1) },
						_react2.default.createElement(
							_semanticUiReact.Button,
							{ key: btn.id, onClick: function onClick() {
									return _this2.props.onClick(btn.id);
								} },
							renderNewLine(btn.btnText)
						)
					);
				}
			});
		}
	}, {
		key: "renderDescription",
		value: function renderDescription(buttons) {
			if (this.props.type !== -1) {
				return buttons[this.props.type].description;
			}
		}
	}, {
		key: "renderOkButton",
		value: function renderOkButton() {
			var _this3 = this;

			if (this.props.type !== -1) {
				return _react2.default.createElement(
					_semanticUiReact.Button,
					{ onClick: function onClick() {
							return _this3.props.onClickOk();
						} },
					"OK"
				);
			}
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "TypeSelectionComponent" },
				_react2.default.createElement(
					"div",
					{ className: "grid-container" },
					this.renderButtons(this.props.buttons),
					_react2.default.createElement(
						"div",
						{ className: "description" },
						_react2.default.createElement(
							"p",
							{ className: "description-text" },
							this.renderDescription(this.props.buttons)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "okButtonArea" },
						_react2.default.createElement(
							"div",
							{ className: "okButton" },
							this.renderOkButton()
						)
					),
					_react2.default.createElement(
						"style",
						{ jsx: true },
						"\n\t\t\t\t\t\t.description-text {\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.grid-container {\n\t\t\t\t\t\t  display: grid;\n\t\t\t\t\t\t  height: 100%;\n\t\t\t\t\t\t\tgap: 20px 3px;\n\t\t\t\t\t\t  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n\t\t\t\t\t\t  grid-template-rows: 1fr 1fr;\n\t\t\t\t\t\t  grid-template-areas: \"button1 button1 button1 button2 button2 button2 button3 button3 button3\" \". description description description description description description description okButtonArea\";\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.button1 {\n\t\t\t\t\t\t  grid-area: button1;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.button2 {\n\t\t\t\t\t\t  grid-area: button2;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.button3 {\n\t\t\t\t\t\t  grid-area: button3;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.description {\n\t\t\t\t\t\t  grid-area: description;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.okButtonArea {\n\t\t\t\t\t\t  display: grid;\n\t\t\t\t\t\t  grid-area: okButtonArea;\n\t\t\t\t\t\t  grid-template-columns: 1fr 1fr;\n\t\t\t\t\t\t  grid-template-rows: 1fr 1fr;\n\t\t\t\t\t\t  grid-template-areas: \". .\" \". okButton\";\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.okButton {\n\t\t\t\t\t\t  grid-area: okButton;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t"
					)
				)
			);
		}
	}]);

	return TypeSelectionComponent;
}(_react.Component);

exports.default = TypeSelectionComponent;