const prefix = "ADCREATE_"

export const ON_CHANGE_INDEX  = prefix + "ON_CHANGE_INDEX"
export function onChangeIndex(index) {
	return {
		type: ON_CHANGE_INDEX ,
		index
	}
}


export const ON_CHANGE_CAMPAIGN_CREATE_COMPLETED  = prefix + "ON_CHANGE_CAMPAIGN_CREATE_COMPLETED"
export function onChangeCampaignCreateCompleted(campaignCreateCompleted) {
	return {
		type: ON_CHANGE_CAMPAIGN_CREATE_COMPLETED ,
		campaignCreateCompleted
	}
}


export const ON_CHANGE_REWARD_CREATE_COMPLETED  = prefix + "ON_CHANGE_REWARD_CREATE_COMPLETED"
export function onChangeRewardCreateCompleted(rewardCreateCompleted) {
	return {
		type: ON_CHANGE_REWARD_CREATE_COMPLETED ,
		rewardCreateCompleted
	}
}

export const CLEAR_STATE = prefix + "CLEAR_STATE"
export function clearState() {
	return {
		type: CLEAR_STATE
	}
}

export const ON_CHANGE_CAMPAIGNS  = prefix + "ON_CHANGE_CAMPAIGNS"
export function onChangeCampaigns(campaigns) {
	return {
		type: ON_CHANGE_CAMPAIGNS ,
		campaigns
	}
}

export const ON_CHANGE_MISS_TEXT  =  prefix + "ON_CHANGE_MISS_TEXT"
export function onChangeMissText(missText) {
	return {
		type: ON_CHANGE_MISS_TEXT ,
		missText
	}
}

export const ON_CHANGE_CAMPAIGN_INTERVAL  = prefix + "ON_CHANGE_CAMPAIGN_INTERVAL"
export function onChangeCampaignInterval(campaignInterval) {
	return {
		type: ON_CHANGE_CAMPAIGN_INTERVAL ,
		campaignInterval
	}
}


export const ON_CHANGE_NAME  = prefix + "ON_CHANGE_NAME"
export function onChangeName(name) {
	return {
		type: ON_CHANGE_NAME ,
		name
	}
}


export const ON_CHANGE_EMAIL  = prefix + "ON_CHANGE_EMAIL"
export function onChangeEmail(email) {
	return {
		type: ON_CHANGE_EMAIL ,
		email
	}
}


export const ON_CHANGE_NOTES  = prefix + "ON_CHANGE_NOTES"
export function onChangeNotes(notes) {
	return {
		type: ON_CHANGE_NOTES ,
		notes
	}
}


export const ON_CHANGE_TWEET_OBJECT  = prefix + "ON_CHANGE_TWEET_OBJECT"
export function onChangeTweetObject(tweetObject) {
	return {
		type: ON_CHANGE_TWEET_OBJECT ,
		tweetObject
	}
}

export const ON_SUBMIT_CAMPAIGN_CREATE  = prefix + "ON_SUBMIT_CAMPAIGN_CREATE"
export function onSubmitCampaignCreate(payload , callback) {
	return {
		type : ON_SUBMIT_CAMPAIGN_CREATE , 
		payload , 
		callback
	}
}

export const ON_CHANGE_TWITTER_ID  = prefix + "ON_CHANGE_TWITTER_ID"
export function onChangeTwitterId(twitterId) {
	return {
		type: ON_CHANGE_TWITTER_ID ,
		twitterId
	}
}