import ReturnTypeEnum from "./enum/ReturnTypeEnum"

export default function getReturnData(type , CASE = 0) {
	switch (type) {
	case ReturnTypeEnum.textAndImage.string:
		switch(CASE) {
		case 0 : return {text : "Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque." , image_list : ["https://saturn.jpl.nasa.gov/system/resources/detail_files/7639_Cassini_A.jpg","https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg","https://www.pakutaso.com/shared/img/thumb/ookawaIMGL9998_TP_V.jpg"]}
		case 1 : return {text : "ハリネズミ" , image_list : ["https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg"]}
		default : return {text : "" , image_list : []}
		}
	case ReturnTypeEnum.textOnly.string :
		switch(CASE) {
		case 0 : return {text : "おわ〜〜" }
		default : return {text : "aaaaaaaaああああああ" }
		}
	case ReturnTypeEnum.premium.string :
		return {}
	case ReturnTypeEnum.lottery.string :
		return {}
	default:
		return {}
	}
}
