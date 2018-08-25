import { connect } from "react-redux"
import ConfirmComponent from "../../components/AdCreatePage_new/ConfirmComponent"
import {
	onChangeAdType ,
	onChangeTitle ,
	onChangeReturnDescription ,
	onChangeAdObject ,
	onChangeReturnType ,
	onChangeReturnObject ,
	onChangeIndex ,
	clearState,
	onChangeAdCreateCompleted ,
	onChangeReturnCreateCompleted ,
} from "../../actions/AdCreate"

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
	const subState = state.AdCreateInfo
	return {
		adObject: getAdObject(subState),
		returnObject: getReturnObject(subState),
		index: getIndex(subState),
		adCreateCompleted: getAdCreateCompleted(subState),
		returnCreateCompleted: getReturnCreateCompleted(subState),
		adType: getAdType(subState),
		title: getTitle(subState),
		returnDescription: getReturnDescription(subState),
		returnType: getReturnType(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeIndex: (index) => dispatch(onChangeIndex(index)),
		clearState : () => dispatch(clearState()) ,
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConfirmComponent)
