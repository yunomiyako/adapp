import { connect } from "react-redux"
import AdComponent from "../../components/UserPage/AdComponent"
import {
	getAdList,
} from "../../actions/UserPage"

function mapStateToProps(state){
	const subState = state.UserPage
	return {
		ad_list : subState.ad_list
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAdList : (id_user) => dispatch(getAdList(id_user)) , 
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdComponent)
