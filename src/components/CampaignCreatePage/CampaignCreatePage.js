import React , {Component}  from "react"
import style from "./CampaignCreatePage.css"
import { Button , Label } from "semantic-ui-react"
// Components
import StepComponent from "./StepComponent"
import CampaignCreateFirstComponent from "../../containers/CampaignCreatePage/CampaignCreateFirstComponent";
import CampaignCreateSecondComponent from "../../containers/CampaignCreatePage/CampaignCreateSecondComponent";

class CamapignCreatePage extends Component {

	onChangeIndex = (NO) => {
		this.props.onChangeIndex(NO)	
	}
	
	renderContent() {
		if(this.props.index === 0) {
			return (<CampaignCreateFirstComponent/>)
		} else if (this.props.index === 1) {
			return (<CampaignCreateSecondComponent/>)
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
						firstCompleted = {this.props.campaignCreateCompleted}
						secondCompleted = {this.props.rewardCreateCompleted}
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
