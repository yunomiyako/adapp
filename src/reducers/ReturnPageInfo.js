import {
	ON_UPDATE_RETURN_OBJECT,
	ON_UPDATE_RETURN_TYPE , 
	ON_UPDATE_RETURN_IMAGE_URLS
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
	default :
		return state
	}
}
