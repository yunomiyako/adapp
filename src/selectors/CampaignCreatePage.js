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

const getMissTextFromState = (state) => state.missText
export const getMissText = createSelector(
	[getMissTextFromState] , 
	(missText) => missText
)

const getCampaignIntervalFromState = (state) => state.campaignInterval
export const getCampaignInterval = createSelector(
	[getCampaignIntervalFromState] , 
	(campaignInterval) => campaignInterval
)

const getNameFromState = (state) => state.name
export const getName = createSelector(
	[getNameFromState] , 
	(name) => name
)

const getEmailFromState = (state) => state.email
export const getEmail = createSelector(
	[getEmailFromState] , 
	(email) => email
)

const getNotesFromState = (state) => state.notes
export const getNotes = createSelector(
	[getNotesFromState] , 
	(notes) => notes
)

const getTweetObjectFromState = (state) => state.tweetObject
export const getTweetObject = createSelector(
	[getTweetObjectFromState] , 
	(tweetObject) => tweetObject
)
