import { Storage } from "aws-amplify"

export const fileDownload = function(path) {
	if(path) {
		console.log(path + "is download")
		return Storage.get(path)
	} else {
		return undefined
	}
}