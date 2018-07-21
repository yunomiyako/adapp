"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./Header.css");

var _logo = require("../../images/logo.svg");

var _logo2 = _interopRequireDefault(_logo);

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentLink = function ContentLink(title, link) {
	_classCallCheck(this, ContentLink);

	this.title = title;
	this.link = link;
};

var link1 = new ContentLink("アド表示画面", "/ad_page");
var link2 = new ContentLink("アド作成", "/ad_create");
var contentLink = [link1, link2];

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "renderLink",
		value: function renderLink() {
			return contentLink.map(function (link) {
				return _react2.default.createElement(
					_reactRouterDom.Link,
					{ key: link.title, to: link.link, className: "item" },
					link.title
				);
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "Header" },
				_react2.default.createElement(
					"header",
					{ className: "Header-header" },
					_react2.default.createElement(
						"div",
						{ className: "ui fixed inverted menu" },
						_react2.default.createElement(
							"div",
							{ className: "ui container" },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: "/", className: "header item" },
								_react2.default.createElement("img", { className: "logo", src: _logo2.default, alt: "LOGO" }),
								"Ad App"
							),
							this.renderLink()
						)
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

exports.default = Header;