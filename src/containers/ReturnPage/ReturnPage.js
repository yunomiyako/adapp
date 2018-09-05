import { connect } from "react-redux"
import ReturnPage from "../../components/ReturnPage/ReturnPage_Home"
import {
	onChangeRate,  
	onFetchReturn
} from "../../actions/ReturnPage"


import {

} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.ReturnPageInfo
	return {
		returnType : subState.returnType , 
		returnObject : subState.returnObject , 
		rating : subState.rating
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeRate: (rate) => dispatch(onChangeRate(rate)),
		onFetchReturn : (id_return) => dispatch(onFetchReturn(id_return))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReturnPage)
