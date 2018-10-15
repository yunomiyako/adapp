import {API } from "aws-amplify"
export default function() {
	const apiName = "adApp"
	const path = "/addata/examples"

	const myInit = { 
		response: true 
	}
	return API.get(apiName, path, myInit).then(res => {
		return res.data
	})
}