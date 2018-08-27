import { Storage } from "aws-amplify"

export const imageUpload = function(path , file) {
	return Storage.put(path, file, {
		contentType: "image/png"
	})
}

export const textUpload = function(path , file) {
	return Storage.put(path, file, {
		contentType: "text/plain"
	})
}