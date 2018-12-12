import { connect } from "react-redux"
import CampaignCreateSecondComponent from "../../components/CampaignCreatePage/CampaignCreateSecondComponent"
import {
	onChangeCampaignInterval , 
	onChangeName , 
	onChangeEmail , 
	onChangeNotes , 
	onChangeTweetObject , 
	onChangeTwitterId , 
} from "../../actions/CampaignCreate"

import {
	getCampaignInterval,
	getName,
	getEmail,
	getNotes,
	getTweetObject,
	getTwitterId,
} from "../../selectors/CampaignCreatePage"

function mapStateToProps(state){
	const subState = state.CampaignCreatePage
	return {
		campaignInterval: getCampaignInterval(subState),
		name: getName(subState),
		email: getEmail(subState),
		notes: getNotes(subState),
		tweetObject: getTweetObject(subState),
		twitterId: getTwitterId(subState),
		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeCampaignInterval: (campaignInterval) => dispatch(onChangeCampaignInterval(campaignInterval)),
		onChangeName: (name) => dispatch(onChangeName(name)),
		onChangeEmail: (email) => dispatch(onChangeEmail(email)),
		onChangeNotes: (notes) => dispatch(onChangeNotes(notes)),
		onChangeTweetObject: (tweetObject) => dispatch(onChangeTweetObject(tweetObject)),
		onChangeTwitterId: (twitterId) => dispatch(onChangeTwitterId(twitterId)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CampaignCreateSecondComponent)
