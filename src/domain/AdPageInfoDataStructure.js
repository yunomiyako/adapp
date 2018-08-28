class AdCreateInfoDataStructure {
	constructor(data){
		this.adType = data.adType || ""
		this.title = data.title || ""
		this.returnDescription = data.returnDescription || ""
		this.adObject = data.adObject || { text:"" , images:[] , tweetUrl : "" , isNewlyCreated:false} 
		this.rating = data.rating || 3 , 
		this.username = data.username || "anonymous"
	}
}

export default AdCreateInfoDataStructure
