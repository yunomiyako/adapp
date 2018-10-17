import AdTypeEnum from "../domain/enum/AdTypeEnum"

export default function(id_user, id_ad , adType , message) {
	const baseUrl = "https://twitter.com/share?"
	const refBaseUrl = "https://adapp9.com"
	const refUrl = encodeURIComponent(refBaseUrl + "?type=ad_page&id_user=" + id_user + "&id_ad=" + id_ad)
	const action = AdTypeEnum.getByName(adType).short_title
	const text = message.replace("action" , action)
	return baseUrl + "url=" + refUrl + "&" + "hashtags=adApp,あどあっぷ&text=" + text 
}