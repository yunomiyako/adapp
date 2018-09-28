import UserDetailDataStructure from "./UserDetailDataStructure"
import AdObjectDataStructure from "./AdObjectDataStructure"

class AdCreateInfoDataStructure {
	constructor(data){
		this.adType = data.adType || ""
		this.title = data.title || ""
		this.returnDescription = data.returnDescription || ""
		this.adObject = data.adObject || new AdObjectDataStructure({}) 
		this.rating = data.rating || 0 , 
		this.username = data.username || "anonymous" , 
		this.loading = data.loading || false , 
		this.errorMessage = data.errorMessage || "" ,
		this.imageUrls = data.imageUrls || [] , 
		this.id_return_to_go = data.id_return_to_go || "" , 
		this.actionLoading = data.actionLoading || false , 
		this.hasReceived = data.hasReceived || false , 
		this.user_detail = data.user_detail || new UserDetailDataStructure({})
	}
}

export default AdCreateInfoDataStructure
