import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(payload) {
	const apiName = "adApp"
	const path = "/addata/list"
	const init = { 
		queryStringParameters: payload
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("fetch ad list then")
		const body = res.data
		return body
	})
	//エラーハンドルするとそちらが先に実行されてしまう
}