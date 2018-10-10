import AdTypeEnum from "../domain/enum/AdTypeEnum"

export default function(id_user, id_ad , adType) {
	const baseUrl = "https://twitter.com/share?"
	const refBaseUrl = "http://adapp2018.s3-website-ap-northeast-1.amazonaws.com/"
	const refUrl = refBaseUrl + "ad_page/" + id_user + "/" + id_ad
	const action = AdTypeEnum.getByName(adType).short_title
	const text = "adAppで宣伝を作りました！\n\nadAppを通して" + action + "をしてくれたらお返しがあります。"
	return baseUrl + "url=" + refUrl + "&" + "hashtags=adApp&text=" + text 
}