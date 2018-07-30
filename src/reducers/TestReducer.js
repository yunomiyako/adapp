import {
	FETCH_DB_DATA,
	ON_CHANGE_USERINFO
} from "../actions/AdCreate"

//データ構造
import AdCreateInfoStructure from "../domain/AdCreateInfoDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdCreateInfo(state = AdCreateInfoStructure, action) {
	switch (action.type) {
	case ON_CHANGE_USERINFO :
		return dotProp.set(state , "username" , action.username)
	default :
		return state
	}
}
