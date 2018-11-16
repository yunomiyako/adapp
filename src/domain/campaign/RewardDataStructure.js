import { defaultPath } from "./CampaingExamples"

class RewardDataStructure {
	constructor(data){
		this.keyname = data.keyname || "A"
		this.people = data.people || ""
		this.title = data.title || ""
		this.message = data.message || ""
		this.image = data.image || defaultPath
	}
}

export default RewardDataStructure
