import UserDetailDataStructure from "../domain/UserDetailDataStructure"

const USER_DETAIL = "local_user_detail" //user_detailという名前だと書き込まれなかった

export const get_userdetail = () => {
	const user_detail = localStorage.getItem(USER_DETAIL)
	if (user_detail) {
		return JSON.parse(localStorage.getItem(USER_DETAIL))
	}
}

export const set_userdetail = (detail) => {
	const data = new UserDetailDataStructure(detail)
	console.log(USER_DETAIL)
	console.log(JSON.stringify(data))
	localStorage.setItem(USER_DETAIL, JSON.stringify(data))
}

export const get_id_user = () => {
	const detail = get_userdetail()
	console.log("get id_user from local")
	console.log(detail)
	return detail["id_user"] || "temp_id_user"
}