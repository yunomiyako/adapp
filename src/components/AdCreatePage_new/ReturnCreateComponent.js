import React , {Component}  from "react"

//Components
import AdImageUploader from "./AdImageUploader"

//css
import "./AdCreatePage.css"

//semantic UI
import { Form, TextArea } from "semantic-ui-react"

class ReturnCreateComponent extends Component {
	renderAdCreate(){
		const returnType = this.props.returnType
		switch(returnType){
		case "textAndImage" :
			return this.imageAndText()
		case "textOnly" :
			return this.textOnly()
		case "imageOnly" :
			return this.imageOnly()
		default :
			return "おや？"
		}
	}

	onChangeText(text) {
		console.log(text)
	}
	onChangePictures(picture) {
		console.log(picture)
	}

	renderTextField() {
		return (
			<Form>
				<TextArea autoHeight placeholder='説明を書いてね' rows={3}
					onChange={(event) => this.onChangeText(event.target.value)}
				/>
			</Form>
		)
	}

	imageAndText() {
		return (
			<div>
				<AdImageUploader
					onChangePictures={(pictures) => this.onChangePictures(pictures)}
				/>
				{this.renderTextField()}
			</div>
		)
	}

	imageOnly() {
		return (
			<AdImageUploader/>
		)
	}

	textOnly() {
		return (
			<div>
				{this.renderTextField()}
			</div>
		)
	}

	render() {
		return (
			<div className="AdCreatePage-ReturnCreateComponent">
				{this.renderAdCreate()}
			</div>
		)
	}
}

export default ReturnCreateComponent
