import React , {Component}  from "react"
import style from "./CampaignCreatePage.css"
import { } from "semantic-ui-react"
import FormComponent from "./FormComponent"
import CampaignDetailComponent from "./CampaignDetailComponent"
// immutable state change helper
var dotProp = require("dot-prop-immutable")

class CamapignCreateSecondPage extends Component {
	
	onChangeCampaignInterval = (interval) => {
		this.props.onChangeCampaignInterval(interval)
	}

	onChangeName = (name) => {
		this.props.onChangeName(name)
	}

	onChangeEmail = (email) => {
		this.props.onChangeEmail(email)
	}

	onChangeNotes = (notes) => {
		this.props.onChangeNotes(notes)
	}

	onChangeText = (text) => {
		const newObj = dotProp.set(this.props.tweetObject , "text" , text)
		this.props.onChangeTweetObject(newObj)
	}

	onChangeImages = (images) => {
		const newObj = dotProp.set(this.props.tweetObject , "images" , images)
		this.props.onChangeTweetObject(newObj)
	}


	render() {

		return (
			<div className={style.CamapignCreateSecondPage}>

				<div>
					<CampaignDetailComponent
					tweetObject = {this.props.tweetObject}
					onChangeText = {this.onChangeText}
					onChangeImages = {this.onChangeImages}
					onChangeCampaignInterval={this.onChangeCampaignInterval}
					/>
				</div>

				<div className = {style.RewardMessageSetUpComponentContainer}>
					<FormComponent
					name = {this.props.name}
					email = {this.props.email}
					notes = {this.props.notes}
					onChangeName = {this.onChangeName}
					onChangeEmail = {this.onChangeEmail}
					onChangeNotes = {this.onChangeNotes}
					/>
				</div>
			</div>
		)
	}
}

export default CamapignCreateSecondPage
