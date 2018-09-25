export default function(url) {
	const splitted_url = url.split("/")
	if(splitted_url.length == 6) {
		return splitted_url[5]
	} else {
		return undefined
	}
}