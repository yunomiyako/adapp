import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(id_ad) {
	const apiName = "adApp"
	const path = "/addata/delete"

	const init = { 
		body: {"id_ad" : Number(id_ad) }
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		const body = res.data
		return body
	})
}