// Reducerを結合します
import {combineReducers} from "redux"
import AdCreateInfo from "./AdCreateInfoReducer.js"

window.console.log(combineReducers)
window.console.log(AdCreateInfo)
export default combineReducers({
	AdCreateInfo
})
