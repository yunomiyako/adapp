import React , {Component}  from "react"

//css
import "./AdCreatePage.css"

//semantic UI
import { Button } from "semantic-ui-react"

class ReturnSelectionComponent extends Component {
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

	//TODO : <Button.Or>をつけたいけどやり方がわからない
	ButtonCreator(id , text) {
		if(id === 1) {
			return <Button key={id} onClick={onClickButton}>{text}</Button>
		} else {
			return (
				<Button key={id} onClick={onClickButton}> {text} </Button>
			)
		}
	}

	ButtonGroupCreator(buttons){
		var buts = buttons.map((button) => this.ButtonCreator(button.id ,button.text))
		return (
			<Button.Group>
				{buts}
			</Button.Group>
		)
	}

	onClickButton = (id) =>{
		this.props.onClick(id)
	}

	render() {
		const buttonGroup = this.ButtonGroupCreator(this.props.buttons)
		return (
			<div className="AdCreatePage-ReturnSelectionComponent">
				{buttonGroup}
			</div>
		)
	}
}

export default ReturnSelectionComponent
