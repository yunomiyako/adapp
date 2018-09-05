import {
	ON_UPDATE_RETURN_OBJECT,
	ON_UPDATE_RETURN_TYPE
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
	default :
		return state
	}
}
