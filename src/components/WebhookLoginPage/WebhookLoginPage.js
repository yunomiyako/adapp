import goTwitterLogin from "../../Utils/goTwitterLogin"
import React , {Component}  from "react"

import { Button } from "semantic-ui-react"

class WebhookLoginPage extends Component {
	onClickButton() {
		goTwitterLogin("/" , true)
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
