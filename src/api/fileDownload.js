// import { Storage } from "aws-amplify"

export const fileDownload = function(path) {
	if(path) {
		//return Storage.get(path)
		const baseUrl = "https://s3-ap-northeast-1.amazonaws.com/adapp-image-folder/"
		return baseUrl + "public/" + path
	} else {
		return undefined
	}
}