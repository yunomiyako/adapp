import UserDetailDataStructure from "../domain/UserDetailDataStructure"
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import { set_userdetail } from "../localStorage/user_detail"

//注意 : 自分自身の値がほしい時はself_info = trueにする
export default function(id_user , self_info = false) {
	const apiName = "adApp"
	const path = "/users"
	const init = { 
		queryStringParameters:  self_info ?  {} : {"id_user" : id_user}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		body.username = body.name
		const result = new UserDetailDataStructure(body)

		//自分自身の値は保存する
		if(self_info) {
			set_userdetail(result)
		}
		return result
	}).catch(e => {
		console.log("fetchUserDetail catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}