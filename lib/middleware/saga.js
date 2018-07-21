"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _effects = require("redux-saga/effects");

require("../actions/AdPage");

require("../actions/AdCreate");

var _Api = require("../api/Api");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchExample),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(postExample),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(mySaga);

//import Action


//import API


// ワーカー Saga: FETCH_EXAMPLE_DATA Action によって起動する
function fetchExample() {
	var data;
	return regeneratorRuntime.wrap(function fetchExample$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.prev = 0;
					_context.next = 3;
					return (0, _effects.call)(_Api.Api.fetchTest);

				case 3:
					data = _context.sent;
					_context.next = 6;
					return (0, _effects.put)({ type: "ONCHANGETITLE", title: data.title });

				case 6:
					_context.next = 12;
					break;

				case 8:
					_context.prev = 8;
					_context.t0 = _context["catch"](0);
					_context.next = 12;
					return (0, _effects.put)({ type: "EXAMPLE_FETCH_FAILED", message: _context.t0.message });

				case 12:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this, [[0, 8]]);
}

function postExample() {
	var data;
	return regeneratorRuntime.wrap(function postExample$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.prev = 0;
					_context2.next = 3;
					return (0, _effects.call)(_Api.Api.postTest);

				case 3:
					data = _context2.sent;
					_context2.next = 6;
					return (0, _effects.put)({ type: "ONCHANGETITLE", title: data.test2 });

				case 6:
					_context2.next = 12;
					break;

				case 8:
					_context2.prev = 8;
					_context2.t0 = _context2["catch"](0);
					_context2.next = 12;
					return (0, _effects.put)({ type: "EXAMPLE_FETCH_FAILED", message: _context2.t0.message });

				case 12:
				case "end":
					return _context2.stop();
			}
		}
	}, _marked2, this, [[0, 8]]);
}

/*
  FETCH_EXAMPLE_DATA Action が送出されるたびに fetchUser を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function mySaga() {
	return regeneratorRuntime.wrap(function mySaga$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_context3.next = 2;
					return (0, _effects.takeEvery)("FETCH_EXAMPLE_DATA", fetchExample);

				case 2:
					_context3.next = 4;
					return (0, _effects.takeEvery)("POST_EXAMPLE_DATA", postExample);

				case 4:
				case "end":
					return _context3.stop();
			}
		}
	}, _marked3, this);
}

/*
  代わりに takeLatest を使うこともできます。

  しかし、ユーザ情報の並列取得には対応しません。
  もしレスポンス待ちの状態で USER_FETCH_REQUESTED を受け取った場合、
  待ち状態のリクエストはキャンセルされて最後の1つだけが実行されます。
*/
// function* mySaga() {
// 	yield takeLatest("USER_FETCH_REQUESTED", fetchUser)
// }

exports.default = mySaga;