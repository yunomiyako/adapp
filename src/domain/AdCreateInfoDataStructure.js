
const data =
{	adType : "" ,
	title: "" ,
	returnDescription:""  ,
	adObject : { text:"" , images:[] , tweetUrl : "" , isNewlyCreated:false}  ,
	returnType: ""  ,
	returnObject : {text: "", images:[]} ,
	index : 0 ,
	adCreateCompleted : false,
	returnCreateCompleted: false
}

class AdCreateInfoDataStructure {
	constructor(data){
		this.adType = data.adType || ""
		this.title = data.title || ""
		this.returnDescription = data.returnDescription || ""
		this.adObject = data.adOBject || { text:"" , images:[] , tweetUrl : "" , isNewlyCreated:false} 
		this.returnType = data.returnType ||  ""  ,
		this.returnObject = data.returnObject ||  {text: "", images:[]}
		this.index = data.index || 0
		this.adCreateCompleted = data.adCreateCompleted || false
		this.returnCreateCompleted = data.adCreateCompleted || false
	}
}

export default AdCreateInfoDataStructure
