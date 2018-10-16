import React , {Component}  from "react"

//css
import "./AdCreatePage.css"

//semantic UI
import { Form, TextArea } from "semantic-ui-react"

class DescriptionCreateComponent extends Component {
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

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTextArea(){
		return (
			<Form>
				<TextArea autoHeight placeholder='説明を書いてね' rows={2}
					onChange={this.onInputCharacter}
					value={this.props.description}
				/>
			</Form>
		)
	}

	onInputCharacter = (event) => {
		this.props.onChangeDescription(event.target.value)
	}

	render() {
		return (
			<div className="AdCreatePage-DescriptionCreateComponent">
				{this.renderTextArea()}
			</div>
		)
	}
}

export default DescriptionCreateComponent
