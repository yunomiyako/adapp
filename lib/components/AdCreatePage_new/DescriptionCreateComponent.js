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


var DescriptionCreateComponent = function (_Component) {
	_inherits(DescriptionCreateComponent, _Component);

	function DescriptionCreateComponent() {
		_classCallCheck(this, DescriptionCreateComponent);

		return _possibleConstructorReturn(this, (DescriptionCreateComponent.__proto__ || Object.getPrototypeOf(DescriptionCreateComponent)).apply(this, arguments));
	}

	_createClass(DescriptionCreateComponent, [{
		key: "componentWillMount",
		value: function componentWillMount() {}
		//propsの初期化をします


		//フィールドの長さはAdCreatePage-TitleCreateComponentで定義

	}, {
		key: "renderTextArea",
		value: function renderTextArea() {
			var _this2 = this;

			return _react2.default.createElement(
				_semanticUiReact.Form,
				null,
				_react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: "\u8AAC\u660E\u3092\u66F8\u3044\u3066\u306D", rows: 2,
					onChange: function onChange(event) {
						return _this2.onInputCharacter(event.target.value);
					},
					value: this.props.description
				})
			);
		}
	}, {
		key: "onInputCharacter",
		value: function onInputCharacter(value) {
			this.props.onChangeDescription(value);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "AdCreatePage-DescriptionCreateComponent" },
				this.renderTextArea()
			);
		}
	}]);

	return DescriptionCreateComponent;
}(_react.Component);

exports.default = DescriptionCreateComponent;