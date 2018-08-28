import { connect } from "react-redux"
import AdPage from "../../components/AdPage_new/AdPage"
import {} from "../../actions/AdPage"


import {
	getAdObject,
	getReturnObject,
	getIndex,
	getAdCreateCompleted,
	getReturnCreateCompleted,
	getAdType,
	getTitle,
	getReturnDescription,
	getReturnType,
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdPageInfo
	return {
		adObject: getAdObject(subState),
		adType: getAdType(subState),
		title: getTitle(subState),
		returnDescription: getReturnDescription(subState),
		username: subState.username,
		rating : 3
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdPage)
