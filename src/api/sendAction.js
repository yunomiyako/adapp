import {API} from "aws-amplify"
import sendActionRequest from "./RequestDataStructure/sendActionRequest"

export default function(payload){
	let apiName = "adApp"
	let path = "/action"
	let body = new sendActionRequest(payload)
	body.id_user = "some_receiver" //test
    
	let myInit = { 
		headers: {"Content-Type": "application/json"} ,
		response: true, // (return the entire Axios response object instead of only response.data)
		body : body
	}
	console.log( JSON.stringify(body))
	return API.post(apiName, path, myInit).then(res => {
		console.log(res)

		body = JSON.parse(res.data.body) //なぜこれが必要なのかわかってない
		const result = {}
		result.status = "OK"
		result.id_ad = body.id_ad
		result.id_user = body.id_user
		//result.id_return = body.id_return 描画には不要
		return result
	})
}
