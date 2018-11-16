export const cellTitleGenerate = (index) => {
	const list = ["A賞" , "B賞" , "C賞" ,  "D賞" , "E賞"]
	return list[index]
}

export const placeHolderGenerate = (index) => {
	const list = [
		"amazonギフト券500円分" , 
		"itunesカード2000円分" ,
		"クーポン", 
		"ハンドメイドグッズ" ,
		"ビールサーバ" 
	]
	return list[index]
}