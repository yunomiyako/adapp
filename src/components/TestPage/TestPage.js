import React , {Component}  from "react"
import "./TestPage.css"
import TestIconComponent from "./TestIconComponent"

let icons = ["🍣" , "😃" , "🍜" , "💉"]
class TestPage extends Component {
	render() {
		return (
			<div className="TestPage">
				<div className="TestPage-icon-wrapper">
					<TestIconComponent icons = {icons}/>
					<TestIconComponent icons = {icons}/>
					<TestIconComponent icons = {icons}/>
				</div>
			</div>
		)
	}
}

export default TestPage
