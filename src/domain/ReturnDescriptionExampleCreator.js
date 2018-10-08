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
		titleCreator.addText("秘密の写真")
		titleCreator.addText("お礼の気持ち")
		return titleCreator.titles
	case "textOnly" :
		titleCreator.addText("秘密のURL")
		titleCreator.addText("秘密の話")
		titleCreator.addText("お礼の気持ち")
		return titleCreator.titles
	case "premium" :
		titleCreator.addText("")
		titleCreator.addText("")
		titleCreator.addText("")
		return titleCreator.titles
	default:
	}
}
