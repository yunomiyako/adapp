import RewardDataStructure from "./RewardDataStructure"

// import TweetObjectDataStructure from "./TweetObjectDataStructure"
// import AdObjectDataStructure from "./AdObjectDataStructure"

class CampaignCreateDataStructure {
	constructor(data){
		this.index = data.index || 0
		this.campaignCreateCompleted = data.campaignCreateCompleted || false
		this.rewardCreateCompleted = data.rewardCreateCompleted || false 
		this.campaigns = data.campaigns || [new RewardDataStructure({}) , new RewardDataStructure({}) , new RewardDataStructure({})]
	}
}

export default CampaignCreateDataStructure
