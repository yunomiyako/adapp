import { connect } from "react-redux"
import ReturnCreationComponent from "../../components/AdCreatePage_new/ReturnCreationComponent"
import {
	onChangeReturnDescription ,
	onChangeReturnType ,
	onChangeReturnObject ,
	onChangeIndex ,
	onChangeReturnCreateCompleted ,
} from "../../actions/AdCreate"

import {
	getReturnObject,
	getAdCreateCompleted,
	getReturnCreateCompleted,
	getReturnDescription,
	getReturnType,
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdCreateInfo
	return {
		returnObject: getReturnObject(subState),
		returnCreateCompleted: getReturnCreateCompleted(subState),
		returnDescription: getReturnDescription(subState),
		returnType: getReturnType(subState),
		adCreateCompleted : getAdCreateCompleted(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeReturnDescription: (returnDescription) => dispatch(onChangeReturnDescription(returnDescription)),
		onChangeReturnType: (returnType) => dispatch(onChangeReturnType(returnType)),
		onChangeReturnObject: (returnObject) => dispatch(onChangeReturnObject(returnObject)),
		onChangeIndex: (index) => dispatch(onChangeIndex(index)),
		onChangeReturnCreateCompleted: (returnCreateCompleted) => dispatch(onChangeReturnCreateCompleted(returnCreateCompleted)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReturnCreationComponent)
