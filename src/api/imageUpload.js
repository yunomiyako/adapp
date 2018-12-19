import { Storage } from "aws-amplify"
import ImageCompressor from "image-compressor.js"

export const imageUpload = function(path , file) {
	const imageCompressor = new ImageCompressor()
	return imageCompressor.compress(file , {quality : 0.5 , maxWidth : 1000 , maxHeight:1000}).then(result => {
		return Storage.put(path, result , {
			contentType: "image/png"
		})
	}).catch(e => {
		//TODO 呼ばれるか確認
		console.log(e)
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
	if(files.length === 0) {return new Error("画像がないよ")}
	return files.map(file => {
		return imageUploadUser(path , file , username)
	})
} 

export const imageUploadUserWithRandomName = function(files , username) {

	if(files.length === 0) {return new Error("画像がないよ")}
	return files.map(file => {

		const uuid = btoa(crypto.getRandomValues(new Uint8Array(16)))
		return imageUploadUser(uuid , file , username)
	})
}