import {API} from "aws-amplify"
import AdPageInfoDataStructure from "../domain/AdPageInfoDataStructure"

export default function(){
	let apiName = "adApp"
	let path = "/addata/list"
	let myInit = { 
		response: true, // (return the entire Axios response object instead of only response.data)
	}
    
	return API.get(apiName, path, myInit).then(res => {
		console.log("fetchAdList then")
		console.log(res)
		//const body = JSON.parse(res.data.body) 
		const body = res.data
		//const result = body.map((ad) => new AdPageInfoDataStructure(ad))
		return body
	}).catch((e) => {
		console.log("fetchAdList catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}
