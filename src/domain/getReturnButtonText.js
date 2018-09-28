import AdTypeEnum from "./enum/AdTypeEnum"
import loginCheck from "../localStorage/loginCheck"

export default function getReturnButtonText(type) {
	if(loginCheck()) {
		switch (type) {
		case AdTypeEnum.tweet.string:
			return "ツイートして入手"
		case AdTypeEnum.retweet.string :
			return "リツイートして入手"
		case AdTypeEnum.follow.string :
			return "フォローして入手"
		case AdTypeEnum.fav.string :
			return "いいねして入手"
		case AdTypeEnum.lookMe.string: 
			return "見たから入手"
		default:
			return "おや？"
		}
	} else {
		switch (type) {
		case AdTypeEnum.tweet.string:
			return "ログインしてツイート"
		case AdTypeEnum.retweet.string :
			return "ログインしてリツイート"
		case AdTypeEnum.follow.string :
			return "ログインしてフォロー"
		case AdTypeEnum.fav.string :
			return "ログインしていいね"
		case AdTypeEnum.lookMe.string: 
			return "受け取る(無料)"
		default:
			return "おや？"
		}
	}
}
