import React , {Component}  from "react"

//css
//import style from "./AdCreatePage.css"

//semantic UI
import {Form , TextArea} from "semantic-ui-react"

import FeedComponent from "../AdPage_new/FeedComponent"
import UploaderWithSlider from "./UploaderWithSlider"
// immutable state change helper
var dotProp = require("dot-prop-immutable")

class OnlyLookAdCreate extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}

	renderAdContent() {
		return <FeedComponent
			title={this.props.title}
			username=""
			content={this.props.adObject.text}
		/>
	}

	onChangeText = (event) => {
		const newObj = dotProp.set(this.props.adObject , "text" , event.target.value)
		this.props.onChangeAdObject(newObj)
	}

	onChangePictures = (pictures) => {
		const newObj = dotProp.set(this.props.adObject , "images" , pictures)
		this.props.onChangeAdObject(newObj)
	}

	render() {
		return (
			<div className="OnlyLookAdCreate">
				{this.renderAdContent()}
				<Form>
					<TextArea
						value={this.props.adObject.text}
						onChange = {this.onChangeText}
						placeholder='もっと詳しい内容' style={{ minHeight: 100 }}>
					</TextArea>
				</Form>
				
				<UploaderWithSlider
				pictures = {this.props.adObject.images}
				id="onlyLook"
				onChangePictures={this.onChangePictures}
				 />
			</div>
		)
	}
}

export default OnlyLookAdCreate
