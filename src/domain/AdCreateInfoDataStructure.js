class AdCreateInfoDataStructure {
	constructor(data){
		this.adType = data.adType || ""
		this.title = data.title || ""
		this.returnDescription = data.returnDescription || ""
		this.adObject = data.adObject || { text:"" , images:[] , tweetUrl : "" , isNewlyCreated:false} 
		this.returnType = data.returnType ||  ""  ,
		this.returnObject = data.returnObject ||  {text: "", images:[]}
		this.index = data.index || 0
		this.adCreateCompleted = data.adCreateCompleted || false
		this.returnCreateCompleted = data.adCreateCompleted || false 
		this.tweetObject = data.tweetObject || {text : "" , images : [] , id_tweet : "" , icon_url : "" , username : "" , userid : ""} 

	}
}

export default AdCreateInfoDataStructure
