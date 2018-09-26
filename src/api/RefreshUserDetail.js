import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import {get_access_token , get_access_token_secret} from "../localStorage/twitter_access_token"
import UserDetailDataStructure from "../domain/UserDetailDataStructure"
import { set_userdetail } from "../localStorage/user_detail"
export default function() {
	const apiName = "adApp"
	const path = "/users/detail/twitter" 

	const init = { 
		body: {
			"access_token" : get_access_token() , 
			"access_token_secret" : get_access_token_secret()
		}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		console.log("refreshUserDetail then")
		console.log(res)
		const body = res.data
		const result = {
			screen_name : body.screen_name,
			username : body.name,
			profile_image_url : body.profile_image_url,
			description : body.description,
			id_user : body.id_user
		  }
		const user_detail = new UserDetailDataStructure(result)
		set_userdetail(user_detail)
		return user_detail
	}).catch(e => {
		console.log("refreshUserDetail catch")
		console.log(e)
		throw new Error("何かしらのエラーだよ")
	})
}