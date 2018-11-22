import React , {Component}  from "react"
import style from "./CampaignCreatePage.css"
import { Button , Label } from "semantic-ui-react"
// Components
import StepComponent from "./StepComponent"
import CampaignCreateFirstComponent from "../../containers/CampaignCreatePage/CampaignCreateFirstComponent";
import CampaignCreateSecondComponent from "../../containers/CampaignCreatePage/CampaignCreateSecondComponent";
import ConfirmComponent from "../../containers/CampaignCreatePage/ConfirmComponent";

class CamapignCreatePage extends Component {

	onChangeIndex = (NO) => {
		this.props.onChangeIndex(NO)	
	}

	onClickOk(index) {
		if(index == 1) {
			this.props.onChangeCampaignCreateCompleted(true)
			this.onChangeIndex(1)
		} else if(index == 2) {
			this.props.onChangeRewardCreateCompleted(true)
			this.onChangeIndex(2)
		}
	}
	
	renderContent() {
		if(this.props.index === 0) {
			return (<CampaignCreateFirstComponent
			onClickOk = {() => this.onClickOk(1)}
			/>)
		} else if (this.props.index === 1) {
			return (<CampaignCreateSecondComponent
				onClickOk = {() => this.onClickOk(2)}
			/>)
		} else if (this.props.index === 2) {
			return (<ConfirmComponent/>)
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
					{this.props.index === 2 ? <Label pointing color="orange">ここから戻れます</Label> : ""}	
					<div className="AdCreatePageForPaddingFrame">
						{this.renderContent()}
					</div>
				</div>
			</div>
		)
	}
}

export default CamapignCreatePage
