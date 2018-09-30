
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import getBaseUrl from "../Utils/getBaseUrl"
export default function(payload) {
	const apiName = "adApp"
	const path = "/twitter/publish-oauth"
	const baseUrl = getBaseUrl()
	console.log(baseUrl)
	const init = { 
		queryStringParameters: {
			baseUrl : baseUrl
		}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("publishOauthURL then")
		const body = res.data
		return body
	}).catch(e => {
		console.log("publishOauthURL catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}