import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(adType,limit) {
	const apiName = "adApp"
	const path = "/addata/list/allad"
	
	const init = { 
		queryStringParameters: {	
			adType : adType,
			limit : limit					
		}
	}
	
	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		return body
	})
}