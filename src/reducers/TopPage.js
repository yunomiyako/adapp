import {
	SET_AD_LIST 
} from "../actions/TopPage"

//データ構造
import TopPageDataStructure from "../domain/TopPageDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function UserPage(state = new TopPageDataStructure({}) , action) {
	switch (action.type) {
	case SET_AD_LIST : 
		return dotProp.set(state , "ad_list" ,  action.ad_list )
	default :
		return state
	}
}