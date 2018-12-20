import React , {Component}  from "react"
import style from "./CampaignCreatePage.css"
import { Form } from "semantic-ui-react"
import { CampaignInterval } from "../../domain/campaign/CampaignInterval"
import UploaderWithSlider from "../AdCreatePage_new/UploaderWithSlider"

class CampaignDetailComponent extends Component {
    onChangePictures = (pictures) => {
		this.props.onChangeImages(pictures)
	}
	
	onChangeCampaignInterval = (event , data) => {
		this.props.onChangeCampaignInterval(data.value)
	}

	onChangeTwitterId = (event) => {
		this.props.onChangeTwitterId(event.target.value)
	}
    
	render() {
		const tweetObject = this.props.tweetObject
		var text = ""
		var images = []
		if(tweetObject) {
			text = tweetObject.text
			images = tweetObject.images
		}
		return (
			<div className={style.CampaignDetailComponent}>
				<Form>
				<Form.Input 
				value = {this.props.twitterId}
				onChange = {this.onChangeTwitterId}
				fluid label='開催したいTwitterアカウントID' placeholder='@adapp999' />
					<Form.Group widths='equal'>
						<Form.Select 
							value = {this.props.campaignInterval}
							placeholder="キャンペーン実施期間を選んでください"
							onChange = {this.onChangeCampaignInterval}
							label='キャンペーン期間(キャンペーン開始から終了までの日数)' 
							options={CampaignInterval} />
					</Form.Group>
					<Form.TextArea 
					value = {text}
					onChange = {(event) => this.props.onChangeText(event.target.value)}
					label='キャンペーンツイート文面(仮)' placeholder='' />

					<UploaderWithSlider
						pictures = {images}
						id="tweetImage"
						onChangePictures={this.onChangePictures}
				    />
				</Form>
			</div>
		)
	}
}

export default CampaignDetailComponent
