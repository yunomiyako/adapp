import React , {Component}  from "react"

//css
import "./AdCreatePage.css"

//semantic UI
import { Form, TextArea } from "semantic-ui-react"

class DescriptionCreateComponent extends Component {
	componentWillMount() {
		//propsの初期化をします
	}

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTextArea(){
		return (
			<Form>
				<TextArea autoHeight placeholder='説明を書いてね' rows={2}
					onChange={(event) => this.onInputCharacter(event.target.value)}
					value={this.props.description}
				/>
			</Form>
		)
	}

	onInputCharacter(value) {
		this.props.onChangeDescription(value)
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
