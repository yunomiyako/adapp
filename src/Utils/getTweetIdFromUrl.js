export default function(url) {
	const baseUrl = url.split("?")[0]
	const splitted_url = baseUrl.split("/")
	if(splitted_url.length === 6) {
		return splitted_url[5]
	} else {
		return undefined
	}
}