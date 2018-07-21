"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _AdCreateInfoReducer = require("./AdCreateInfoReducer.js");

var _AdCreateInfoReducer2 = _interopRequireDefault(_AdCreateInfoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reducerを結合します
exports.default = (0, _redux.combineReducers)({
	AdCreateInfo: _AdCreateInfoReducer2.default
});