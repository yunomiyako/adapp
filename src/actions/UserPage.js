const prefix = "USERPAGE_"


export const GET_AD_LIST =prefix +  "GET_AD_LIST"
export function getAdList(id_user) {
	return {
		type: GET_AD_LIST ,
		id_user
	}
}

export const GET_RETURN_LIST =prefix +  "GET_RETURN_LIST"
export function getReturnList() {
	return {
		type: GET_RETURN_LIST 
	}
}


export const SET_AD_LIST =prefix +  "SET_AD_LIST"
export function setAdList(ad_list) {
	return {
		type: SET_AD_LIST ,
		ad_list
	}
}

export const SET_LOADING = prefix + "SET_LOADING"
export function setLoading(loading) {
	return {
		type : SET_LOADING , 
		loading
	}
}


export const SET_RETURN_LIST = prefix + "SET_RETURN_LIST"
export function setReturnList(return_list) {
	return {
		type: SET_RETURN_LIST ,
		return_list
	}
}