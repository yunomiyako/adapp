"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var questions = [{
	sentence: "これはタイピングゲームです",
	eng: "korehataipinguge-mudesu"
}, {
	sentence: "二問目だよー",
	eng: "2monmedayo-"
}, {
	sentence: "明日は晴れますように",
	eng: "ashitahaharemasuyouni"
}];

var TypingComponent = function (_Component) {
	_inherits(TypingComponent, _Component);

	function TypingComponent(props) {
		_classCallCheck(this, TypingComponent);

		var _this = _possibleConstructorReturn(this, (TypingComponent.__proto__ || Object.getPrototypeOf(TypingComponent)).call(this, props));

		_this.state = {
			text: "",
			sentence: questions[0].sentence,
			eng: questions[0].eng,
			index: 0,
			question: 0,
			count: 0
		};
		return _this;
	}

	_createClass(TypingComponent, [{
		key: "renderText",
		value: function renderText() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"span",
					{ className: "correctString" },
					" ",
					this.state.eng.substr(0, this.state.index)
				),
				_react2.default.createElement(
					"span",
					null,
					this.state.eng.substr(this.state.index, this.state.eng.length - this.state.index)
				)
			);
		}
	}, {
		key: "onKeyPressed",
		value: function onKeyPressed(e) {
			if (this.state.eng[this.state.index] === e.key) {
				this.setState({ index: this.state.index + 1 });
				this.setState({ count: this.state.count + 1 });
			}

			if (this.state.index === this.state.eng.length) {
				this.setState({ question: this.state.question + 1 });
				this.setState({ index: 0 });
				this.setState({ sentence: questions[this.state.question].sentence });
				this.setState({ eng: questions[this.state.question].eng });
			}

			if (this.state.question === questions.length) {
				this.setState({ question: 0 });
				this.setState({ index: 0 });
				this.setState({ sentence: questions[0].sentence });
				this.setState({ eng: questions[0].eng });
			}
		}
	}, {
		key: "addSushi",
		value: function addSushi() {
			return "🍣".repeat(this.state.count + 1);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "TypingComponent",
					onKeyDown: function onKeyDown(e) {
						return _this2.onKeyPressed(e);
					},
					tabIndex: "0" },
				_react2.default.createElement(
					"h1",
					null,
					this.addSushi()
				),
				_react2.default.createElement(
					"h1",
					null,
					this.state.sentence
				),
				_react2.default.createElement(
					"h1",
					null,
					this.renderText()
				),
				_react2.default.createElement(
					"style",
					{ jsx: true },
					"\n\t\t\t\t\t.TypingComponent {\n\t\t\t\t\t\tbackground:white;\n\t\t\t\t\t}\n\t\t\t\t\t.correctString {\n\t\t\t\t\t\tcolor:red;\n\t\t\t\t\t}\n\t\t\t\t\t"
				)
			);
		}
	}]);

	return TypingComponent;
}(_react.Component);

exports.default = TypingComponent;