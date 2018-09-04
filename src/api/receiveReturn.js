import {API , Auth} from "aws-amplify"

//TODO : gatewayごと消す
export default function(id_user , id_ad){
	let apiName = "adApp"
	let path = "/return/receive"
    
	return Auth.currentAuthenticatedUser().then(user => {
		console.log("ikuzo")
		let myInit = { 
			response: true, // (return the entire Axios response object instead of only response.data)
			headers : {Authorization : user.signInUserSession.idToken.jwtToken} ,
			body : {"id_user" : id_user , "id_ad" : id_ad}
		}

		return API.post(apiName, path, myInit).then(res => {
			console.log("receive then")
			console.log(res)
			const body = res.data
			return body
		}).catch((e) => {
			console.log(e)
			console.log("errorだよ")
		})
	})
}
