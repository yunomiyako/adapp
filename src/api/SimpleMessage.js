import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export function getSimpleMessage(payload) {
	const apiName = "adApp"
	const path = "/campaign/message"

	const init = { 
		queryStringParameters : {
			id_user : payload.id_user , 
			creator_id : payload.creator_id , 
			id_tweet : payload.id_tweet , 
			actionType : payload.actionType , 
			token : payload.token
		}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		return body
	})
}

export function postSimpleMessage(payload) {
	const apiName = "adApp"
	const path = "/campaign/message"

	const init = { 
		body: {
			id_user : payload.id_user , 
			creator_id : payload.creator_id , 
			id_tweet : payload.id_tweet , 
			actionType : payload.actionType , 
			message : payload.message, 
			token : payload.token
		}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		const body = res.data
		return body
	})
}