const prefix = "RETURNPAGE_"

export const ON_UPDATE_RETURN_TYPE  = prefix + "ON_UPDATE_RETURN_TYPE"
export function onUpdateReturnType(returnType) {
	return {
		type: ON_UPDATE_RETURN_TYPE,
		returnType
	}
}

export const ON_UPDATE_RETURN_OBJECT  = prefix + "ON_UPDATE_RETURN_OBJECT"
export function onUpdateReturnObject(returnObject) {
	return {
		type: ON_UPDATE_RETURN_OBJECT,
		returnObject
	}
}

export const ON_FETCH_RETURN =prefix +  "ON_FETCH_RETURN"
export function onFetchReturn(id_return) {
	return {
		type : ON_FETCH_RETURN , 
		id_return
	}
}

export const ON_UPDATE_RETURN_IMAGE_URLS = prefix + "ON_UPDATE_RETURN_IMAGE_URLS"
export function onUpdateReturnImageUrls(urls) {
	return {
		type : ON_UPDATE_RETURN_IMAGE_URLS,  
		urls
	}
}

export const ON_UPDATE_RATING = prefix + "ON_UPDATE_RATING"
export function onUpdateRating(rating) {
	return {
		type : ON_UPDATE_RATING , 
		rating
	}
}

export const ON_UPDATE_RETURN_DESCRIPTION= prefix + "ON_UPDATE_RETURN_DESCRIPTION"
export function onUpdateReturnDescription(returnDescription) {
	return {
		type : ON_UPDATE_RETURN_DESCRIPTION , 
		returnDescription
	}
}


export const ON_UPDATE_AD_INFO = prefix + "ON_UPDATE_AD_INFO"
export function onUpdateAdInfo(ad_info) {
	return {
		type : ON_UPDATE_AD_INFO , 
		ad_info
	}
}


export const ON_FAIL_FETCH_RETURN = prefix + "ON_FAIL_FETCH_RETURN"
export function onFailFetchReturn(errorMessage) {
	return {
		type : ON_FAIL_FETCH_RETURN , 
		errorMessage
	}
}

export const ON_CLEAR_RETURN_PAGE = prefix + "ON_CLEAR_RETURN_PAGE"
export function onClearReturnPage() {
	return {
		type : ON_CLEAR_RETURN_PAGE
	}
}