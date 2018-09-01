import React , {Component}  from "react"
import "./TestPage.css"
import { Button  } from "semantic-ui-react"
import { Link } from "react-router-dom"
import api from "../../api/TestAPIWithAuthorization"
import api2 from "../../api/registerUserId"

class TestPage extends Component {
	constructor(props) {
		super(props)
	}

	async onClickButton() {
		const test = await api2()
		console.log(test)
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
			<Button onClick = {() => this.onClickButton()}>test</Button>
				{this.renderLink()}
			</div>
		)
	}
}

export default TestPage
