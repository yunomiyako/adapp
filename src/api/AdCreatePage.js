import AdCreateInfoDataStructure from "../domain/AdCreateInfoDataStructure"
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(payload) {
	const apiName = "adApp"
	const path = "/SaveAdCreateInfo"
	let body = new AdCreateInfoDataStructure(payload)

	const init = { 
		body: body
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		const body = res.data
		const result = {}
		result.status = "OK"
		result.id_ad = body.id_ad
		result.id_user = body.id_user
		return result
	})
}