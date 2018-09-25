import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"

export default function(id_tweet) {
	const apiName = "adApp"
	const path = "/tweet-info"
	const init = { 
		queryStringParameters: {id_tweet : id_tweet}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("fetchTweetDetail then")
		const body = res.data
		return body
	}).catch(e => {
		console.log("fetchTweetDetail catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}