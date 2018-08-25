import React , {Component}  from "react"

//css
import style from "./AdCreatePage.css"

//semantic UI
import { Button,Input } from "semantic-ui-react"
import { Dropdown } from "semantic-ui-react"

import titleCreator from "../../domain/TitleExampleCreator"

//とりあえず適当な値をここでセット


class TitleCreateComponent extends Component {
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

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.title !== nextProps.title) {
			return true
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

	onChangeTitle = (text) => {
		this.props.onChangeTitle(text)
	}

	//フィールドの長さはAdCreatePage-TitleCreateComponentで定義
	renderTitleInput(){
		return (<Input placeholder='タイトルを入力してね' fluid
			onChange={(event) => this.onChangeTitle(event.target.value)}
			value={this.props.title}  />)
	}

	DropdownExampleSelection() {
		const options = titleCreator(this.props.adType)
		return (<Dropdown text='他の例を参考にする'
			selectOnBlur = {false}
			onChange = {(event, data) => this.onChangeTitle(data.value)}
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

export default TitleCreateComponent
