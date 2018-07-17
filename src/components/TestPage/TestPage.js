import React , {Component}  from "react"
import "./TestPage.css"
import TestIconComponent from "./TestIconComponent"

let icons = ["🍣" , "😃" , "🍜" , "💉"]
class TestPage extends Component {

	onClickButton() {
		//こんなアクセスの仕方があるんだなあ
		let icon = this.emailInput.value
		this.emailInput.value = ""
		icons.push(icon.slice(0 , 2))
	}

	render() {
		return (
			<div className="TestPage">
				<div className="TestPage-icon-wrapper">
					<TestIconComponent icons = {icons}/>
					<TestIconComponent icons = {icons}/>
					<TestIconComponent icons = {icons}/>
				</div>
				<input type="text" ref={ input => { this.emailInput = input }}></input>
				<button onClick={() => this.onClickButton()}>追加</button>
			</div>
		)
	}
}

export default TestPage
