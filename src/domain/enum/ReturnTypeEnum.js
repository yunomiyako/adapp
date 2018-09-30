import defineEnum from "./enum"

export default defineEnum({
	textAndImage : {
		string : "textAndImage" , 
		title : "テキスト&画像" , 
		description : "文章と画像で感謝の意を示しましょう" , 
		popupTitle : "" , 
		icon : "image" , 
		disabled : false , 
		needLogin : false
	},
	textOnly : {
		string : "textOnly" , 
		title : "テキストのみ！",
		description : "たくさん文字を書けます。秘密の話を書いてください。" , 
		popupTitle : "" , 
		icon : "file" , 
		disabled : false , 
		needLogin : false
	},
	premium : {
		string : "premium" , 
		title : "画像ガチャ",
		description : "画像のガチャを作成できます。宣伝してくれた人は１回無料で引くことができます。",
		popupTitle : "プレミアム会員限定" , 
		icon : "random" , 
		disabled : true , 
		needLogin : true

	} ,
	lottery : {
		string : "lottery" , 
		title : "抽選",
		description : "当選確率や当選人数を設定できます",
		popupTitle : "プレミアム会員限定" , 
		icon : "random" , 
		disabled : true , 
		needLogin : true
	} , 
	buyReturn : {
		string : "buyReturn" , 
		title : "他の人のお返しを買う" , 
		description : "お返しが思いつかない人は、他の人が作ったお返しを買うことができます。" , 
		popupTitle : "" , 
		icon : "cny" , 
		disabled : true ,
		needLogin : true
	}
})
