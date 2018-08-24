import defineEnum from "./enum"

export default defineEnum({
	tweet : {
		string : "tweet" , 
		title : "ツイートしてもらう&画像" , 
		description : "あなたが宣伝してほしいことをツイートしてもらえます。" , 
		popupTitle : "Twitterのログインが必要です" , 
		icon : "share" , 
		disabled : false
	},
	retweet : {
		string : "retweet" , 
		title : "リツイートしてもらう",
		description : "宣伝してほしいツイートをリツイートしてもらえます。" , 
		popupTitle : "Twitterのログインが必要です" , 
		icon : "retweet" , 
		disabled : false
	},
	follow : {
		string : "follow" , 
		title : "フォローしてもらう",
		description : "あなたのアカウントをフォローしてもらえます。",
		popupTitle : "準備中" , 
		icon : "child" , 
		disabled : false

	} ,
	fav : {
		string : "fav" , 
		title : "いいねしてもらう",
		description : "あなたのツイートをいいねしてもらって、盛り上がっているように見えます！",
		popupTitle : "プレミアム会員限定" , 
		icon : "heart" , 
		disabled : false
	},
	lookMe : {
		string : "lookMe" , 
		title : "見てもらう",
		description : "ただ見てほしいことを文章と画像で表現しよう",
		popupTitle : "" , 
		icon : "eye" , 
		disabled : false
	}
})
