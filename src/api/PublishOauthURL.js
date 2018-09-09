import {API} from "aws-amplify"

export default function(){
	let apiName = "adApp"
	let path = "/twitter/publish-oauth"
    
	let myInit = { 
		response: true
	}
    
	return API.get(apiName, path, myInit).then(res => {
		console.log("publishOauthURL then")
		const body = JSON.parse(res.data.body) 
		//const body = res.data
		return body
	}).catch((e) => {
		console.log("publishOauthURL catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}
