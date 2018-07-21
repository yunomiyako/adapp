"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./AdCreatePage.css");

require("semantic-ui-react");

var _TitleCreateComponent = require("./TitleCreateComponent");

var _TitleCreateComponent2 = _interopRequireDefault(_TitleCreateComponent);

var _DecorateImageComponent = require("./DecorateImageComponent");

var _DecorateImageComponent2 = _interopRequireDefault(_DecorateImageComponent);

var _AdImageUploader = require("./AdImageUploader");

var _AdImageUploader2 = _interopRequireDefault(_AdImageUploader);

var _DescriptionCreateComponent = require("./DescriptionCreateComponent");

var _DescriptionCreateComponent2 = _interopRequireDefault(_DescriptionCreateComponent);

var _ReturnSelectionComponent = require("./ReturnSelectionComponent");

var _ReturnSelectionComponent2 = _interopRequireDefault(_ReturnSelectionComponent);

var _ReturnCreateComponent = require("./ReturnCreateComponent");

var _ReturnCreateComponent2 = _interopRequireDefault(_ReturnCreateComponent);

var _TypeSelectionComponent = require("./TypeSelectionComponent");

var _TypeSelectionComponent2 = _interopRequireDefault(_TypeSelectionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Semantic UI


// Components


//TODO : 説明もっとわかりやすく
var adTypeButtons = [{ id: 0, btnText: "ツイート\nしてもらう", description: "あなたが宣伝してほしいことをツイートしてもらいます。" }, { id: 1, btnText: "リツイート\nしてもらう", description: "宣伝してほしいツイートをリツイートしてもらいます。" }, { id: 2, btnText: "見てもらう\n　", description: "ただ見てほしい文章と画像を設定します。" }];

var AdCreatePage = function (_Component) {
	_inherits(AdCreatePage, _Component);

	function AdCreatePage() {
		_classCallCheck(this, AdCreatePage);

		return _possibleConstructorReturn(this, (AdCreatePage.__proto__ || Object.getPrototypeOf(AdCreatePage)).apply(this, arguments));
	}

	_createClass(AdCreatePage, [{
		key: "onClickOk",
		value: function onClickOk() {
			window.console.log("次へ");
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var frameStyle = {
				height: "auto",
				width: "auto",
				maxWidth: "500px"
			};

			return _react2.default.createElement(
				"div",
				{ className: "AdCreatePage" },
				_react2.default.createElement(
					"div",
					{ className: "ComponentFrame", style: frameStyle },
					_react2.default.createElement(
						"h1",
						{ className: "AdCreatePage-Title" },
						"\u3057\u3066\u3082\u3089\u3044\u305F\u3044\u3053\u3068\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044"
					),
					_react2.default.createElement(_TypeSelectionComponent2.default, {
						onClick: function onClick(id) {
							return _this2.props.onChangeAdType(id);
						},
						onClickOk: function onClickOk() {
							return _this2.onClickOk();
						},
						type: this.props.adType,
						buttons: adTypeButtons
					})
				),
				_react2.default.createElement(
					"style",
					{ jsx: true },
					"\n\t\t\t\t\t.ComponentFrame {\n\t\t\t\t\t\tbackground:#00b894;\n\t\t\t\t\t\t-webkit-border-radius: 10px 10px 10px 10px;\n\t\t\t\t\t\tborder-radius: 10px 10px 10px 10px;\n\t\t\t\t\t\tpadding:10px;\n\t\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t\t}\n\t\t\t\t\t"
				)
			);
		}
	}]);

	return AdCreatePage;
}(_react.Component);

exports.default = AdCreatePage;