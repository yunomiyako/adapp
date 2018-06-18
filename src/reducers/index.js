// Reducerを結合します
import {combineReducers} from "redux"

import {
	SUBMITINFORMATION
} from "../actions/index.js"

export function AdInformation(state = [], action) {
	if (action.type === SUBMITINFORMATION) {
		return Object.assign(state , {title: action.info.title, text: action.info.text})
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
