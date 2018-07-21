"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./AdCreatePage.css");

var _reactSlick = require("react-slick");

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _tanpopo_frame = require("../../images/tanpopo_frame.png");

var _tanpopo_frame2 = _interopRequireDefault(_tanpopo_frame);

var _neko_frame = require("../../images/neko_frame.png");

var _neko_frame2 = _interopRequireDefault(_neko_frame);

var _sumaho_frame = require("../../images/sumaho_frame.png");

var _sumaho_frame2 = _interopRequireDefault(_sumaho_frame);

var _kusa_frame = require("../../images/kusa_frame.png");

var _kusa_frame2 = _interopRequireDefault(_kusa_frame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//css


//semantic UI
//import { Input } from 'semantic-ui-react'
//import { Dropdown } from 'semantic-ui-react'


//images


var frameImages = [{ name: "tanpopo_frame", img: _tanpopo_frame2.default }, { name: "neko_frame", img: _neko_frame2.default }, { name: "sumaho_frame", img: _sumaho_frame2.default }, { name: "kusa_frame", img: _kusa_frame2.default }];
function imageNameToPath(imageName) {
	return frameImages.filter(function (image) {
		return image.name === imageName;
	})[0];
}

var SimpleSlider = function (_React$Component) {
	_inherits(SimpleSlider, _React$Component);

	function SimpleSlider() {
		_classCallCheck(this, SimpleSlider);

		return _possibleConstructorReturn(this, (SimpleSlider.__proto__ || Object.getPrototypeOf(SimpleSlider)).apply(this, arguments));
	}

	_createClass(SimpleSlider, [{
		key: "onClickImage",
		value: function onClickImage(imageName) {
			this.props.onClickImage(imageName);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var frameImagesTag = frameImages.map(function (image) {
				return _react2.default.createElement(
					"div",
					{ onClick: function onClick() {
							return _this2.onClickImage(image.name);
						},
						key: image.name, className: "AdCreatePage-ImageSelectSlider-ImageFrame" },
					_react2.default.createElement("img", { src: image.img, alt: "1", className: "AdCreatePage-ImageSelectSlider-Image" })
				);
			});

			var settings = {
				dots: true,
				infinite: false,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 1
			};

			return _react2.default.createElement(
				_reactSlick2.default,
				_extends({}, settings, { onChange: this.props.onChange }),
				frameImagesTag
			);
		}
	}]);

	return SimpleSlider;
}(_react2.default.Component);

var DecorateImageComponent = function (_Component) {
	_inherits(DecorateImageComponent, _Component);

	function DecorateImageComponent() {
		_classCallCheck(this, DecorateImageComponent);

		return _possibleConstructorReturn(this, (DecorateImageComponent.__proto__ || Object.getPrototypeOf(DecorateImageComponent)).apply(this, arguments));
	}

	_createClass(DecorateImageComponent, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			//propsの初期化をします
			this.props.onSetImage(frameImages[0]);
		}
	}, {
		key: "setImage",
		value: function setImage(imageName) {
			var imageInfo = imageNameToPath(imageName);
			this.props.onSetImage(imageInfo);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(
				"div",
				{ className: "AdCreatePage-DecorateImageComponent" },
				_react2.default.createElement(
					"div",
					{ className: "AdCreatePage-DecorateImageComponent-ImageFrame" },
					_react2.default.createElement(
						"div",
						{ className: "AdCreatePage-DecorateImageComponent-ImageFrame-WithText" },
						_react2.default.createElement(
							"p",
							{ className: "AdCreatePage-DecorateImageComponent-title" },
							this.props.title
						),
						_react2.default.createElement(
							"p",
							{ className: "AdCreatePage-DecorateImageComponent-description" },
							this.props.description
						),
						_react2.default.createElement("img", { alt: "\u753B\u50CF", src: this.props.decorationImage.img, className: "AdCreatePage-DecorateImageComponent-Image" })
					)
				),
				_react2.default.createElement(SimpleSlider, { onClickImage: function onClickImage(imageName) {
						return _this4.setImage(imageName);
					} })
			);
		}
	}]);

	return DecorateImageComponent;
}(_react.Component);

exports.default = DecorateImageComponent;