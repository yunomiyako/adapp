class AdCreateInfoDataStructure {
	constructor(data){
		this.text = data.text || "" , 
		this.images = data.images || [] ,
		this.tweetUrl = data.tweetUrl || "" ,
		this.isNewlyCreated = data.isNewlyCreated || false
	}
}

export default AdCreateInfoDataStructure
