import React  from "react"
import {Helmet} from "react-helmet"
import { fileDownload } from "../api/fileDownload"

export default function(title , image_key , path) {
	const defaultTitle = "adApp(あどあっぷ) 宣伝を加速させるwebサービス。"
	var image_url = "https://s3-ap-northeast-1.amazonaws.com/adapp-image-folder/public/example/facebook_profile_image.png?4362984378"
	var url = "https://adapp9.com"
	if(title) {
		title = title + " | " + defaultTitle
	}
	if(image_key) {
		image_url = fileDownload(image_key)
	}
	if(path) {
		url = url + "/" + path
	}

	return (
		<Helmet>
			<title>{title  || defaultTitle}</title>
			<meta property="og:url" content={url} /> 
			<meta property="og:title" content={title} /> 
			<meta property="og:description" content="SNSで気軽に宣伝するならadApp" /> 
			<meta property="og:image" content={image_url}/> 

		</Helmet>
	)

}