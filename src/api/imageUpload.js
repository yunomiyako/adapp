import { Storage } from "aws-amplify"

export const imageUpload = function(path , file) {
	console.log(path + "is upload")
	return Storage.put(path, file, {
		contentType: "image/png"
	})
}

export const textUpload = function(path , file) {
	return Storage.put(path, file, {
		contentType: "text/plain"
	})
}

export const imageUploadUser = function(path , file , username) {
	const new_path = username + "/" + path
	return imageUpload(new_path , file)
}

export const imagesUploadUser = function(path , files , username) {
	if(files.length == 0) {return new Error("画像がないよ")}
	return files.map(file => {
		return imageUploadUser(path , file , username)
	})
} 


export const imageUploadUserWithRandomName = function(files , username) {
	if(files.length == 0) {return new Error("画像がないよ")}
	return files.map(file => {
		const uuid = btoa(crypto.getRandomValues(new Uint8Array(16)))
		return imageUploadUser(uuid , file , username)
	})
}