import defineEnum from "./enum"

export default defineEnum({
	textAndImage : {
		string : "textAndImage" , 
		title : "特別な画像" , 
		description : "文章と画像で感謝の意を示しましょう" , 
		popupTitle : "" , 
		icon : "image" , 
		disabled : false , 
		needLogin : false
	},
	textOnly : {
		string : "textOnly" , 
		title : "合言葉",
		description : "何か合言葉を設定できます" , 
		popupTitle : "" , 
		icon : "file" , 
		disabled : false , 
		needLogin : false
	},
	link : {
		string : "link" , 
		title : "リンク",
		description : "特別なリンクへ招待しよう",
		popupTitle : "" , 
		icon : "linkify" , 
		disabled : false , 
		needLogin : false
	}  , 
	coupon : {
		string : "coupon" , 
		title : "クーポン",
		description : "お店で使えるクーポン画像など",
		popupTitle : "プレミアム会員限定" , 
		icon : "random" , 
		disabled : false , 
		needLogin : false
	}
})
