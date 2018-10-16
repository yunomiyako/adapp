import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

//適当なid_userとid_adを返すAPI
export default function() {
	const apiName = "adApp"
	const path = "/addata/random"
	const init = { 
		queryStringParameters: {}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		const result = {
			id_user : body.id_user ,
			id_ad : body.id_ad
		}
		return result
	})
}