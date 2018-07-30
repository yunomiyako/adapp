import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./AdPage.css"

import Amplify from "aws-amplify"
import { Auth, API } from "aws-amplify"

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

// Amplify.configure({
// 	Auth: {
// 	// REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
// 		identityPoolId: "ap-northeast-1:62e8666f-2e39-4600-912c-a7c9332e2450",
//
// 		// REQUIRED - Amazon Cognito Region
// 		region: "ap-northeast-1",
//
// 		// OPTIONAL - Amazon Cognito User Pool ID
// 		userPoolId: "ap-northeast-1_SHqZXcVuV",
//
// 		// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
// 		userPoolWebClientId: "5khuql00f2mviggho5ligs92db",
//
// 	// OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
// 	// authenticationFlowType: 'USER_PASSWORD_AUTH'
// 	},
// })

const api1 = () => {
	Auth.currentAuthenticatedUser().then((user => {
		let jwtToken = user.signInUserSession.idToken.jwtToken
		console.log(jwtToken)
		const options = {
			headers: {
				Authorization: jwtToken
			}
		}
		API.get("select3", "/select3", options)
			.then(response => {
				console.log("成功: " + response)
			})
			.catch(err => {
				console.log(err)
			})
	}))

}

export function currentUserToken() {
	return Auth.currentAuthenticatedUser().then((user) => {
		console.log(user.signInUserSession.idToken.jwtToken)
	})
}


class AdPage extends Component {
	componentWillMount() {
		this.tmpAuth()
	}

	componentWillUpdate() {
		this.tmpAuth()
	}

	tmpAuth() {
		const username = btoa(crypto.getRandomValues(new Uint8Array(16)))
		const password = username

		Auth.currentAuthenticatedUser().then(user => {
			console.log("signed in")
			console.log(user)
		})
			.catch(err => {
				Auth.signUp({
					username,
					password,
				})
					.then(data => {
						Auth.signIn(username, password)
							.then(user => {
								console.log("signed up")
								console.log(user)
							})
							.catch(err => console.log(err))
					})
					.catch(err => console.log(err))
			})
	}

	render() {
		return (
			<div className="AdPage">
				<div className="AdPage-Title">
					<h1>{this.props.title}</h1>
					<h1>{this.props.description}</h1>
					<button onClick={() => this.props.handleClick()}>fetch</button>
					<button onClick={() => this.props.handleClickU()}>fetchDB</button>
					<button onClick={() => api1()}>fetchDB2</button>
					<button onClick={() => currentUserToken()}>CUT2</button>
				</div>
			</div>
		)
	}
}

export default AdPage
