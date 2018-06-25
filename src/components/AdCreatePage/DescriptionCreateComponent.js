import React , {Component}  from "react"
import { connect } from "react-redux"

//css
import "./AdCreatePage.css"

//actions
import { onChangeDescription } from "../../actions/AdCreate"

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
		this.props.dispatch(onChangeDescription(value))
	}

	render() {
		return (
			<div className="AdCreatePage-DescriptionCreateComponent">
				{this.renderTextArea()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		description: state.AdCreateInfo.description
	}
}

export default connect(mapStateToProps , null)(DescriptionCreateComponent)
