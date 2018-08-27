import { Storage } from "aws-amplify"

export const fileDownload = function(path) {
	return Storage.get(path)
}