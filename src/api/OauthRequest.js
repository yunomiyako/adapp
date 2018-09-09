import {API, Auth} from "aws-amplify"


export default function(oauth_token , oauth_token_secret , oauth_verifier){
	let apiName = "adApp"
	let path = "/twitter/oauth-request"


	const payload = {
		oauth_token : oauth_token,
		oauth_token_secret : oauth_token_secret, 
		oauth_verifier : oauth_verifier
	}
	
	console.log(payload)
	return Auth.currentAuthenticatedUser().then(user => {
		console.log("ikuzo")
		console.log(user.signInUserSession.idToken)
		let myInit = { 
			headers : {Authorization : user.signInUserSession.idToken.jwtToken},
			response: true ,
			queryStringParameters: payload
		}
		
		return API.get(apiName, path, myInit).then(res => {
			console.log("OauthRequest then")
			console.log(res)
			const body = res.data
			//const body = res.data
			return body
		}).catch((e) => {
			console.log("OauthRequestcatch")
			console.log(e)
			throw new Error("何かしらのエラーだよ")
		})
	})
}
