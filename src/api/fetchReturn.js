import {API , Auth} from "aws-amplify"
import ReturnPageDataStructure from "../domain/ReturnPageDataStructure"

export default function(payload){
	let apiName = "adApp"
	let path = "/return"
    
	console.log("fetchReturn query is ...")
	console.log(payload)
	const query = {id_return : payload.id_return}
    
	return Auth.currentAuthenticatedUser().then(user => {
		let myInit = { 
			response: true, // (return the entire Axios response object instead of only response.data)
			headers : {Authorization : user.signInUserSession.idToken.jwtToken} ,
			queryStringParameters: query
		}
        
		return API.get(apiName, path, myInit).then(res => {
			console.log("fetchReturn then")
			console.log(res)
			//const body = JSON.parse(res.data.body) 
			const body = res.data
			const result = new ReturnPageDataStructure(body)
			result.status = "OK"
			return result
		}).catch((e) => {
			console.log(e)
			const result = {"status" : "NG" , "errorMessage" : "お返しを受け取れませんでした"}
			return result
		})
	})
}
