import { connect } from "react-redux"
import RewardComponent from "../../components/UserPage/RewardComponent"
import {
	getReturnList
} from "../../actions/UserPage"

function mapStateToProps(state){
	const subState = state.UserPage
	return {
		return_list : subState.return_list
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getReturnList : () => dispatch(getReturnList())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RewardComponent)
