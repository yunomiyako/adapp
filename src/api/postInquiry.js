import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(text) {
	const apiName = "adApp"
	const path = "/inquiry"
	const init = { 
		body: {
			text : text
		}
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