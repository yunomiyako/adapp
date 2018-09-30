import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"
import ReturnTypeEnum from "./enum/ReturnTypeEnum"

const returnTypeButtons = new TypeSelectionButtonFactory()

//EnumからReturnTypeButtonで必要になる情報へ変換
ReturnTypeEnum.forEach((type) => returnTypeButtons.addButton(type.string ,type.title , type.description ,
	type.icon , type.popupText , type.disabled , type.needLogin))
export default returnTypeButtons.buttons
