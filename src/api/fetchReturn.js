import ReturnPageDataStructure from "../domain/ReturnPageDataStructure"
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(payload) {
	const apiName = "adApp"
	const path = "/return"
	const init = { 
		queryStringParameters:  {id_return : payload.id_return}
	}
	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		console.log("fetchReturn result")
		console.log(body)
		const result = new ReturnPageDataStructure(body)
		console.log(result)
		result.status = "OK"
		return result
	}).catch(e => {
		console.log(e)
		const result = {"status" : "NG" , "errorMessage" : "お返しを受け取れませんでした"}
		return result
	})
}
