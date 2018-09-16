class ReturnPageDataStructure {
	constructor(data){
		this.returnType = data.returnType || "" , 
		this.returnObject = data.returnObject || {text: "", images:[]},
		this.urls = [] , 
		this.rating = data.rating || 0
	}
}

export default ReturnPageDataStructure
