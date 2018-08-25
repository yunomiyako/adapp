import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button,Input } from "semantic-ui-react"
import { Dropdown } from "semantic-ui-react"

import titleCreator from "../../domain/ReturnDescriptionExampleCreator"

//とりあえず適当な値をここでセット


class ReturnDescriptionCreateComponent extends Component {
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

	constructor(props) {
		super(props)
		this.state = {
			options : []
		}
	}

	onChangeReturnDescription = (event) => {
		this.props.onChangeReturnDescription(event.target.value)
	}

	onChangeReturnDescriptionFromDropdown = (event , data) => {
		this.props.onChangeReturnDescription(data.value)
	}

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTitleInput(){
		return (<Input placeholder='タイトルを入力してね' fluid
			onChange={this.onChangeReturnDescription}
			value={this.props.returnDescription}  />)
	}

	DropdownExampleSelection() {
		const options = titleCreator(this.props.returnType)
		return (<Dropdown text='他の例を参考にする'
			selectOnBlur = {false}
			onChange = {this.onChangeReturnDescriptionFromDropdown}
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
