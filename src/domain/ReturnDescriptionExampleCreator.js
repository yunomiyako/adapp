class TitleCreator {
	constructor(){
		this.titles = []
		this.id = 1
	}

	addText(text) {
		const val = text.replace(/\s+/g, "")
		this.titles.push({text :text , value: val , key:this.id})
		this.id += 1
	}

}


export default (adType) => {
	var titleCreator = new TitleCreator()
	switch (adType) {
	case "textAndImage":
		titleCreator.addText("さらなる画像")
		titleCreator.addText("秘密の画像")
		titleCreator.addText("旅行の写真")
		titleCreator.addText("即興で描いた落書き")
		titleCreator.addText("イラスト・漫画")
		titleCreator.addText("自分の写真")
		titleCreator.addText("お礼の気持ち")
		return titleCreator.titles
	case "textOnly" :
		titleCreator.addText("秘密のURL")
		titleCreator.addText("秘密の話")
		titleCreator.addText("お礼の気持ち")
		titleCreator.addText("即興ポエム")
		titleCreator.addText("今まで付き合った人数")
		titleCreator.addText("オススメの動画")
		titleCreator.addText("生きていてよかったと思える出来事")
		titleCreator.addText("お気に入りのフォロワー")
		titleCreator.addText("好きな異性のタイプ")
		titleCreator.addText("前科について")
		titleCreator.addText("最新のDMログ公開")
		titleCreator.addText("仕事(学生なら専攻)の内容")
		titleCreator.addText("年収")
		return titleCreator.titles
	case "link" :
		titleCreator.addText("動画へのリンク")
		titleCreator.addText("サイトへのリンク")
		titleCreator.addText("秘密のサイト")
		return titleCreator.titles
	case "coupon" : 
		titleCreator.addText("30円引きクーポン")
		titleCreator.addText("1品無料")
		titleCreator.addText("10000円のアマゾンギフト券")
		return titleCreator.titles
	default:
	}
}
