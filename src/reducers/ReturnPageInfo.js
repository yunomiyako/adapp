import {
	ON_UPDATE_RETURN_OBJECT,
	ON_UPDATE_RETURN_TYPE , 
	ON_UPDATE_RETURN_IMAGE_URLS ,
	ON_UPDATE_RATING,
	ON_FAIL_FETCH_RETURN , 
	ON_CLEAR_RETURN_PAGE , 
	ON_UPDATE_AD_INFO , 
	ON_UPDATE_RETURN_DESCRIPTION ,
} from "../actions/ReturnPage"

//データ構造
import ReturnPageDataStructure from "../domain/ReturnPageDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdPageInfo(state = new ReturnPageDataStructure({}) , action) {
	switch (action.type) {
	case ON_UPDATE_RETURN_OBJECT : 
		return dotProp.set(state , "returnObject" ,  action.returnObject )
	case ON_UPDATE_RETURN_TYPE : 
		return dotProp.set(state , "returnType" ,  action.returnType )
	case ON_UPDATE_RETURN_IMAGE_URLS : 
		return dotProp.set(state , "urls" ,  action.urls )
	case ON_UPDATE_RATING : 
		return dotProp.set(state , "rating" ,  action.rating )
	case ON_UPDATE_AD_INFO : 
		return dotProp.set(state , "ad_info" ,  action.ad_info )
	case ON_UPDATE_RETURN_DESCRIPTION : 
		return dotProp.set(state , "returnDescription" ,  action.returnDescription )
	case ON_FAIL_FETCH_RETURN : 
		return dotProp.set(state , "errorMessage" , action.errorMessage)
	case ON_CLEAR_RETURN_PAGE : 
		return new ReturnPageDataStructure({})
	default :
		return state
	}
}
