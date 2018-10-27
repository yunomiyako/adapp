import getUrlsFromKeys from "../api/getUrlsFromKeys"

export default (keys , callback) => {
	getUrlsFromKeys(keys).then(urls => {
		callback(urls)
	})
}