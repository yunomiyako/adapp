import {get_access_token} from "./twitter_access_token"

export default function() {
	//localにアクセストークンがあればログインしている
	if(get_access_token()) {
		return true
	}else {
		return false
	}
}