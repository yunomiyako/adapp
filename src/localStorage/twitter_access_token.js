const TWITTER_ACCESS_TOKEN = "twitter_access_token" 
const TWITTER_ACCESS_TOKEN_SECRET = "twitter_access_token_secret"

export const get_access_token = () => {
	return localStorage.getItem(TWITTER_ACCESS_TOKEN)
}

export const get_access_token_secret = () => {
	return localStorage.getItem(TWITTER_ACCESS_TOKEN_SECRET)
}

export const set_access_token = (access_token) => {
	localStorage.setItem(TWITTER_ACCESS_TOKEN, access_token)
}

export const set_access_token_secret = (access_token_secret) => {
	localStorage.setItem(TWITTER_ACCESS_TOKEN_SECRET, access_token_secret)
}
