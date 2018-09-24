import {API , Auth} from "aws-amplify"
import authetification from "../aws/authentification"

export default function wrapper(apiName , path , init , methodType){
	return Auth.currentAuthenticatedUser().catch((e) => {
		//ここが実行されていない
		console.log("is it called?")
		console.log(e.message)
		if(e.message == "No current user") {
			console.log("失敗1")
			const callback = () => (console.log("re authen"))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else if(e.message == "User is not authenticated") {
			console.log("失敗2")
			const callback = () => (console.log("re authen2"))
			return authetification(callback).then(() => {
				console.log("is it called? I think not")
				return wrapper(apiName , path , init , methodType)
			})
		} else if (e.message = "user.signInUserSession is undefined") {
			console.log("失敗3")
			const callback = () => (console.log("re authen2"))
			return authetification(callback).then(() => {
				return wrapper(apiName , path , init , methodType)
			})
		} else {
			//ここ
			console.log("下の二つはfalseのはず")
			console.log(e == "No current user")
			console.log(e == "User is not authenticated")
			throw e
			//window.location.href = "/" //ちょっと強引すぎ
		}

	}).then(user => {
		console.log("ikuzo")
		const myInit = { 
			response: true ,
			headers : {Authorization : user.signInUserSession.idToken.jwtToken},
			...init
		}
        
		if(methodType == "get") {
			return API.get(apiName, path, myInit).then(res => {
				return res
			})
		} else if(methodType == "post") {
			return API.post(apiName, path, myInit).then(res => {
				return res
			})
		}
	})
}
