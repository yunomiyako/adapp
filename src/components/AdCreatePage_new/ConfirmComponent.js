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
		this.getEnableAdType()
		return value.title
	}

	getAdTypeTitle(){
		const value = AdTypeEnum.getByName(this.props.AdTypeEnum)
		return value.title
	}

	getEnableAdType(){
		const value = AdTypeEnum.getByValue("disabled" , false)
		console.log(value)
	}

	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<div>
					<p>宣伝タイプ: {this.getReturnTypeTitle()}</p>
				</div>
				<div>
				</div>

			</div>
		)
	}
}

export default ConfirmComponent
