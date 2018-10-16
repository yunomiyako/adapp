import AuthentificatedCallWrapper from "./AuthentificatedCallWrapper"
import {get_access_token , get_access_token_secret} from "../localStorage/twitter_access_token"
export default function(id_user , id_ad) {
	const apiName = "adApp"
	const path = "/return/receive"

	const init = { 
		body: {"id_user" : id_user , "id_ad" : id_ad , "access_token" : get_access_token() , "access_token_secret" : get_access_token_secret()}
	}

	return AuthentificatedCallWrapper(apiName , path , init , "post").then((res) => {
		const body = res.data
		return body
	})
}