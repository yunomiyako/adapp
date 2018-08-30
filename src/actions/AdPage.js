export const FETCH_AD_DATA  = "FETCH_AD_DATA"
export function fetchAdData(id_user, id_ad) {
	return {
		type: FETCH_AD_DATA , 
		id_user , 
		id_ad 
	}
}

export const FETCH_AD_DATA_FAIL = "FETCH_AD_DATA_FAIL"
export function fetchAdDataFail(errorMessage) {
	return {
		type : FETCH_AD_DATA_FAIL,
		errorMessage
	}
}

export const FETCH_AD_DATA_SUCCESS = "FETCH_AD_DATA_SUCCESS"
export function fetchAdDataSuccess(response) {
	return {
		type : FETCH_AD_DATA_SUCCESS,
		response
	}
}

export const KEYS_TO_URLS = "KEYS_TO_URLS"
export function keysToUrls(keys) {
	return {
		type : KEYS_TO_URLS , 
		keys
	}
}

export const ON_CHANGE_IMAGE_URLS  = "ON_CHANGE_IMAGE_URLS"
export function onChangeImageUrls(imageUrls) {
	return {
		type: ON_CHANGE_IMAGE_URLS ,
		imageUrls
	}
}

export const ON_SEND_ACTION = "ON_SEND_ACTION" 
export function onSendAction(payload) {
	return {
		type : ON_SEND_ACTION , 
		payload
	}
}

export const ACTION_SUCCESS = "ACTION_SUCCESS"
export function actionSuccess(response) {
	return {
		type : ACTION_SUCCESS , 
		response
	}
}

export const ACTION_FAIL = "ACTION_FAIL"
export function actionFail(errorMessage) {
	return {
		type : ACTION_FAIL , 
		errorMessage
	}
}