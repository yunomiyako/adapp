import { connect } from "react-redux"
import AdPage from "../../components/AdPage_new/AdPage"
import {
	fetchAdData,
	onSendAction, 
} from "../../actions/AdPage"


import {
	getAdObject,
	getAdType,
	getTitle,
	getReturnDescription,
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdPageInfo
	return {
		adObject: getAdObject(subState),
		adType: getAdType(subState),
		title: getTitle(subState),
		returnDescription: getReturnDescription(subState),
		username: subState.username,
		loading : subState.loading,
		errorMessage: subState.errorMessage, 
		imageUrls : subState.imageUrls, 
		rating : subState.rating , 
		id_return_to_go : subState.id_return_to_go , 
		actionLoading : subState.actionLoading
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchAdData : (id_user , id_ad) => dispatch(fetchAdData(id_user , id_ad)) , 
		onClickActionButton : (payload) => dispatch(onSendAction(payload))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdPage)
