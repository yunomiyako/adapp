import {API } from "aws-amplify"
export default function(screen_name , id_campaign , token = undefined) {
	const apiName = "adApp"
	const path = "/campaign/detail"

	var queryStringParameters = {
		screen_name : screen_name , 
		id_campaign : id_campaign
	}
	if(token) {
		queryStringParameters = {
			screen_name : screen_name , 
			token : token
		}
	}

	const myInit = { 
		response: true  , 
		queryStringParameters : queryStringParameters
	}
    
	return API.get(apiName, path, myInit).then(res => {
		return res.data
	})
}