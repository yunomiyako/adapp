import {API } from "aws-amplify"
export default function() {
	const apiName = "adApp"
	const path = "/feed/news"

	const myInit = { 
		response: true  
	}
    
	return API.get(apiName, path, myInit).then(res => {
		if(res.data.body) {
			return JSON.parse(res.data.body)
		}
		return res.data
	})
}