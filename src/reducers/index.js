// Reducerを結合します
import {combineReducers} from "redux"
import AdCreateInfo from "./AdCreateInfoReducer.js"
import AdPageInfo from "./AdPageInfo"
export default combineReducers({
	AdCreateInfo , 
	AdPageInfo
})
