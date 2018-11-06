import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(oauth_token , oauth_token_secret , oauth_verifier) {
	const apiName = "adApp"
	const path = "/twitter/webhook-register"

	const payload = {
		oauth_token : oauth_token,
		oauth_token_secret : oauth_token_secret, 
		oauth_verifier : oauth_verifier
	}

	const init = { 
		queryStringParameters: payload
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		return res.data
	})
}