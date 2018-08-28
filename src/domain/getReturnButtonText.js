import AdTypeEnum from "./enum/AdTypeEnum"

export default function getReturnButtonText(type) {
	switch (type) {
	case AdTypeEnum.tweet.string:
		return "ツイートして受け取る"
	case AdTypeEnum.retweet.string :
		return "リツイートして受け取る"
	case AdTypeEnum.follow.string :
		return "フォローして受け取る"
	case AdTypeEnum.fav.string :
		return "いいねして受け取る"
	case AdTypeEnum.lookMe.string: 
		return "受け取る(無料)"
	default:
		return "おや？"
	}
}
