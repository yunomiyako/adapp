//twitterのアイコンを大きくします
export default function(url) {
	return url.replace("_normal" , "").replace("http://" , "https://")
}