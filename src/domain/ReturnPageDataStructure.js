class ReturnPageDataStructure {
	constructor(data){
		this.returnType = data.returnType || "" , 
		this.returnObject = data.returnObject || {text: "", images:[]},
		this.urls = [] , 
		this.rating = data.rating || undefined , 
		this.errorMessage = data.errorMessage || ""
	}
}

export default ReturnPageDataStructure