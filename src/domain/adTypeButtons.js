import TypeSelectionButtonFactory from "./TypeSelectionButtonFactory"
import AdTypeEnum from "./enum/AdTypeEnum"

var adTypeButtons = new TypeSelectionButtonFactory()
//EnumからReturnTypeButtonで必要になる情報へ変換
AdTypeEnum.forEach((type) => adTypeButtons.addButton(type.string ,type.title , type.description , type.icon , type.popupText , type.disabled , type.needLogin))
export default adTypeButtons.buttons
