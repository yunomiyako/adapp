"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = AdCreateInfo;

var _AdCreate = require("../actions/AdCreate");

var _AdCreateInfoDataStructure = require("../domain/AdCreateInfoDataStructure");

var _AdCreateInfoDataStructure2 = _interopRequireDefault(_AdCreateInfoDataStructure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// immutable state change helper
var dotProp = require("dot-prop-immutable");

//データ構造
function AdCreateInfo() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _AdCreateInfoDataStructure2.default;
	var action = arguments[1];

	switch (action.type) {
		case _AdCreate.ON_CHANGE_AD_TYPE:
			return dotProp.set(state, "adType", action.adType);

		case _AdCreate.ON_CHANGE_TITLE:
			return dotProp.set(state, "title", action.title);

		case _AdCreate.ON_CHANGE_RETURN_DESCRIPTION:
			return dotProp.set(state, "returnDescription", action.returnDescription);

		case _AdCreate.ON_CHANGE_AD_OBJECT:
			return dotProp.set(state, "adObject", action.adObject);

		case _AdCreate.ON_CHANGE_RETURN_TYPE:
			return dotProp.set(state, "returnType", action.returnType);

		case _AdCreate.ON_CHANGE_RETURN_OBJECT:
			return dotProp.set(state, "returnObject", action.returnObject);

		default:
			return state;
	}
}