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


//とりあえず適当な値をここでセット
//TODO : いい感じに外から注入する
var options = [{ text: "私の作った「　　」を見て！", value: "私の作った「」を見て！", key: 1 }, { text: "みんなで作った「　　」を見て！", value: "みんなで作った「」を見て！", key: 2 }, { text: "僕の描いた「　　」をツイートしてください", value: "僕の描いた「」をツイートしてください", key: 3 }];

var TitleCreateComponent = function (_Component) {
	_inherits(TitleCreateComponent, _Component);

	function TitleCreateComponent() {
		_classCallCheck(this, TitleCreateComponent);

		return _possibleConstructorReturn(this, (TitleCreateComponent.__proto__ || Object.getPrototypeOf(TitleCreateComponent)).apply(this, arguments));
	}

	_createClass(TitleCreateComponent, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			//propsの初期化をします
			//TODO : ランダムにしてみる
			//TODO : そもそもここに書くとページ遷移するたびに変わってよくない
			this.selectExample(options[0].value);
		}

		//フィールドの長さはAdCreatePage-TitleCreateComponentで定義

	}, {
		key: "InputExampleInput",
		value: function InputExampleInput() {
			var _this2 = this;

			return _react2.default.createElement(_semanticUiReact.Input, { placeholder: "\u30BF\u30A4\u30C8\u30EB\u3092\u5165\u529B\u3057\u3066\u306D", fluid: true,
				onChange: function onChange(event) {
					return _this2.onInputCharacter(event.target.value);
				},
				value: this.props.title });
		}
	}, {
		key: "DropdownExampleSelection",
		value: function DropdownExampleSelection() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Dropdown, { text: "\u4ED6\u306E\u4F8B\u306B\u5909\u3048\u3066\u307F\u308B",
				selectOnBlur: false,
				onChange: function onChange(event, data) {
					return _this3.selectExample(data.value);
				},
				fluid: true, selection: true, options: options });

			//TODO : 見た目のカスタマイズ
			// return (  <Dropdown text='他の例に変えてみる'>
			// 			      <Dropdown.Menu>
			// 			        {options.map(option => <Dropdown.Item key={option.key} {...option} />)}
			// 			      </Dropdown.Menu>
			// 				  </Dropdown>)
		}
	}, {
		key: "onInputCharacter",
		value: function onInputCharacter(value) {
			this.props.onChangeTitle(value);
		}
	}, {
		key: "selectExample",
		value: function selectExample(text) {
			this.props.onChangeTitle(text);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "AdCreatePage-TitleCreateComponent" },
				_react2.default.createElement(
					"div",
					{ className: "AdCreatePage-TitleCreateComponent-textfield-frame" },
					this.InputExampleInput()
				),
				_react2.default.createElement(
					"div",
					{ className: "AdCreatePage-TitleCreateComponent-select-frame" },
					this.DropdownExampleSelection()
				)
			);
		}
	}]);

	return TitleCreateComponent;
}(_react.Component);

exports.default = TitleCreateComponent;