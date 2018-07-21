"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchExampleData = fetchExampleData;
exports.exampleFetchSucceeded = exampleFetchSucceeded;
exports.exampleFetchFailed = exampleFetchFailed;
var FETCH_EXAMPLE_DATA = exports.FETCH_EXAMPLE_DATA = "FETCH_EXAMPLE_DATA";
function fetchExampleData() {
	return {
		type: FETCH_EXAMPLE_DATA
	};
}

var EXAMPLE_FETCH_SUCCEEDED = exports.EXAMPLE_FETCH_SUCCEEDED = "EXAMPLE_FETCH_SUCCEEDED";
function exampleFetchSucceeded(data) {
	return {
		type: EXAMPLE_FETCH_SUCCEEDED,
		data: data
	};
}

var EXAMPLE_FETCH_FAILED = exports.EXAMPLE_FETCH_FAILED = "EXAMPLE_FETCH_FAILED";
function exampleFetchFailed(message) {
	return {
		type: EXAMPLE_FETCH_FAILED,
		message: message
	};
}