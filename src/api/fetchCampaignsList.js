import {API } from "aws-amplify"
export default function() {
	const apiName = "adApp"
	const path = "/campaign/list"

	var queryStringParameters = {}

	const myInit = { 
		response: true  , 
		queryStringParameters : queryStringParameters
	}
    
	return API.get(apiName, path, myInit).then(res => {
		if(res.data.body) {
			return JSON.parse(res.data.body)
		}
		return res.data
	})
}