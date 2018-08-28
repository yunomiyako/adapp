import {fileDownload} from "../api/fileDownload"

export default (keys , callback) => {
	//TODO キャッシュする
	
	const promises = keys.map(path => {
		return fileDownload(path)
	})

	Promise.all(promises).then(urls => {
		console.log("urls = " + urls.length)
		callback(urls)
	})
}