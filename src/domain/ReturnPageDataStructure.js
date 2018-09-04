class AdCreateInfoDataStructure {
	constructor(data){
		this.returnType = data.returnType || "" , 
		this.returnObject = data.returnObject || {text: "", images:[]}
	}
}

export default AdCreateInfoDataStructure
