import { connect } from "react-redux"
import ReturnPage from "../../components/ReturnPage/ReturnPage_Home"
import {
	onUpdateRating,  
	onFetchReturn , 
	onClearReturnPage , 
} from "../../actions/ReturnPage"


import {

} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.ReturnPageInfo
	return {
		returnType : subState.returnType , 
		returnObject : subState.returnObject , 
		rating : subState.rating , 
		urls : subState.urls, 
		errorMessage: subState.errorMessage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeRate: (rate) => dispatch(onUpdateRating(rate)),
		onFetchReturn : (id_return) => dispatch(onFetchReturn(id_return)) , 
		onClearReturnPage : () => dispatch(onClearReturnPage())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReturnPage)
