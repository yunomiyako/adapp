import React , {Component}  from "react"

//Semantic UI
import { Label } from "semantic-ui-react"
import {  } from "react-transition-group"


// Components
import StepComponent from "./StepComponent"
import AdCreationComponentContainer from "../../containers/AdCreatePage/AdCreationComponent"
import ReturnCreationComponentContainer from "../../containers/AdCreatePage/ReturnCreationComponent"
import ConfirmComponentContainer from "../../containers/AdCreatePage/ConfirmComponent"

class AdCreatePage extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(key of keys2) {
			if (nextState[key] !== this.state[key]) {
				return true
			}
		}
		return false
	}

	onChangeIndex = (NO) => {
		this.props.onChangeIndex(NO)	
	}

	renderContent() {
		if(this.props.index === 0) {
			return (<AdCreationComponentContainer/>)
		} else if (this.props.index === 1) {
			return (<ReturnCreationComponentContainer/>)
		} else if (this.props.index === 2) {
			return (<ConfirmComponentContainer/>)
		} else {
			return <div>おや？</div>
		}
	}


	render() {

		return (
			<div className="AdCreatePage" >
				<StepComponent
					activeIndex={this.props.index}
					onChangeIndex = {this.onChangeIndex}
					adCreateCompleted = {this.props.adCreateCompleted}
					returnCreateCompleted = {this.props.returnCreateCompleted}
				/>
				{this.props.index === 2 ? <Label pointing color="orange">ここから戻れるよ</Label> : ""}	
				<div className="AdCreatePageForPaddingFrame">
					{this.renderContent()}
				</div>
			</div>
		)
	}
}

export default AdCreatePage
