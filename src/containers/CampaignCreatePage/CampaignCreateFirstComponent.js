import { connect } from "react-redux"
import CampaignCreateFirstComponent from "../../components/CampaignCreatePage/CampaignCreateFirstComponent"
import {
	onChangeCampaigns , 
} from "../../actions/CampaignCreate"

import {
	getCampaigns
} from "../../selectors/CampaignCreatePage"

function mapStateToProps(state){
	const subState = state.CampaignCreatePage
	return {
		campaigns: getCampaigns(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeCampaigns: (campaigns) => dispatch(onChangeCampaigns(campaigns)),	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CampaignCreateFirstComponent)
