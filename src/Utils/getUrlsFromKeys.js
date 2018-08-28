import getUrlsFromKeys from "../api/getUrlsFromKeys"

export default (keys , callback) => {
	getUrlsFromKeys(keys).then(urls => {
		console.log("urls = " + urls.length)
		callback(urls)
	})
}