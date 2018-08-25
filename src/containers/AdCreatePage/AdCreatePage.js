import { connect } from "react-redux"
import AdCreatePage from "../../components/AdCreatePage_new/AdCreatePage"
import {
	onChangeIndex ,
	clearState,
	onChangeAdCreateCompleted ,
	onChangeReturnCreateCompleted ,
} from "../../actions/AdCreate"

import {
	getIndex,
	getAdCreateCompleted,
	getReturnCreateCompleted,
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdCreateInfo
	return {
		index: getIndex(subState),
		adCreateCompleted: getAdCreateCompleted(subState),
		returnCreateCompleted: getReturnCreateCompleted(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeIndex: (index) => dispatch(onChangeIndex(index)),
		clearState : () => dispatch(clearState()) ,
		onChangeAdCreateCompleted: (adCreateCompleted) => dispatch(onChangeAdCreateCompleted(adCreateCompleted)),
		onChangeReturnCreateCompleted: (returnCreateCompleted) => dispatch(onChangeReturnCreateCompleted(returnCreateCompleted)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreatePage)
