import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(id_user , id_ad) {
	const apiName = "adApp"
	const path = "/return/receive"

	const init = { 
		body: {"id_user" : id_user , "id_ad" : id_ad}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		console.log("receive then")
		console.log(res)
		const body = res.data
		return body
	}).catch(e => {
		console.log("AdCreatePage catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}