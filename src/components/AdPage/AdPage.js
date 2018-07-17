import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import "./AdPage.css"

class AdPage extends Component {
	componentWillMount() {
		this.setItemIfNot();
	}

	componentWillUpdate() {
		this.setItemIfNot();
	}
	setItemIfNot() {
		if (localStorage.getItem('sessionId') == null) {
			localStorage.setItem('sessionId', 1)
		}
	}

	render() {
		return (
			<div className="AdPage">
				<div className="AdPage-Title">
					<h1>{this.props.title}</h1>
					<h1>{this.props.description}</h1>
					<button onClick={() => this.props.handleClick()}>fetch</button>
					<button onClick={() => this.props.handleClickU()}>fetchDB</button>
				</div>
			</div>
		)
	}
}

export default AdPage
