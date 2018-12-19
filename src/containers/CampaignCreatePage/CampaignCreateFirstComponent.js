import { connect } from "react-redux"
import CampaignCreateFirstComponent from "../../components/CampaignCreatePage/CampaignCreateFirstComponent"
import {
	onChangeCampaigns , 
	onChangeMissText , 
} from "../../actions/CampaignCreate"

import {
	getCampaigns , 
	getMissText,
} from "../../selectors/CampaignCreatePage"

function mapStateToProps(state){
	const subState = state.CampaignCreatePage
	return {
		campaigns: getCampaigns(subState),
		missText: getMissText(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeCampaigns: (campaigns) => dispatch(onChangeCampaigns(campaigns)),
		onChangeMissText: (missText) => dispatch(onChangeMissText(missText)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CampaignCreateFirstComponent)
