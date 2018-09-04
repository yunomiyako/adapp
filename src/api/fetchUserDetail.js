import {API , Auth} from "aws-amplify"
import UserDetailDataStructure from "../domain/UserDetailDataStructure"

export default function(){
	let apiName = "adApp"
	let path = "/users"
    
	return Auth.currentAuthenticatedUser().then(user => {
		console.log("ikuzo")
		console.log(user.signInUserSession.idToken)

		let myInit = { 
			response: true ,
			headers : {Authorization : user.signInUserSession.idToken.jwtToken}
		}

		console.log("fetchUserDetail start")
		return API.get(apiName, path, myInit).then(res => {
			console.log("fetchUserDetail then")
			console.log(res)
			const body = res.data
			const result = new UserDetailDataStructure(body)
			return result
		}).catch((e) => {
			console.log("fetchUserDetail catch")
			console.log(e)
			throw new Error("何かしらのエラーだよ")
		})
	})
}
