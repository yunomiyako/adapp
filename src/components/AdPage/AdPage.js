import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import "./AdPage.css"

class AdPage extends Component {
	render() {
		return (
			<div className="AdPage">
				<div className="AdPage-Title">
					<h1>{this.props.title}</h1>
					<h1>{this.props.description}</h1>
					<button onClick={() => this.props.handleClick()}>fetch</button>
				</div>

			</div>
		)
	}
}

export default AdPage
