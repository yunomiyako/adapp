import {API} from "aws-amplify"

export const submitAdCreateInfo = function(payload){
	let apiName = "adApp"
	let path = "/justReturnAdData"
	let myInit = { 
		headers: {"Content-Type": "application/json"} ,
		response: true, // (return the entire Axios response object instead of only response.data)
		body : payload
	}
	return API.post(apiName, path, myInit)
}
