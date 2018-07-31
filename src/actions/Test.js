export const FETCH_DB_DATA  = "FETCH_DB_DATA"
export function fetchDbData() {
	return {
		type: FETCH_DB_DATA
	}
}

export const ON_CHANGE_USERINFO = "ON_CHANGE_USERINFO"
export function onChangeUserInfo(username) {
	return {
		type : ON_CHANGE_USERINFO,
		username
	}
}
