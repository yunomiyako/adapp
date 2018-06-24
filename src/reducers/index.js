// Reducerを結合します
import {combineReducers} from "redux"
import AdCreateInfo from "./AdCreateInfoReducer.js"

console.log(combineReducers)
console.log(AdCreateInfo)
export default combineReducers({
	AdCreateInfo
})
