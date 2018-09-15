import { connect } from "react-redux"
import UserPage from "../../components/UserPage/UserPage"
import {
} from "../../actions/AdPage"
import {
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdPageInfo
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserPage)
