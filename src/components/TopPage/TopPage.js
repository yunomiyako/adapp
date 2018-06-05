import React , {Component}  from "react"
import { Button } from "semantic-ui-react"
import "./TopPage.css"

class TopPage extends Component {
	render() {
		return (
			<div className="TopPage">
				<Button className="TopPage-logo">最初に設置された記念すべきボタン</Button>
			</div>
		)
	}
}

export default TopPage
