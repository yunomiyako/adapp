import { createSelector } from "reselect"
const getIndexFromState = (state) => state.index
export const getIndex = createSelector(
	[getIndexFromState] , 
	(index) => index
)


const getCampaignCreateCompletedFromState = (state) => state.campaignCreateCompleted
export const getCampaignCreateCompleted = createSelector(
	[getCampaignCreateCompletedFromState] , 
	(campaignCreateCompleted) => campaignCreateCompleted
)


const getRewardCreateCompletedFromState = (state) => state.rewardCreateCompleted
export const getRewardCreateCompleted = createSelector(
	[getRewardCreateCompletedFromState] , 
	(rewardCreateCompleted) => rewardCreateCompleted
)

const getCampaignsFromState = (state) => state.campaigns
export const getCampaigns = createSelector(
	[getCampaignsFromState] , 
	(campaigns) => campaigns
)