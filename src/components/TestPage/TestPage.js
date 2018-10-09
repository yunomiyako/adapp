import React , {Component}  from "react"
import "./TestPage.css"
import {   } from "semantic-ui-react"
import { Link } from "react-router-dom"

class TestPage extends Component {
	constructor(props) {
		super(props)
	}

	renderLink() {
		const links = ["textAndImage" , "textOnly"  ,"premium" , "lottery"]
		const prefix = "/return/"
		return (
			links.map((link) => {
				return (
					<div key={link}>
						<Link to={prefix + link}>{link}</Link>
						<br/>
					</div>
				)

			})
		)
	}

	render() {
		return (
			<div className="TestPage">
				{this.renderLink()}
			</div>
		)
	}
}

export default TestPage
