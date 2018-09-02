
const USERNAME = "anonymous_username"
const PASSWORD = "anonymous_password"
export const get_username = () => {
	return localStorage.getItem(USERNAME)
}

export const get_password = () => {
	return localStorage.getItem(PASSWORD)
}

export const set_username = (username) => {
	localStorage.setItem(USERNAME, username)
}

export const set_password = (password) => {
	localStorage.setItem(PASSWORD, password)
}