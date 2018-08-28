import { connect } from "react-redux"
import AdPage from "../../components/AdPage_new/AdPage"
import {
	fetchAdData,

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
		rating : 3
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchAdData : (id_user , id_ad) => dispatch(fetchAdData(id_user , id_ad)) 
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdPage)
