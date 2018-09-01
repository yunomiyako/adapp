import {API , Auth} from "aws-amplify"

export default function(){
	let apiName = "adApp"
	let path = "/registerUserId/test"
    
    
	Auth.currentAuthenticatedUser().then(user => {
		console.log("ikuzo")
		let myInit = { 
			response: true, // (return the entire Axios response object instead of only response.data)
			headers : {Authorization : user.signInUserSession.idToken.jwtToken} ,
			body : {"id_user" : "meiji"}
		}

		return API.post(apiName, path, myInit).then(res => {
			console.log("TEST then")
			console.log(res)
		}).catch((e) => {
			console.log(e)
			console.log("errorだよ")
		})
	})
}
