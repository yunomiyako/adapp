class RewardDataStructure {
	constructor(data){
		this.keyname = data.keyname || "A"
		this.people = data.people || ""
		this.title = data.title || ""
		this.message = data.message || ""
		this.image = data.image || "example/当たり画像.jpg"
	}
}

export default RewardDataStructure
