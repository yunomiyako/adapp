class AdCreateInfoDataStructure {
	constructor(data){
		this.adType = data.adType || ""
		this.title = data.title || ""
		this.returnDescription = data.returnDescription || ""
		this.adObject = data.adObject || { text:"" , images:[] , tweetUrl : "" , isNewlyCreated:false} 
		this.rating = data.rating || 3 , 
		this.username = data.username || "anonymous" , 
		this.loading = data.loading || false , 
		this.errorMessage = data.errorMessage || "" ,
		this.imageUrls = data.imageUrls || [] , 
		this.id_return_to_go = data.id_return_to_go || "" , 
		this.actionLoading = data.actionLoading || false
	}
}

export default AdCreateInfoDataStructure
