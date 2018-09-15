import { connect } from "react-redux"
import FeedListComponent from "../../components/TopPage/FeedListComponent"
import {
	getAdList,
} from "../../actions/TopPage"

function mapStateToProps(state){
	const subState = state.TopPage
	return {
		ad_list : subState.ad_list
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAdList : () => dispatch(getAdList()) , 
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FeedListComponent)
