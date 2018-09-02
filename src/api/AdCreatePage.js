import {API , Auth} from "aws-amplify"
import AdCreateInfoDataStructure from "../domain/AdCreateInfoDataStructure"

export const submitAdCreateInfo = function(payload){
	let apiName = "adApp"
	let path = "/SaveAdCreateInfo"
	let body = new AdCreateInfoDataStructure(payload)

	return Auth.currentAuthenticatedUser().then(user => {
		console.log("ikuzo")
		console.log(user.signInUserSession.idToken)

		let myInit = { 
			headers: {"Content-Type": "application/json" , Authorization : user.signInUserSession.idToken.jwtToken} ,
			response: true, // (return the entire Axios response object instead of only response.data)
			body : body
		}
		console.log( JSON.stringify(body))
		return API.post(apiName, path, myInit).then(res => {
			console.log(res)
	
			body = res.data
			const result = {}
			result.status = "OK"
			result.id_ad = body.id_ad
			result.id_user = body.id_user
			//result.id_return = body.id_return 描画には不要
			return result
		})
	})
}
