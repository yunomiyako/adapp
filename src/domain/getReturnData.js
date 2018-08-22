import ReturnTypeEnum from "./enum/ReturnTypeEnum"

export default function getReturnData(type , CASE = 0) {
	switch (type) {
	case ReturnTypeEnum.textAndImage.string:
		switch(CASE) {
		case 0 : return {text : "おわ〜〜" , image_list : []}
    case 1 : return {text : "" , image_list : ["https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg"]}
		default : return {text : "" , image_list : []}
		}
	case ReturnTypeEnum.textOnly.string :
		switch(CASE) {
		case 0 : return {text : "おわ〜〜" }
		default : return {text : "" }
		}
	case ReturnTypeEnum.premium.string :
		return {}
	case ReturnTypeEnum.lottery.string :
		return {}
	default:
		return {}
	}
}
