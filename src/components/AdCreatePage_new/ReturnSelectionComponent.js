import React , {Component}  from "react"

//css
import "./AdCreatePage.css"

//semantic UI
import { Button } from "semantic-ui-react"

class ReturnSelectionComponent extends Component {
	//TODO : <Button.Or>をつけたいけどやり方がわからない
	ButtonCreator(id , text) {
		if(id === 1) {
			return <Button key={id} onClick={()=>this.onClickButton(id)}>{text}</Button>
		} else {
			return (
				<Button key={id} onClick={()=>this.onClickButton(id)}> {text} </Button>
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

	onClickButton(id){
		window.console.log(id)
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