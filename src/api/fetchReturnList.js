import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function() {
	const apiName = "adApp"
	const path = "/return/list"
	const init = { 
		queryStringParameters: {}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		return body
	})
}