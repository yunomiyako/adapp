import {
	CLEAR_STATE , 
	ON_CHANGE_INDEX , 
	ON_CHANGE_CAMPAIGN_CREATE_COMPLETED , 
	ON_CHANGE_REWARD_CREATE_COMPLETED , 
} from "../actions/CampaignCreate"

//データ構造
import AdCreateInfoStructure from "../domain/AdCreateInfoDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdCreateInfo(state = new AdCreateInfoStructure({}) , action) {
	switch (action.type) {
	case CLEAR_STATE :
		return new AdCreateInfoStructure({})
	case ON_CHANGE_INDEX:
		return dotProp.set(state , "index" ,  action.index )
	case ON_CHANGE_CAMPAIGN_CREATE_COMPLETED:
		return dotProp.set(state , "campaignCreateCompleted" ,  action.campaignCreateCompleted )
	case ON_CHANGE_REWARD_CREATE_COMPLETED:
		return dotProp.set(state , "rewardCreateCompleted" ,  action.rewardCreateCompleted )

	default :
		return state
	}
}
