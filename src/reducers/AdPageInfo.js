import {
	FETCH_AD_DATA , 
	FETCH_AD_DATA_FAIL , 
	FETCH_AD_DATA_SUCCESS , 
	ON_CHANGE_IMAGE_URLS , 
	ON_CHANGE_ID_RETURN_TO_GO , 
	ON_CHANGE_ACTION_LOADING
} from "../actions/AdPage"

//データ構造
import AdPageInfoDataStructure from "../domain/AdPageInfoDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdPageInfo(state = new AdPageInfoDataStructure({}) , action) {
	switch (action.type) {
	case FETCH_AD_DATA : 
		return dotProp.set(state , "loading" ,  true )
	case FETCH_AD_DATA_FAIL : 
		var newState = dotProp.set(state , "loading" ,  false )
		newState.errorMessage = action.errorMessage
		return newState
	case FETCH_AD_DATA_SUCCESS : 
		return new AdPageInfoDataStructure(action.response)
	case ON_CHANGE_IMAGE_URLS : 
		return dotProp.set(state , "imageUrls" ,  action.imageUrls )
	case ON_CHANGE_ID_RETURN_TO_GO : 
		return dotProp.set(state , "id_return_to_go" , action.id_return_to_go) 
	case ON_CHANGE_ACTION_LOADING : 
		return dotProp.set(state , "actionLoading" , action.is_loading) 
	default :
		return state
	}
}
