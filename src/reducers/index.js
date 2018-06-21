// Reducerを結合します
import {combineReducers} from "redux"
import {
	SUBMITINFORMATION
} from "../actions/index.js"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export function AdInformation(state = {info : {}}, action) {
	if (action.type === SUBMITINFORMATION) {
		//return Object.assign({} ,  state , {title: action.info.title, text: action.info.text})
		return dotProp.set(state , "info" ,  {title:  action.info.title, text: action.info.text} )
	} else {
		return state
	}
}

export default combineReducers({
	AdInformation
})

//  Example
/*
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
*/
