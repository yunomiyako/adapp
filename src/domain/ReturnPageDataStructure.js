class AdCreateInfoDataStructure {
	constructor(data){
		this.returnType = data.returnType || "" , 
		this.returnObject = data.returnObject || {text: "", images:[]},
		this.urls = []
	}
}

export default AdCreateInfoDataStructure
