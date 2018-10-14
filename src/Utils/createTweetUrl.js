import AdTypeEnum from "../domain/enum/AdTypeEnum"

export default function(id_user, id_ad , adType) {
	const baseUrl = "https://twitter.com/share?"
	const refBaseUrl = "https://adapp9.com"
	const refUrl = encodeURIComponent(refBaseUrl + "?type=ad_page&id_user=" + id_user + "&id_ad=" + id_ad)
	const action = AdTypeEnum.getByName(adType).short_title
	const text = "adAppで宣伝を作りました！%0AadAppを通して" + action + "をしてくれたらお返しがあります。%0A%0A"
	return baseUrl + "url=" + refUrl + "&" + "hashtags=adApp&text=" + text 
}