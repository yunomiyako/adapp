import React , {Component}  from "react"
import style from "./AdCreatePage.css"
import style2 from "./Animation.css"

//Semantic UI
import {  } from "semantic-ui-react"
import {  } from "react-transition-group"


// Components
import StepComponent from "./StepComponent"
import AdCreationComponentContainer from "../../containers/AdCreatePage/AdCreationComponent"
import ReturnCreationComponentContainer from "../../containers/AdCreatePage/ReturnCreationComponent"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

class AdCreatePage extends Component {
	constructor(props) {
		super(props)
		//画像は初期化
		this.props.onChangeAdObject(dotProp.set(this.props.adObject , "images" , []))
		this.props.onChangeReturnObject(dotProp.set(this.props.returnObject , "images" , []))
	}

	onChangePictures(pictures) {
		const newObj = dotProp.set(this.props.adObject , "images" , pictures)
		this.props.onChangeAdObject(newObj)
	}

	onChangeIndex(NO) {
		this.props.onChangeIndex(NO)
	}

	renderContent() {
		if(this.props.index == 0) {
			return (<AdCreationComponentContainer/>)
		} else if (this.props.index == 1) {
			return (<ReturnCreationComponentContainer/>)
		}
	}


	render() {

		return (
			<div className="AdCreatePage" >
				<StepComponent
					activeIndex={this.props.index}
					onChangeIndex = {(NO) => this.onChangeIndex(NO)}
					adCreateCompleted = {this.props.adCreateCompleted}
					returnCreateCompleted = {this.props.returnCreateCompleted}
				/>

				<div className="AdCreatePageForPaddingFrame">
					{this.renderContent()}
				</div>
			</div>
		)
	}
}

export default AdCreatePage
