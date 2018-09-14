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
	}).catch(e => {
		console.log("fetchReturnData catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}