import {fileDownload} from "./fileDownload"

export default (keys ) => {
	//TODO キャッシュする
	
	const promises = keys.map(path => {
		return fileDownload(path)
	})

	return Promise.all(promises)
}