import defineEnum from "./enum"

export default defineEnum({
	tweet : {
		string : "tweet" , 
		title : "ツイートしてもらう" , 
		description : "あなたが宣伝してほしいことをツイートしてもらえます(敷居:大)" , 
		popupTitle : "Twitterのログインが必要です" , 
		icon : "share" , 
		disabled : false , 
		short_title : "ツイート"
	},
	retweet : {
		string : "retweet" , 
		title : "リツイートしてもらう",
		description : "宣伝してほしいツイートをリツイートしてもらえます(敷居:中)" , 
		popupTitle : "Twitterのログインが必要です" , 
		icon : "retweet" , 
		disabled : false, 
		short_title : "リツイート"
	},
	follow : {
		string : "follow" , 
		title : "フォローしてもらう",
		description : "あなたのアカウントをフォローしてもらえます(敷居:中)",
		popupTitle : "準備中" , 
		icon : "child" , 
		disabled : false,
		short_title : "フォロー"
	} ,
	fav : {
		string : "fav" , 
		title : "いいねしてもらう",
		description : "あなたのツイートをいいねしてもらえれば、盛り上がっているように見えます(敷居:小)",
		popupTitle : "プレミアム会員限定" , 
		icon : "heart" , 
		disabled : false,
		short_title : "いいね"
	},
	lookMe : {
		string : "lookMe" , 
		title : "見てもらう",
		description : "ただ見てほしいことと、見てもらったお礼を書いてね(敷居:なし)",
		popupTitle : "" , 
		icon : "eye" , 
		disabled : false,
		short_title : "見るだけ"
	}
})
