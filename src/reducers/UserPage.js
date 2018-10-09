import {
	SET_AD_LIST , 
	SET_RETURN_LIST,
	SET_LOADING
} from "../actions/UserPage"

//データ構造
import UserPageDataStructure from "../domain/UserPageDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function UserPage(state = new UserPageDataStructure({}) , action) {
	switch (action.type) {
	case SET_AD_LIST : 
		return dotProp.set(state , "ad_list" ,  action.ad_list )
	case SET_RETURN_LIST : 
		return dotProp.set(state , "return_list" ,  action.return_list )
	case SET_LOADING : 
		return dotProp.set(state , "loading" , action.loading)
	default :
		return state
	}
}