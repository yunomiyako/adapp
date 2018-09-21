import AdTypeEnum from "./enum/AdTypeEnum"

//使わないかも
export default function getReturnButtonText(type) {
	switch (type) {
	case AdTypeEnum.tweet.string:
		return "上記内容がツイートされます。"
	case AdTypeEnum.retweet.string :
		return "上記内容のツイートがリツイートされます。"
	case AdTypeEnum.follow.string :
		return "この宣伝を作成した方のアカウントをフォローします。"
	case AdTypeEnum.fav.string :
		return "上記内容のツイートをいいねします。"
	case AdTypeEnum.lookMe.string: 
		return ""
	default:
		return "おや？"
	}
}
