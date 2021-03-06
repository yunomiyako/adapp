import {API , Auth} from "aws-amplify"
import authetification from "../aws/authentification"

export default function wrapper(apiName , path , init , methodType ){
	return Auth.currentAuthenticatedUser().then(user => {
		const myInit = { 
			response: true ,
			headers : {Authorization : user.signInUserSession.idToken.jwtToken},
			...init
		}
        
		if(methodType === "get") {
			return API.get(apiName, path, myInit).then(res => {
				return res
			})
		} else if(methodType === "post") {
			return API.post(apiName, path, myInit).then(res => {
				return res
			})
		}
	}).catch((e) => {
		if(e === "No current user") {
			console.log("No current user")
			const callback = () => (console.log(""))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else if(e.message === "User is not authenticated") {
			console.log("User is not authenticated")
			const callback = () => (console.log(""))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else if (e.message === "not authenticated") {
			console.log("not authenticated")
			const callback = () => (console.log(""))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else {
			//window.location.href = "/" //ちょっと強引すぎ
			throw e
		}

	})
}
