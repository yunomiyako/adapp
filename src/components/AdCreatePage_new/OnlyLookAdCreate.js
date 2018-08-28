import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import {Button , Form , TextArea} from "semantic-ui-react"

import FeedComponent from "../AdPage_new/FeedComponent"
import UploaderWithSlider from "./UploaderWithSlider"
import ImageSlider from "./ImageSlider"
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
		for(var key of keys2) {
			if (nextState[key] !== this.props[key]) {
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

	onClickOk = () => {
		this.props.onClickOk()
	}

	renderOkButton = () => {
		if(this.props.adObject.text !== "") {
			return <Button onClick={this.onClickOk}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
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

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default OnlyLookAdCreate
