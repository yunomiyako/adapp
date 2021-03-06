import React , {Component}  from "react"
import style from "./CampaignCreatePage.css"
import { Label , Button } from "semantic-ui-react"
import RewardSetUpComponent from "./RewardSetUpComponent"
import RewardDataStructure from "../../domain/campaign/RewardDataStructure"
import RewardMessageSetUpComponent from "./RewardMessageSetUpComponent"

class CamapignCreateFirstPage extends Component {

	onAddCampaign() {
		const maxNum = 5
		const campaigns = this.props.campaigns.slice()
		if(campaigns.length >= maxNum) return
		campaigns.push(new RewardDataStructure({}))
		this.props.onChangeCampaigns(campaigns)
	}

	onDeleteCampaign(index) {
		const campaigns  =this.props.campaigns.slice()
		if(campaigns.length == 1) return
		campaigns.splice(index, 1)
		this.props.onChangeCampaigns(campaigns)
	}

	onChangeCampaignGeneral(index , value , keyname) {
		const campaigns  =this.props.campaigns.slice()
		const campaign = campaigns[index]
		campaign[keyname] = value
		campaigns[index] = campaign
		this.props.onChangeCampaigns(campaigns)
	}

	onChangeCampaignTitle(index , title) {
		this.onChangeCampaignGeneral(index , title , "title")
	}

	onChangeCampaignPeople(index , people) {
		this.onChangeCampaignGeneral(index , people , "people")
	}

	onChangeCampaignMessage(index , text) {
		this.onChangeCampaignGeneral(index , text , "message")
	}

	onChangeCampaignImage(index , path) {
		this.onChangeCampaignGeneral(index , path , "image")
	}

	onClickOk() {
		
		this.props.onClickOk()
	}

	renderOkButton() {
		return (
			<React.Fragment>
				{/* <Label pointing="right" color="orange">確認画面へ</Label>	 */}
				<Button onClick={() => this.onClickOk()}>OK</Button>
			</React.Fragment>
		)
	}

	render() {
		return (
			<div className={style.CamapignCreateFirstPage}>

				<div>
					<RewardSetUpComponent
						campaigns = {this.props.campaigns}
						onAddCampaign = {() => this.onAddCampaign()}
						onDeleteCampaign = {(index) => this.onDeleteCampaign(index)}
						onChangeCampaignTitle = {(index , title) => this.onChangeCampaignTitle(index , title)}
						onChangeCampaignPeople = {(index , people) => this.onChangeCampaignPeople(index , people)} />
				</div>

				<div className = {style.RewardMessageSetUpComponentContainer}>
					<RewardMessageSetUpComponent
						campaigns = {this.props.campaigns}
						onChangeCampaignMessage = {(index , text) => this.onChangeCampaignMessage(index , text)}
						onChangeCampaignImage = {(index , path) => this.onChangeCampaignImage(index , path)}
						missText = {this.props.missText} 
						onChangeMissText = {(text) => this.props.onChangeMissText(text)}
					/>
				</div>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default CamapignCreateFirstPage
