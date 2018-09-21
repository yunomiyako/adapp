const REDIRECT_TO = "redirect_to" 

export const get_redirect_to = () => {
	return localStorage.getItem(REDIRECT_TO)
}

export const set_redirect_to = (url) => {
	localStorage.setItem(REDIRECT_TO, url)
}