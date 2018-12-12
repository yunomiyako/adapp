import {
	CLEAR_STATE , 
	ON_CHANGE_INDEX , 
	ON_CHANGE_CAMPAIGN_CREATE_COMPLETED , 
	ON_CHANGE_REWARD_CREATE_COMPLETED , 
	ON_CHANGE_CAMPAIGNS , 
	ON_CHANGE_MISS_TEXT , 

	ON_CHANGE_CAMPAIGN_INTERVAL , 
	ON_CHANGE_NAME , 
	ON_CHANGE_EMAIL , 
	ON_CHANGE_NOTES , 
	ON_CHANGE_TWEET_OBJECT , 
	ON_CHANGE_TWITTER_ID , 
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
	case ON_CHANGE_MISS_TEXT:
		return dotProp.set(state , "missText" ,  action.missText )
	case ON_CHANGE_CAMPAIGN_INTERVAL:
		return dotProp.set(state , "campaignInterval" ,  action.campaignInterval )
	case ON_CHANGE_NAME:
		return dotProp.set(state , "name" ,  action.name )
	case ON_CHANGE_EMAIL:
		return dotProp.set(state , "email" ,  action.email )
	case ON_CHANGE_NOTES:
		return dotProp.set(state , "notes" ,  action.notes )
	case ON_CHANGE_TWEET_OBJECT:
		return dotProp.set(state , "tweetObject" ,  action.tweetObject )
	case ON_CHANGE_TWITTER_ID:
		return dotProp.set(state , "twitterId" ,  action.twitterId )
	default :
		return state
	}
}
