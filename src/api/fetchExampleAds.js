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


// import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

// export default function() {
// 	const apiName = "adApp"
// 	const path = "/addata/examples"
// 	const init = { 
// 	}

// 	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
// 		console.log("fetch ad list then")
// 		const body = res.data
// 		return body
// 	})
// }