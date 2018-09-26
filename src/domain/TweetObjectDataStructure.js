class TweetObjectDataStructure {
	constructor(data) {
		return {
			text : data.text ||  "" , 
			images : data.images ||  [] , 
			id_tweet : data.id_tweet || "" , 
			icon_url : data.icon_url || "" , 
			username : data.username || "" , 
			userid : data.userid || ""
		} 
	}
}

export default TweetObjectDataStructure