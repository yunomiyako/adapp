//factory pattern?(tabun)
class TypeSelectionButtonFactory {
	constructor(){
		this.buttons = []
	}

	addButton(id, text , description , icon , popupText , disabled) {
		this.buttons.push({id: id , btnText : text , description : description , icon : icon  , popupText : popupText  , disabled:disabled} )
	}
}

export default TypeSelectionButtonFactory
