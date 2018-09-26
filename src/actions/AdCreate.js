// Actionの定義を書きます
const prefix = "ADCREATE_"

export const ON_CHANGE_AD_TYPE  = prefix + "ON_CHANGE_AD_TYPE"
export function onChangeAdType(adType) {
	return {
		type: ON_CHANGE_AD_TYPE ,
		adType
	}
}


export const ON_CHANGE_TITLE  = prefix + "ON_CHANGE_TITLE"
export function onChangeTitle(title) {
	return {
		type: ON_CHANGE_TITLE ,
		title
	}
}


export const ON_CHANGE_RETURN_DESCRIPTION  = prefix + "ON_CHANGE_RETURN_DESCRIPTION"
export function onChangeReturnDescription(returnDescription) {
	return {
		type: ON_CHANGE_RETURN_DESCRIPTION ,
		returnDescription
	}
}


export const ON_CHANGE_AD_OBJECT  = prefix + "ON_CHANGE_AD_OBJECT"
export function onChangeAdObject(adObject) {
	return {
		type: ON_CHANGE_AD_OBJECT ,
		adObject
	}
}


export const ON_CHANGE_RETURN_TYPE  = prefix + "ON_CHANGE_RETURN_TYPE"
export function onChangeReturnType(returnType) {
	return {
		type: ON_CHANGE_RETURN_TYPE ,
		returnType
	}
}


export const ON_CHANGE_RETURN_OBJECT  = prefix + "ON_CHANGE_RETURN_OBJECT"
export function onChangeReturnObject(returnObject) {
	return {
		type: ON_CHANGE_RETURN_OBJECT ,
		returnObject
	}
}

export const ON_CHANGE_INDEX  = prefix + "ON_CHANGE_INDEX"
export function onChangeIndex(index) {
	return {
		type: ON_CHANGE_INDEX ,
		index
	}
}

export const CLEAR_STATE = prefix + "CLEAR_STATE"
export function clearState() {
	return {
		type: CLEAR_STATE
	}
}

export const ON_CHANGE_AD_CREATE_COMPLETED  = prefix + "ON_CHANGE_AD_CREATE_COMPLETED"
export function onChangeAdCreateCompleted(adCreateCompleted) {
	return {
		type: ON_CHANGE_AD_CREATE_COMPLETED ,
		adCreateCompleted
	}
}


export const ON_CHANGE_RETURN_CREATE_COMPLETED  = prefix + "ON_CHANGE_RETURN_CREATE_COMPLETED"
export function onChangeReturnCreateCompleted(returnCreateCompleted) {
	return {
		type: ON_CHANGE_RETURN_CREATE_COMPLETED ,
		returnCreateCompleted
	}
}

//API通信
export const ON_SUBMIT_ADCREATE = prefix + "ON_SUBMIT_ADCREATE"
export function onSubmitAdCreate(payload , callback) {
	return {
		type: ON_SUBMIT_ADCREATE ,
		payload,
		callback
	}
}

export const ON_FETCH_TWEET_DETAIL = prefix + "ON_FETCH_TWEET_DETAIL"
export function onFetchTweetDetail(id_tweet) {
	return {
		type : ON_FETCH_TWEET_DETAIL, 
		id_tweet
	}
}

export const ON_CHANGE_TWEET_OBJECT  = prefix + "ON_CHANGE_TWEET_OBJECT"
export function onChangeTweetObject(tweetObject) {
	return {
		type: ON_CHANGE_TWEET_OBJECT ,
		tweetObject
	}
}

export const ON_CHANGE_TWEET_OBJECT_LOADING  = "ON_CHANGE_TWEET_OBJECT_LOADING"
export function onChangeTweetObjectLoading(tweetObjectLoading) {
	return {
		type: ON_CHANGE_TWEET_OBJECT_LOADING ,
		loading : tweetObjectLoading
	}
}
