"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxSaga = require("redux-saga");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _logger = require("./middleware/logger");

var _logger2 = _interopRequireDefault(_logger);

var _saga = require("./middleware/saga");

var _saga2 = _interopRequireDefault(_saga);

require("./index.css");

var _App = require("./components/App");

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require("./registerServiceWorker");

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//reducerを呼び出す
var sagaMiddleware = (0, _reduxSaga2.default)();
// Be sure to ONLY add this middleware in development


//install redux
var middleware = process.env.NODE_ENV !== "production" ? [_logger2.default, sagaMiddleware] : [sagaMiddleware];
//require("redux-immutable-state-invariant").default()を消しました

var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));

//register saga
sagaMiddleware.run(_saga2.default);

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(_App2.default, null)
), document.getElementById("root"));
(0, _registerServiceWorker2.default)();