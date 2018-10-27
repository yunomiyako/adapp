import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(payload) {
	const apiName = "adApp"
	const path = "/addata/list"
	const init = { 
		queryStringParameters: payload
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		return body
	})
}