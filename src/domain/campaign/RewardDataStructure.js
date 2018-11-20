import { defaultPath , replaceWord } from "./CampaingExamples"

class RewardDataStructure {
	constructor(data){
		this.keyname = data.keyname || "A"
		this.people = data.people || ""
		this.title = data.title || ""
		this.message = data.message || "おめでとうございます！「" + replaceWord + "」が当たりました！\n後ほど詳細をお送りますので、しばらくお待ちください！"
		this.image = data.image || defaultPath
	}
}

export default RewardDataStructure
