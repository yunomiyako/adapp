import { Storage } from "aws-amplify"

export const fileDownload = function(path , prefix = "public/") {
	if(path) {
		//return Storage.get(path)
		const baseUrl = "https://s3-ap-northeast-1.amazonaws.com/adapp-image-folder/"
		return baseUrl + prefix + path
	} else {
		return undefined
	}
}

export const fileDownloadPrivate = function(path , prefix = "test/") {
	if(path) {
		/* return Storage.vault.get(prefix + path ,{
			bucket : "adapp-image-folder-private"
		}) */
		const baseUrl = "https://s3-ap-northeast-1.amazonaws.com/adapp-image-folder-private/"
		return new Promise((resolve) => {
			resolve(baseUrl + prefix + path)
		})
	} else {
		return undefined
	}
}

export const fileDownloadPrivate2 = function(path , prefix = "test/") {
	if(path) {
		/* return Storage.vault.get(prefix + path ,{
			bucket : "adapp-image-folder-private"
		}) */
		const baseUrl = "https://s3-ap-northeast-1.amazonaws.com/adapp-image-folder-private/"
		return baseUrl + prefix + path
	} else {
		return undefined
	}
}
