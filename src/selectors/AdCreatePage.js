import { createSelector } from "reselect"
const getAdObjectFromState = (state) => state.adObject
export const getAdObject = createSelector(
	[getAdObjectFromState] , 
	(adObject) => adObject
)

const getReturnObjectFromState = (state) => state.returnObject
export const getReturnObject = createSelector(
	[getReturnObjectFromState] , 
	(returnObject) => {
		return returnObject
	}
)

const getIndexFromState = (state) => state.index
export const getIndex = createSelector(
	[getIndexFromState] , 
	(index) => index
)

const getAdCreateCompletedFromState = (state) => state.adCreateCompleted
export const getAdCreateCompleted = createSelector(
	[getAdCreateCompletedFromState] , 
	(adCreateCompleted) => adCreateCompleted
)

const getReturnCreateCompletedFromState = (state) => state.returnCreateCompleted
export const getReturnCreateCompleted = createSelector(
	[getReturnCreateCompletedFromState] , 
	(returnCreateCompleted) => returnCreateCompleted
)

const getAdTypeFromState = (state) => state.adType
export const getAdType = createSelector(
	[getAdTypeFromState] , 
	(adType) => adType
)

const getTitleFromState = (state) => state.title
export const getTitle = createSelector(
	[getTitleFromState] , 
	(title) => title
)

const getReturnDescriptionFromState = (state) => state.returnDescription
export const getReturnDescription = createSelector(
	[getReturnDescriptionFromState] , 
	(returnDescription) => returnDescription
)

const getReturnTypeFromState = (state) => state.returnType
export const getReturnType = createSelector(
	[getReturnTypeFromState] , 
	(returnType) => returnType
)

const getTweetObjectFromState = (state) => state.tweetObject
export const getTweetObject = createSelector(
	[getTweetObjectFromState] , 
	(tweetObject) => tweetObject
)
