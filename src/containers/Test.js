import { connect } from "react-redux"
import AdCreatePage from "../../components/AdCreatePage_new/AdCreatePage"
import {
	fetchDbData
} from "../../actions/Test"

function mapStateToProps(state){
	return {
		username : state.Test.username
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchDbData: () => dispatch(fetchDbData()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreatePage)
