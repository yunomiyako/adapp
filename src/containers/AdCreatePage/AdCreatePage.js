import { connect } from "react-redux"
import AdCreatePage from "../../components/AdCreatePage_new/AdCreatePage0"
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

function mapStateToProps(state){
	return {
		adType: state.AdCreateInfo.adType,
		title: state.AdCreateInfo.title,
		returnDescription: state.AdCreateInfo.returnDescription,
		adObject: state.AdCreateInfo.adObject,
		returnType: state.AdCreateInfo.returnType,
		returnObject: state.AdCreateInfo.returnObject,
		index: state.AdCreateInfo.index,
		adCreateCompleted : state.AdCreateInfo.adCreateCompleted ,
		returnCreateCompleted : state.AdCreateInfo.returnCreateCompleted,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeAdType: (adType) => dispatch(onChangeAdType(adType)),
		onChangeTitle: (title) => dispatch(onChangeTitle(title)),
		onChangeReturnDescription: (returnDescription) => dispatch(onChangeReturnDescription(returnDescription)),
		onChangeAdObject: (adObject) => dispatch(onChangeAdObject(adObject)),
		onChangeReturnType: (returnType) => dispatch(onChangeReturnType(returnType)),
		onChangeReturnObject: (returnObject) => dispatch(onChangeReturnObject(returnObject)),
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
