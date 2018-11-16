import {
	CLEAR_STATE , 
	ON_CHANGE_INDEX , 
	ON_CHANGE_CAMPAIGN_CREATE_COMPLETED , 
	ON_CHANGE_REWARD_CREATE_COMPLETED , 
	ON_CHANGE_CAMPAIGNS , 
} from "../actions/CampaignCreate"

//データ構造
import CampaignCreateDataStructure from "../domain/campaign/CampaignCreateDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdCreateInfo(state = new CampaignCreateDataStructure({}) , action) {
	switch (action.type) {
	case CLEAR_STATE :
		return new CampaignCreateDataStructure({})
	case ON_CHANGE_INDEX:
		return dotProp.set(state , "index" ,  action.index )
	case ON_CHANGE_CAMPAIGN_CREATE_COMPLETED:
		return dotProp.set(state , "campaignCreateCompleted" ,  action.campaignCreateCompleted )
	case ON_CHANGE_REWARD_CREATE_COMPLETED:
		return dotProp.set(state , "rewardCreateCompleted" ,  action.rewardCreateCompleted )
	case ON_CHANGE_CAMPAIGNS:
		return dotProp.set(state , "campaigns" ,  action.campaigns )
	default :
		return state
	}
}
