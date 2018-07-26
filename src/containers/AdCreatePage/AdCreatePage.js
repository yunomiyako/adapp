import { connect } from "react-redux"
import AdCreatePage from "../../components/AdCreatePage_new/AdCreatePage"
import {
	onChangeAdType ,
	onChangeTitle ,
	onChangeReturnDescription ,
	onChangeAdObject ,
	onChangeReturnType ,
	onChangeReturnObject ,
	onChangeIndex ,
	clearState,
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
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreatePage)
