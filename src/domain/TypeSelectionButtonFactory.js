//factory pattern?(tabun)
class TypeSelectionButtonFactory {
	constructor(){
		this.buttons = []
	}

	addButton(id, text , description , icon , popupText , disabled , needLogin) {
		this.buttons.push({id: id , btnText : text , description : description , icon : icon  
			, popupText : popupText  , disabled:disabled , needLogin : needLogin } )
	}
}

export default TypeSelectionButtonFactory
