
import { Auth } from "aws-amplify"
import {get_username , get_password , set_username, set_password} from "../localStorage/anonymous_user_login"


export default function(callback = () => "") {
	const saved_username = get_username()
	const saved_password = get_password()
    
	var username = btoa(crypto.getRandomValues(new Uint8Array(16)))
	var password = btoa(crypto.getRandomValues(new Uint8Array(16)))

	if(saved_username && saved_password) {
		username = saved_username
		password = saved_password

		return Auth.currentAuthenticatedUser().catch((e) => {
			//現在ログイン中のユーザがいないため、sign inします
			return Auth.signIn(username, password).catch((e) => {
				//sign inに失敗したため、登録を行います
				return Auth.signUp({username,password}).then(() => {
					return Auth.signIn(username, password).catch((e) => {
					})
				}).catch(e => {
				})
			})
		}).then(() => callback())

	} else {
		set_username(username)
		set_password(password)

		return Auth.signUp({username,password}).then(() => {
			return Auth.signIn(username, password).catch((e) => {
			})
		}).catch(e => {
		}).then(() => callback())
	}
}