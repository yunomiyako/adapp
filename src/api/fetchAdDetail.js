import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(id_ad) {
	const apiName = "adApp"
	const path = "/addata/detail"
	const init = { 
		queryStringParameters: {id_ad : id_ad}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("fetchAdDetail then")
		const body = res.data
		return body
	}).catch(e => {
		console.log("fetchAdDetail catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}