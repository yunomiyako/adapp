const prefix = "TOPPAGE_"

export const GET_AD_LIST = prefix +  "GET_AD_LIST"
export function getAdList() {
	return {
		type: GET_AD_LIST 
	}
}

export const SET_AD_LIST = prefix +  "SET_AD_LIST"
export function setAdList(ad_list) {
	return {
		type: SET_AD_LIST , 
		ad_list
	}
}