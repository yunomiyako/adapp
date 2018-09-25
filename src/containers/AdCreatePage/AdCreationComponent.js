import { connect } from "react-redux"
import AdCreationComponent from "../../components/AdCreatePage_new/AdCreationComponent"
import {
	onChangeAdType ,
	onChangeTitle ,
	onChangeAdObject ,
	onChangeIndex ,
	onChangeAdCreateCompleted ,
	onFetchTweetDetail,
	onChangeTweetObject , 
} from "../../actions/AdCreate"

import {
	getAdObject,
	getAdType,
	getTitle,
	getTweetObject
} from "../../selectors/AdCreatePage"

function mapStateToProps(state){
	const subState = state.AdCreateInfo
	return {
		adObject: getAdObject(subState),
		adType: getAdType(subState),
		title: getTitle(subState),
		tweetObject: getTweetObject(subState),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChangeAdType: (adType) => dispatch(onChangeAdType(adType)),
		onChangeTitle: (title) => dispatch(onChangeTitle(title)),
		onChangeAdObject: (adObject) => dispatch(onChangeAdObject(adObject)),
		onChangeIndex: (index) => dispatch(onChangeIndex(index)),
		onChangeAdCreateCompleted: (adCreateCompleted) => dispatch(onChangeAdCreateCompleted(adCreateCompleted)),
		onFetchTweetDetail : (id_tweet) => dispatch(onFetchTweetDetail(id_tweet)), 
		onChangeTweetObject: (tweetObject) => dispatch(onChangeTweetObject(tweetObject)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdCreationComponent)
