import React , {Component}  from "react"

//Components
import AdImageUploader from "./AdImageUploader"

//css
import "./AdCreatePage.css"

//semantic UI
import { Form, TextArea } from "semantic-ui-react"

// immutable state change helper
var dotProp = require("dot-prop-immutable")


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
		const newObj = dotProp.set(this.props.returnObject , "text" , text)
		this.props.onChangeReturnObject(newObj)
	}
	onChangePictures(picture) {
		const newObj = dotProp.set(this.props.returnObject , "images" , picture)
		this.props.onChangeReturnObject(newObj)
	}

	renderTextField() {
		return (
			<Form>
				<TextArea autoHeight placeholder='説明を書いてね' rows={3}
					onChange={(event) => this.onChangeText(event.target.value)}
					value={this.props.returnObject.text}
				/>
			</Form>
		)
	}

	imageAndText() {
		return (
			<div>
				<AdImageUploader
					id="returncreate"
					onChangePictures={(pictures) => this.onChangePictures(pictures)}
					maxNum = {10}
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
