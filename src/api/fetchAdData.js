import AdPageInfoDataStructure from "../domain/AdPageInfoDataStructure"
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(payload) {
	const apiName = "adApp"
	const path = "/addata"
	const init = { 
		queryStringParameters: payload
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		const result = new AdPageInfoDataStructure(body)
		result.status = "OK"
		return result
	}).catch(e => {
		console.log("fetchAdList catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}