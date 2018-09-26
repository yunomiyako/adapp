import {
	ON_CHANGE_AD_TYPE ,
	ON_CHANGE_TITLE ,
	ON_CHANGE_RETURN_DESCRIPTION ,
	ON_CHANGE_AD_OBJECT ,
	ON_CHANGE_RETURN_TYPE ,
	ON_CHANGE_RETURN_OBJECT ,
	ON_CHANGE_INDEX ,
	CLEAR_STATE,
	ON_CHANGE_AD_CREATE_COMPLETED ,
	ON_CHANGE_RETURN_CREATE_COMPLETED ,
	ON_SUBMIT_ADCREATE,
	ON_FETCH_TWEET_DETAIL,
	ON_CHANGE_TWEET_OBJECT , 
	ON_CHANGE_TWEET_OBJECT_LOADING,
} from "../actions/AdCreate"

//データ構造
import AdCreateInfoStructure from "../domain/AdCreateInfoDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdCreateInfo(state = new AdCreateInfoStructure({}) , action) {
	switch (action.type) {
	case ON_CHANGE_AD_TYPE:
		return dotProp.set(state , "adType" ,  action.adType )
	case ON_CHANGE_TITLE:
		return dotProp.set(state , "title" ,  action.title )
	case ON_CHANGE_RETURN_DESCRIPTION:
		return dotProp.set(state , "returnDescription" ,  action.returnDescription )
	case ON_CHANGE_AD_OBJECT:
		return dotProp.set(state , "adObject" ,  action.adObject )
	case ON_CHANGE_RETURN_TYPE:
		return dotProp.set(state , "returnType" ,  action.returnType )
	case ON_CHANGE_RETURN_OBJECT:
		return dotProp.set(state , "returnObject" ,  action.returnObject )
	case ON_CHANGE_INDEX:
		return dotProp.set(state , "index" ,  action.index )
	case CLEAR_STATE :
		return new AdCreateInfoStructure({})
	case ON_CHANGE_AD_CREATE_COMPLETED:
		return dotProp.set(state , "adCreateCompleted" ,  action.adCreateCompleted )
	case ON_CHANGE_RETURN_CREATE_COMPLETED:
		return dotProp.set(state , "returnCreateCompleted" ,  action.returnCreateCompleted )
	case ON_CHANGE_TWEET_OBJECT:
		return dotProp.set(state , "tweetObject" ,  action.tweetObject )
	case ON_CHANGE_TWEET_OBJECT_LOADING: 
		return dotProp.set(state , "tweetObjectLoading" , action.loading)
	default :
		return state
	}
}
