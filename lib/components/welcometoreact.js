"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.C_React = exports.C_To = exports.C_Welcome = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C_Welcome = exports.C_Welcome = function C_Welcome() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"h1",
			null,
			"welcome"
		)
	);
};

var C_To = exports.C_To = function C_To() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"h1",
			null,
			"to"
		)
	);
};

var C_React = exports.C_React = function C_React() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(
			"h1",
			null,
			"react"
		)
	);
};