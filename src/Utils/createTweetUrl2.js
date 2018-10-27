export default function( message) {
	const baseUrl = "https://twitter.com/share?"
	const refBaseUrl = "https://adapp9.com/iconbattle"
	const refUrl = refBaseUrl
	const text = message
	return baseUrl + "url=" + refUrl + "&" + "hashtags=adApp,アイコン惑星&text=" + text 
}