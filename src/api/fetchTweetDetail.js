import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import { get_access_token , get_access_token_secret } from "../localStorage/twitter_access_token"
import TweetObjectDataStructure from "../domain/TweetObjectDataStructure"

export default function(id_tweet) {
	const apiName = "adApp"
	const path = "/twitter/tweet"
	const init = { 
		queryStringParameters: {
			access_token : get_access_token() , 
			access_token_secret : get_access_token_secret(), 
			id_tweet : id_tweet}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		console.log("fetchTweetDetail then")
		console.log(res)
		const body = res.data

		const data = {
			text : body.text ||  "" , 
			images : body.media_url_https ||  [] , 
			id_tweet : id_tweet , 
			icon_url : body.profile_image_url || "" , 
			username : body.name || "" , 
			userid : body.screen_name || ""
		}

		return new TweetObjectDataStructure(data)
	})
}