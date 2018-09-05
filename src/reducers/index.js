// Reducerを結合します
import {combineReducers} from "redux"
import AdCreateInfo from "./AdCreateInfoReducer"
import AdPageInfo from "./AdPageInfo"
import ReturnPageInfo from "./ReturnPageInfo"
export default combineReducers({
	AdCreateInfo , 
	AdPageInfo , 
	ReturnPageInfo
})
