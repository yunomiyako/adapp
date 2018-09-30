import TweetObjectDataStructure from "./TweetObjectDataStructure"
import AdObjectDataStructure from "./AdObjectDataStructure"

class AdCreateInfoDataStructure {
	constructor(data){
		this.adType = data.adType || ""
		this.title = data.title || ""
		this.returnDescription = data.returnDescription || ""
		this.adObject = data.adObject || new AdObjectDataStructure({})
		this.returnType = data.returnType ||  ""  ,
		this.returnObject = data.returnObject ||  {text: "", images:[]}
		this.index = data.index || 0
		this.adCreateCompleted = data.adCreateCompleted || false
		this.returnCreateCompleted = data.adCreateCompleted || false 
		this.tweetObject = data.tweetObject || new TweetObjectDataStructure({})
		this.tweetObjectLoading = false
	}
}

export default AdCreateInfoDataStructure
