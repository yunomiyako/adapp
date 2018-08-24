import React , {Component} from "react"
import {  } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components

//data
import ReturnTypeEnum from "../../domain/enum/ReturnTypeEnum"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"

class ConfirmComponent extends Component {
	constructor(props) {
		super(props)
	}

	getReturnTypeTitle() {
		const value =ReturnTypeEnum.getByName(this.props.returnType)
		return value.title
	}

	getAdTypeTitle(){
		const value = AdTypeEnum.getByName(this.props.adType)
		return value.title
	}

	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<div>
					<p>宣伝タイプ: {this.getAdTypeTitle()}</p>
					<p>お返しタイプ: {this.getReturnTypeTitle()}</p>
				</div>
				<div>
				</div>

			</div>
		)
	}
}

export default ConfirmComponent
