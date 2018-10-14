
import { Auth } from "aws-amplify"
import {get_username , get_password , set_username, set_password} from "../localStorage/anonymous_user_login"


export default function(callback = () => "") {
	const saved_username = get_username()
	const saved_password = get_password()
    
	var username = btoa(crypto.getRandomValues(new Uint8Array(16)))
	var password = btoa(crypto.getRandomValues(new Uint8Array(16)))

	if(saved_username && saved_password) {
		console.log("サインアップ済み")
		username = saved_username
		password = saved_password

		return Auth.currentAuthenticatedUser().catch((e) => {
			console.log(e)
			console.log("sign in")
			//現在ログイン中のユーザがいないため、sign inします
			return Auth.signIn(username, password).catch((e) => {
				console.log(e)
				console.log("sign up")
				//sign inに失敗したため、登録を行います
				return Auth.signUp({username,password}).then(() => {
					console.log("sign in")
					return Auth.signIn(username, password).catch((e) => {
						console.log(e)
						console.log("なんでやねん")
					})
				}).catch(e => {
					console.log(e)
					console.log("同時にsign upした場合")
				})
			})
		}).then(() => callback())

	} else {
		console.log("サインアップ")
		set_username(username)
		set_password(password)

		return Auth.signUp({username,password}).then(() => {
			console.log("sign in")
			return Auth.signIn(username, password).catch((e) => {
				console.log(e)
				console.log("なんでやねん")
			})
		}).catch(e => {
			console.log(e)
			console.log("同時にsign upした場合")
		}).then(() => callback())
	}
}