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
	case "tweet":
		titleCreator.addText("私の作った「　　」をツイートして")
		titleCreator.addText("みんなで作った「　　」をツイートして")
		titleCreator.addText("私の描いた「　　」をツイートして")
		return titleCreator.titles
	case "retweet" :
		titleCreator.addText("私の作った「　　」をリツイートして")
		titleCreator.addText("みんなで作った「　　」をリツイートして")
		titleCreator.addText("私の描いた「　　」をリツイートして")
		return titleCreator.titles
	case "follow" :
		titleCreator.addText("「　　」してます。フォローしてください。")
		titleCreator.addText("「　　」作ってます。フォローしてください。")
		titleCreator.addText("「　　」についてツイートしています。フォローしてください。")
		return titleCreator.titles
	case "lookMe" :
		titleCreator.addText("私の作った「　　」を見て")
		titleCreator.addText("みんなで作った「　　」を見て")
		titleCreator.addText("私の描いた「　　」を見て")
		return titleCreator.titles
	case "fav" :
		titleCreator.addText("私の作った「　　」をいいねして")
		return titleCreator.titles
	default:
		return []
	}
}
