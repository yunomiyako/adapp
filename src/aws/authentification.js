
import { Auth } from "aws-amplify"

export default function() {
	const saved_username = localStorage.getItem("anonymous_username")
	const saved_password = localStorage.getItem("anonymous_password")
    
	var username = btoa(crypto.getRandomValues(new Uint8Array(16)))
	var password = btoa(crypto.getRandomValues(new Uint8Array(16)))

	if(saved_username && saved_password) {
		console.log("サインアップ済み")
		username = saved_username
		password = saved_password
	} else {
		console.log("サインアップ")
		localStorage.setItem("anonymous_username", username)
		localStorage.setItem("anonymous_password", password)
	}
	
	Auth.currentAuthenticatedUser().then(user => {
		console.log("signed in")
		console.log(user)
		console.log(user.username)
	})
		.catch(err => {
			Auth.signUp({
				username,
				password,
			})
				.then(data => {
					Auth.signIn(username, password)
						.then(user => {
							console.log("signed up")
							console.log(user)
						})
						.catch(err => console.log(err))
				})
				.catch(err => console.log(err))
		})
}