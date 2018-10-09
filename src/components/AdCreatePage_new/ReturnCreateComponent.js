import React , {Component}  from "react"

//Components
import AdImageUploader from "./deplicated/AdImageUploader"
import UploaderWithSlider from "./UploaderWithSlider"

//css
import "./AdCreatePage.css"

//semantic UI
import { Form, TextArea } from "semantic-ui-react"

// immutable state change helper
var dotProp = require("dot-prop-immutable")


class ReturnCreateComponent extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(var key2 of keys2) {
			if (nextState[key2] !== this.props[key2]) {
				return true
			}
		}
		return false
	}

	componentDidUpdate(prevProps){
		const name =
			this.constructor.displayName || this.constructor.name || "Component"
		console.group(name)
		Object.keys(prevProps).forEach(key => {
			if (prevProps[key] !== this.props[key]) {
				console.log(
					`property ${key} changed from ${prevProps[key]} to ${
						this.props[key]
					}`
				)
			}
		})
		console.groupEnd(name)
	}

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

	onChangeText = (event) => {
		const newObj = dotProp.set(this.props.returnObject , "text" , event.target.value)
		this.props.onChangeReturnObject(newObj)
	}
	onChangePictures = (picture) => {
		const newObj = dotProp.set(this.props.returnObject , "images" , picture)
		this.props.onChangeReturnObject(newObj)
	}

	renderTextField(row_num) {
		return (
			<Form>
				<TextArea autoHeight placeholder='説明を書いてね' rows={row_num}
					onChange={this.onChangeText}
					value={this.props.returnObject.text}
				/>
			</Form>
		)
	}

	imageAndText() {
		return (
			<div>
				{this.renderTextField(3)}
				<UploaderWithSlider
					id="returncreate"
					onChangePictures={this.onChangePictures}
					pictures = {this.props.returnObject.images}
				/>
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
				{this.renderTextField(10)}
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
