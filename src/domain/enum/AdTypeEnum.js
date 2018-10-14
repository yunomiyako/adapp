import defineEnum from "./enum"

export default defineEnum({
	tweet : {
		string : "tweet" , 
		title : "ツイートしてもらう" , 
		description : "あなたが宣伝してほしいことをツイートしてもらえます(敷居:大)" , 
		popupTitle : "Twitterのログインが必要です" , 
		icon : "share" , 
		disabled : false , 
		short_title : "ツイート" , 
		has_tweet_object : false ,
		needLogin : true , 
		mainText : "ツイートしてもらおう" , 
		subText : "他人にツイートしてもらう、そんなことadApp以外じゃできない"
	},
	retweet : {
		string : "retweet" , 
		title : "リツイートしてもらう",
		description : "宣伝してほしいツイートをリツイートしてもらえます(敷居:中)" , 
		popupTitle : "Twitterのログインが必要です" , 
		icon : "retweet" , 
		disabled : false, 
		short_title : "リツイート" , 
		has_tweet_object : true ,
		needLogin : false ,
		mainText : "リツイートして欲しい！" , 
		subText : "だってたくさんの人に見てほしいから"
	},
	follow : {
		string : "follow" , 
		title : "フォローしてもらう",
		description : "あなたのアカウントをフォローしてもらえます(敷居:中)",
		popupTitle : "準備中" , 
		icon : "child" , 
		disabled : false,
		short_title : "フォロー" , 
		has_tweet_object : false, 
		needLogin : true,
		mainText : "フォローして欲しい？" , 
		subText : "フォロワー増やしたいよね"
	} ,
	fav : {
		string : "fav" , 
		title : "いいねしてもらう",
		description : "あなたのツイートをいいねしてもらえれば、盛り上がっているように見えます(敷居:小)",
		popupTitle : "プレミアム会員限定" , 
		icon : "heart" , 
		disabled : false,
		short_title : "いいね" , 
		has_tweet_object : true , 
		needLogin : false,
		mainText : "いいねが欲しい？" , 
		subText : "あなたのツイートがまるで人気のツイートのように"
	},
	lookMe : {
		string : "lookMe" , 
		title : "見てもらう",
		description : "ただ見てほしいことと、見てもらったお礼を書いてね(敷居:なし)",
		popupTitle : "" , 
		icon : "eye" , 
		disabled : false,
		short_title : "見るだけ" , 
		has_tweet_object : false , 
		needLogin : false,
		mainText : "見てほしい。。。" , 
		subText : "ただ見てほしい、それだけでも"
	}
})
