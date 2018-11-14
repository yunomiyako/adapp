import React , {Component}  from "react"
import style from "./CampaignCreatePage.css"
import { Button , Label } from "semantic-ui-react"
// Components
import StepComponent from "../AdCreatePage_new/StepComponent"

class CamapignCreatePage extends Component {

	onChangeIndex = (NO) => {
		this.props.onChangeIndex(NO)	
	}
	
	renderContent() {
		if(this.props.index === 0) {
			return ("1")
		} else if (this.props.index === 1) {
			return ("2")
		} else if (this.props.index === 2) {
			return ("3")
		} else {
			return <div>おや？</div>
		}
	}

	render() {
		return (
			<div className={style.CampaignCreatePage}>
				<div className={style.CampaignCreatePageContainer}>
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
			</div>
		)
	}
}

export default CamapignCreatePage
