"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require("react-redux");

var _AdCreatePage = require("../../components/AdCreatePage_new/AdCreatePage");

var _AdCreatePage2 = _interopRequireDefault(_AdCreatePage);

var _AdCreate = require("../../actions/AdCreate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
	return {
		adType: state.AdCreateInfo.adType,
		title: state.AdCreateInfo.title,
		returnDescription: state.AdCreateInfo.returnDescription,
		adObject: state.AdCreateInfo.adObject,
		returnType: state.AdCreateInfo.returnType,
		returnObject: state.AdCreateInfo.returnObject
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeAdType: function onChangeAdType(adType) {
			return dispatch((0, _AdCreate.onChangeAdType)(adType));
		},
		onChangeTitle: function onChangeTitle(title) {
			return dispatch((0, _AdCreate.onChangeTitle)(title));
		},
		onChangeReturnDescription: function onChangeReturnDescription(returnDescription) {
			return dispatch((0, _AdCreate.onChangeReturnDescription)(returnDescription));
		},
		onChangeAdObject: function onChangeAdObject(adObject) {
			return dispatch((0, _AdCreate.onChangeAdObject)(adObject));
		},
		onChangeReturnType: function onChangeReturnType(returnType) {
			return dispatch((0, _AdCreate.onChangeReturnType)(returnType));
		},
		onChangeReturnObject: function onChangeReturnObject(returnObject) {
			return dispatch((0, _AdCreate.onChangeReturnObject)(returnObject));
		}
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AdCreatePage2.default);