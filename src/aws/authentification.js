
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
	} else {
		console.log("サインアップ")
		set_username(username)
		set_password(password)
	}
	
	Auth.currentAuthenticatedUser().then(user => {
		console.log("signed in")
		console.log(user)
		console.log(user.username)
		callback()
	}).catch(err => {
		Auth.signIn(username, password)
			.then(user => {
				console.log("signed up")
				console.log(user)
				callback()
			})
			.catch(err => console.log(err))

	}).catch(err => {
		Auth.signUp({
			username,
			password,
		})
			.then(data => {
				Auth.signIn(username, password)
					.then(user => {
						console.log("signed up")
						console.log(user)
						callback()
					})
					.catch(err => console.log(err))
			})
			.catch(err => console.log(err))
	})
}