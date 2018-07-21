"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _AdImageUploader = require("./AdImageUploader");

var _AdImageUploader2 = _interopRequireDefault(_AdImageUploader);

require("./AdCreatePage.css");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Components


//css


//semantic UI


var ReturnCreateComponent = function (_Component) {
	_inherits(ReturnCreateComponent, _Component);

	function ReturnCreateComponent() {
		_classCallCheck(this, ReturnCreateComponent);

		return _possibleConstructorReturn(this, (ReturnCreateComponent.__proto__ || Object.getPrototypeOf(ReturnCreateComponent)).apply(this, arguments));
	}

	_createClass(ReturnCreateComponent, [{
		key: "renderAdCreate",
		value: function renderAdCreate() {
			var returnType = this.props.returnType;
			switch (returnType) {
				case 1:
					return this.imageAndText();
				case 2:
					return this.imageOnly();
				case 3:
					return this.textOnly();
				default:
					return "おや？";
			}
		}
	}, {
		key: "renderTextField",
		value: function renderTextField() {
			var _this2 = this;

			return _react2.default.createElement(
				_semanticUiReact.Form,
				null,
				_react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: "\u8AAC\u660E\u3092\u66F8\u3044\u3066\u306D", rows: 3,
					onChange: function onChange(event) {
						return _this2.props.onChangeText(event.target.value);
					}
				})
			);
		}
	}, {
		key: "imageAndText",
		value: function imageAndText() {
			var _this3 = this;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_AdImageUploader2.default, {
					onChangePictures: function onChangePictures(pictures) {
						return _this3.props.onChangePictures(pictures);
					}
				}),
				this.renderTextField()
			);
		}
	}, {
		key: "imageOnly",
		value: function imageOnly() {
			return _react2.default.createElement(_AdImageUploader2.default, null);
		}
	}, {
		key: "textOnly",
		value: function textOnly() {
			return _react2.default.createElement(
				"div",
				null,
				this.renderTextField()
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "AdCreatePage-ReturnCreateComponent" },
				this.renderAdCreate()
			);
		}
	}]);

	return ReturnCreateComponent;
}(_react.Component);

exports.default = ReturnCreateComponent;