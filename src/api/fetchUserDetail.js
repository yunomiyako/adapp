import UserDetailDataStructure from "../domain/UserDetailDataStructure"
import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import { set_userdetail } from "../localStorage/user_detail"

export default function() {
	const apiName = "adApp"
	const path = "/users"
	const init = { 
		queryStringParameters:  {}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "get").then((res) => {
		const body = res.data
		const result = new UserDetailDataStructure(body)
		set_userdetail(result)
		return result
	}).catch(e => {
		console.log("fetchUserDetail catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}