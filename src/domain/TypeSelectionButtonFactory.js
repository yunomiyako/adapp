//factory pattern?(tabun)
class TypeSelectionButtonFactory {
	constructor(){
		this.buttons = []
	}

	addButton(id, text , description , disabled) {
		this.buttons.push({id: id , btnText : text , description : description , disabled:disabled} )
	}
}

export default TypeSelectionButtonFactory
