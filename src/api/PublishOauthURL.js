
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import getBaseUrl from "../Utils/getBaseUrl"
export default function(isWebhook) {
	const apiName = "adApp"
	const path = "/twitter/publish-oauth"
	const baseUrl = getBaseUrl()
	const init = { 
		queryStringParameters: {
			baseUrl : baseUrl , 
			isWebhook : isWebhook
		}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		return body
	})
}