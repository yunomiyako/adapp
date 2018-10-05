import AdPageInfoDataStructure from "../domain/AdPageInfoDataStructure"
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function() {
	const apiName = "adApp"
	const path = "/addata/examples"
	const init = { 
	}
	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("fetchExampleAds then")
		const body = res.data
		return body
	}).catch(e => {
		console.log("fetchExampleAds catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")	
	})
}