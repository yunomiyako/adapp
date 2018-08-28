import { Storage } from "aws-amplify"

export const fileDownload = function(path) {
	console.log(path + "is download")
	return Storage.get(path)
}