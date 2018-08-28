import {API} from "aws-amplify"
import AdPageInfoDataStructure from "../domain/AdPageInfoDataStructure"

export default function(payload){
	let apiName = "adApp"
	let path = "/addata"
	console.log("query is ...")
	console.log(payload)
	let myInit = { 
		response: true, // (return the entire Axios response object instead of only response.data)
		queryStringParameters: payload
	}

	console.log("fetchAdData start")
	return API.get(apiName, path, myInit).then(res => {
		console.log("fetchAdData then")
		const body = JSON.parse(res.data.body) 
		const result = new AdPageInfoDataStructure(body)
		result.status = "OK"
		return result
	}).catch((e) => {
		console.log("fetchAdData catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}
