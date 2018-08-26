import { connect } from "react-redux"
import AdCreationComponent from "../../components/AdCreatePage_new/AdCreationComponent"
import {
	onChangeAdType ,
	onChangeTitle ,
	onChangeAdObject ,
	onChangeIndex ,
	onChangeAdCreateCompleted ,
} from "../../actions/AdCreate"

import {
	getAdObject,
	getAdType,
	getTitle,
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdCreateInfo
	return {
		adObject: getAdObject(subState),
		adType: getAdType(subState),
		title: getTitle(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeAdType: (adType) => dispatch(onChangeAdType(adType)),
		onChangeTitle: (title) => dispatch(onChangeTitle(title)),
		onChangeAdObject: (adObject) => dispatch(onChangeAdObject(adObject)),
		onChangeIndex: (index) => dispatch(onChangeIndex(index)),
		onChangeAdCreateCompleted: (adCreateCompleted) => dispatch(onChangeAdCreateCompleted(adCreateCompleted)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreationComponent)
