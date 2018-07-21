"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require("react-redux");

var _AdPage = require("../../components/AdPage/AdPage");

var _AdPage2 = _interopRequireDefault(_AdPage);

var _AdCreate = require("../../actions/AdCreate");

var _AdPage3 = require("../../actions/AdPage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleClick = function _handleClick(dispatch) {
	dispatch((0, _AdPage3.fetchExampleData)());
};

var _handleClickU = function _handleClickU(dispatch) {
	var url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/select2";
	fetch(url, {
		method: "GET"
	}).then(function (response) {
		return response.json();
	}).then(function (json) {
		dispatch((0, _AdCreate.onChangeTitle)("id:" + json[0][0]));
	}).catch(function (error) {
		window.console.log(error);
	});
};

function mapStateToProps(state) {
	window.console.log(state.AdCreateInfo.title);
	return {
		title: state.AdCreateInfo.title,
		description: state.AdCreateInfo.description
	};
}
function mapDispatchToProps(dispatch) {
	return {
		handleClick: function handleClick() {
			return _handleClick(dispatch);
		},
		handleClickU: function handleClickU() {
			return _handleClickU(dispatch);
		}
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AdPage2.default);