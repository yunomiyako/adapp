import {API , Auth} from "aws-amplify"
import authetification from "../aws/authentification"

export default function wrapper(apiName , path , init , methodType){
	return Auth.currentAuthenticatedUser().then(user => {
		console.log("ikuzo")
		const myInit = { 
			response: true ,
			headers : {Authorization : user.signInUserSession.idToken.jwtToken},
			...init
		}
        
		if(methodType == "get") {
			return API.get(apiName, path, myInit).then(res => {
				return res
			}).catch((e) => {
				console.log(e)
				throw new Error("何かしらのエラーだよ")
			})
		} else if(methodType == "post") {
			return API.post(apiName, path, myInit).then(res => {
				return res
			}).catch((e) => {
				console.log(e)
				throw new Error("何かしらのエラーだよ")
			})
		}
	}).catch(e => {	
		if(e == "No current user") {
			console.log("失敗1")
			const callback = () => (console.log("re authen"))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else if(e == "User is not authenticated") {
			console.log("失敗2")
			const callback = () => (console.log("re authen2"))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else {
			throw new Error("何かしらのエラーだよ")
			//window.location.href = "/" //ちょっと強引すぎ
		}
	})
}
