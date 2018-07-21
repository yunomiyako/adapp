"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactImagesUpload = require("react-images-upload");

var _reactImagesUpload2 = _interopRequireDefault(_reactImagesUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdImageUploader = function (_React$Component) {
	_inherits(AdImageUploader, _React$Component);

	function AdImageUploader(props) {
		_classCallCheck(this, AdImageUploader);

		//this.state = {pictures : this.props.pictures}
		var _this = _possibleConstructorReturn(this, (AdImageUploader.__proto__ || Object.getPrototypeOf(AdImageUploader)).call(this, props));

		_this.onDrop = _this.onDrop.bind(_this);
		return _this;
	}

	_createClass(AdImageUploader, [{
		key: "onDrop",
		value: function onDrop(pictureFiles) {
			this.props.onChangePictures(pictureFiles);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_reactImagesUpload2.default, {
				withPreview: true,
				withIcon: true,
				buttonText: "Choose images",
				onChange: this.onDrop,
				imgExtension: [".jpg", ".jpeg", ".png", ".gif"],
				maxFileSize: 5242880
			});
		}
	}]);

	return AdImageUploader;
}(_react2.default.Component);

exports.default = AdImageUploader;