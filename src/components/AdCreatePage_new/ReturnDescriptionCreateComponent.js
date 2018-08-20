import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button,Input } from "semantic-ui-react"
import { Dropdown } from "semantic-ui-react"

import titleCreator from "../../domain/ReturnDescriptionExampleCreator"

//とりあえず適当な値をここでセット


class ReturnDescriptionCreateComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			options : []
		}
	}

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTitleInput(){
		return (<Input placeholder='タイトルを入力してね' fluid
			onChange={(event) => this.props.onChangeReturnDescription(event.target.value)}
			value={this.props.returnDescription}  />)
	}

	DropdownExampleSelection() {
		const options = titleCreator(this.props.returnType)
		return (<Dropdown text='他の例を参考にする'
			selectOnBlur = {false}
			onChange = {(event, data) => this.props.onChangeReturnDescription(data.value)}
			fluid selection options={options} />)
	}

	render() {
		return (
			<div className="AdCreatePage-TitleCreateComponent">
				<div>
					<div className="AdCreatePage-TitleCreateComponent-select-frame">
						{this.DropdownExampleSelection()}
					</div>
					<div className="AdCreatePage-TitleCreateComponent-textfield-frame">
						{this.renderTitleInput()}
					</div>
				</div>
			</div>
		)
	}
}

export default ReturnDescriptionCreateComponent
