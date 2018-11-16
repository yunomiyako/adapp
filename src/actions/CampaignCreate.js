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

export const ON_CHANGE_CAMPAIGNS  = "ON_CHANGE_CAMPAIGNS"
export function onChangeCampaigns(campaigns) {
	return {
		type: ON_CHANGE_CAMPAIGNS ,
		campaigns
	}
}
