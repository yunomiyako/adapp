import {API } from "aws-amplify"
export default function(screen_name , id_campaign) {
	const apiName = "adApp"
	const path = "/campaign/detail"

	const myInit = { 
		response: true  , 
		queryStringParameters : {
			screen_name : screen_name , 
			id_campaign : id_campaign
		}
	}
    
	return API.get(apiName, path, myInit).then(res => {
		return res.data
	})
}