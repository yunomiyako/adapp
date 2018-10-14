import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(id_return , rating) {
	const apiName = "adApp"
	const path = "/return/rate"

	const init = { 
		body: {"id_return" : id_return , "rating" : rating}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		console.log("saverate then")
		console.log(res)
		const body = res.data
		return body
	})
}