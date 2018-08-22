import React , {Component} from "react"
import { Icon, Step } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components

//data
import returnTypeButtons from "../../domain/returnTypeButtons"

class ConfirmComponent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<div>
					<p>宣伝タイプ</p>
				</div>
				<div>
				</div>

			</div>
		)
	}
}

export default ConfirmComponent
