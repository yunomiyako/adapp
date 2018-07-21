"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// API
var Api = exports.Api = {
	fetchJson: function fetchJson(url) {
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (body) {
			return body;
		});
	},
	postJson: function postJson(url, params) {
		return fetch(url, {
			mode: "cors",
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		}).then(function (response) {
			return response.json();
		}).then(function (response) {
			return response.body;
		});
	},
	fetchTest: function fetchTest() {
		var url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/justReturnAdData";
		return Api.fetchJson(url);
	},
	postTest: function postTest() {
		var url = "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp/testpost";
		var params = { "test1": "こんにちは〜〜", "test2": "こんばんは〜" };
		return Api.postJson(url, params);
	}
};