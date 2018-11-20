import { connect } from "react-redux"
import CampaignCreatePage from "../../components/CampaignCreatePage/ConfirmComponent"
import {
	onSubmitCampaignCreate
} from "../../actions/CampaignCreate"

import {
	getIndex,
	getCampaignCreateCompleted,
	getRewardCreateCompleted,
	getCampaigns,
	getMissText,
	getCampaignInterval,
	getName,
	getEmail,
	getNotes,
	getTweetObject,
} from "../../selectors/CampaignCreatePage"

function mapStateToProps(state){
	const subState = state.CampaignCreatePage
	return {
		index: getIndex(subState),
		campaignCreateCompleted: getCampaignCreateCompleted(subState),
		rewardCreateCompleted: getRewardCreateCompleted(subState),
		campaigns: getCampaigns(subState),
		missText: getMissText(subState),
		campaignInterval: getCampaignInterval(subState),
		name: getName(subState),
		email: getEmail(subState),
		notes: getNotes(subState),
		tweetObject: getTweetObject(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onClickSubmit : (payload, callback) => dispatch(onSubmitCampaignCreate(payload,callback))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CampaignCreatePage)
