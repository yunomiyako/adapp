import {API } from "aws-amplify"
export default function(user_ids) {
	const apiName = "adApp"
	const path = "/twitter/icon-battle"

	const myInit = { 
		response: true ,
		body: {
			user_ids
		}
	}
    
	return API.post(apiName, path, myInit).then(res => {
		return res.data.key_name
	}).catch(e => {
		return {"errorMessage" : "取得できませんでした"}
	})
}