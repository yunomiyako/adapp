"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var logger = function logger(store) {
	return function (next) {
		return function (action) {
			window.console.group(action.type);
			window.console.info("dispatching", action);

			var result = next(action);

			window.console.log("next state", store.getState());
			window.console.groupEnd(action.type);

			return result;
		};
	};
};

exports.default = logger;