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
		titleCreator.addText("犬の写真")
		titleCreator.addText("最近描いた絵")
		titleCreator.addText("オリジナルマンガ")
		return titleCreator.titles
	case "textOnly" :
		titleCreator.addText("私の半生")
		titleCreator.addText("年収")
		return titleCreator.titles
	case "premium" :
		titleCreator.addText("")
		titleCreator.addText("")
		titleCreator.addText("")
		return titleCreator.titles
	default:
	}
}
