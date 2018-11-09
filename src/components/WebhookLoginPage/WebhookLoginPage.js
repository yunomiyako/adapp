import goTwitterLogin from "../../Utils/goTwitterLogin"
import React , {Component}  from "react"

import { Button , Form } from "semantic-ui-react"

class WebhookLoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text : ""
		}
	}

	onClickButton() {
		goTwitterLogin("/" , true)
	}

	onChangeText(text) {
		this.setState({
			text : text
		})
	}

	render() {
		return (
			<div>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<Button
					onClick={() => this.onClickButton()}
				>ログイン</Button>
		

			</div>
		)
	}
}

export default WebhookLoginPage
