import React , {Component}  from "react"
import "./TestPage.css"
import TypingComponent from "./TypingComponent"


class TestPage extends Component {

	render() {
		return (
			<div className="TestPage">
				<div className="TestPage-icon-wrapper">
					<div/>
					<TypingComponent/>
				</div>
			</div>
		)
	}
}

export default TestPage
