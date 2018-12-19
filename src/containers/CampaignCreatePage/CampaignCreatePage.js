import { connect } from "react-redux"
import CampaignCreatePage from "../../components/CampaignCreatePage/CampaignCreatePage"
import {
	clearState,
	onChangeIndex , 
	onChangeCampaignCreateCompleted , 
	onChangeRewardCreateCompleted , 
} from "../../actions/CampaignCreate"

import {
	getIndex,
	getCampaignCreateCompleted,
	getRewardCreateCompleted,
} from "../../selectors/CampaignCreatePage"

function mapStateToProps(state){
	const subState = state.CampaignCreatePage
	return {
		index: getIndex(subState),
		campaignCreateCompleted: getCampaignCreateCompleted(subState),
		rewardCreateCompleted: getRewardCreateCompleted(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		clearState : () => dispatch(clearState()) ,
		onChangeIndex: (index) => dispatch(onChangeIndex(index)),
		onChangeCampaignCreateCompleted: (campaignCreateCompleted) => dispatch(onChangeCampaignCreateCompleted(campaignCreateCompleted)),
		onChangeRewardCreateCompleted: (rewardCreateCompleted) => dispatch(onChangeRewardCreateCompleted(rewardCreateCompleted)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CampaignCreatePage)
