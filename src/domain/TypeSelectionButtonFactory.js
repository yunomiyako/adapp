//factory pattern?(tabun)
class TypeSelectionButtonFactory {
	constructor(){
		this.buttons = []
		this.id = 0
	}

	addButton(text , description) {
		this.buttons.push({id: this.id , btnText : text , description : description} )
		this.id += 1
	}
}

export default TypeSelectionButtonFactory
