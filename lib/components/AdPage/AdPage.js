"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.currentUserToken = currentUserToken;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("semantic-ui-react");

require("./AdPage.css");

var _awsAmplify = require("aws-amplify");

var _awsAmplify2 = _interopRequireDefault(_awsAmplify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Amplify.configure({
// 	Auth: {
// 	// REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
// 	identityPoolId: 'ap-northeast-1:5183ad74-c3f0-4c8c-8e32-933f1facc1a4',

// 	// REQUIRED - Amazon Cognito Region
// 	region: 'ap-northeast-1',

// 	// OPTIONAL - Amazon Cognito User Pool ID
// 	userPoolId: 'ap-northeast-1_izJ2ZYlI4',

// 	// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
// 	userPoolWebClientId: '66e23f4d85bqerqpf2134hi0qm',

// 	// OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
// 	// authenticationFlowType: 'USER_PASSWORD_AUTH'
// 	},
// 	API: {
// 		endpoints: [
// 			{
// 			name: "select3",
// 			endpoint: "https://z98adm64i2.execute-api.ap-northeast-1.amazonaws.com/adApp",
// 			region: "ap-northeast-1"
// 			}
// 			]
// 	}
// });

_awsAmplify2.default.configure({
	Auth: {
		// REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
		identityPoolId: "ap-northeast-1:62e8666f-2e39-4600-912c-a7c9332e2450",

		// REQUIRED - Amazon Cognito Region
		region: "ap-northeast-1",

		// OPTIONAL - Amazon Cognito User Pool ID
		userPoolId: "ap-northeast-1_SHqZXcVuV",

		// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
		userPoolWebClientId: "5khuql00f2mviggho5ligs92db"

		// OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
		// authenticationFlowType: 'USER_PASSWORD_AUTH'
	}
});

var api1 = function api1() {
	_awsAmplify.Auth.currentAuthenticatedUser().then(function (user) {
		var jwtToken = user.signInUserSession.idToken.jwtToken;
		console.log(jwtToken);
		var options = {
			headers: {
				Authorization: jwtToken
			}
		};
		_awsAmplify.API.get("select3", "/select3", options).then(function (response) {
			console.log("成功: " + response);
		}).catch(function (err) {
			console.log(err);
		});
	});
};

function currentUserToken() {
	return _awsAmplify.Auth.currentAuthenticatedUser().then(function (user) {
		console.log(user.signInUserSession.idToken.jwtToken);
	});
}

var AdPage = function (_Component) {
	_inherits(AdPage, _Component);

	function AdPage() {
		_classCallCheck(this, AdPage);

		return _possibleConstructorReturn(this, (AdPage.__proto__ || Object.getPrototypeOf(AdPage)).apply(this, arguments));
	}

	_createClass(AdPage, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.setItemIfNot();

			var username = "testuser2";
			var password = "Testuser2";
			// Sign up
			// const email = "p1500232@nwytg.com"
			// Auth.signUp({
			// username,
			// password,
			// // attributes: {
			// // 	email,
			// // }
			// 	})
			// 	.then(data => console.log(data))
			// 	.catch(err => console.log(err));

			//  Auth.signIn(username, password)
			// 	.then(user => console.log(user))
			// 	.catch(err => console.log(err));
		}
	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate() {
			this.setItemIfNot();
		}
	}, {
		key: "setItemIfNot",
		value: function setItemIfNot() {
			if (localStorage.getItem("sessionId") == null) {
				localStorage.setItem("sessionId", 1);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				"div",
				{ className: "AdPage" },
				_react2.default.createElement(
					"div",
					{ className: "AdPage-Title" },
					_react2.default.createElement(
						"h1",
						null,
						this.props.title
					),
					_react2.default.createElement(
						"h1",
						null,
						this.props.description
					),
					_react2.default.createElement(
						"button",
						{ onClick: function onClick() {
								return _this2.props.handleClick();
							} },
						"fetch"
					),
					_react2.default.createElement(
						"button",
						{ onClick: function onClick() {
								return _this2.props.handleClickU();
							} },
						"fetchDB"
					),
					_react2.default.createElement(
						"button",
						{ onClick: function onClick() {
								return api1();
							} },
						"fetchDB2"
					),
					_react2.default.createElement(
						"button",
						{ onClick: function onClick() {
								return currentUserToken();
							} },
						"CUT2"
					)
				)
			);
		}
	}]);

	return AdPage;
}(_react.Component);

exports.default = AdPage;