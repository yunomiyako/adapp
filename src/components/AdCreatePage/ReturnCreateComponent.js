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
		case 1 :
			return this.imageAndText()
		case 2 :
			return this.imageOnly()
		case 3 :
			return this.textOnly()
		default :
			return "おや？"
		}
	}

	renderTextField() {
		return (
			<Form>
				<TextArea autoHeight placeholder='説明を書いてね' rows={3}
					onChange={(event) => this.props.onChangeText(event.target.value)}
				/>
			</Form>
		)
	}

	imageAndText() {
		return (
			<div>
				<AdImageUploader
					onChangePictures={(pictures) => this.props.onChangePictures(pictures)}
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
