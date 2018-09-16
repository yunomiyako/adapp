
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(payload) {
	const apiName = "adApp"
	const path = "/twitter/publish-oauth"
	const init = { 
		queryStringParameters: {}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("publishOauthURL then")
		const body = JSON.parse(res.data.body) 
		return body
	}).catch(e => {
		console.log("publishOauthURL catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}