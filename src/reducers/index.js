// Reducerを結合します
import {combineReducers} from "redux"
import AdCreateInfo from "./AdCreateInfoReducer"
import AdPageInfo from "./AdPageInfo"
import ReturnPageInfo from "./ReturnPageInfo"
import UserPage from "./UserPage"
import TopPage from "./TopPage"
import { snackbarReducer } from "react-redux-snackbar"; // Import it

export default combineReducers({
	AdCreateInfo , 
	AdPageInfo , 
	ReturnPageInfo , 
	UserPage , 
	TopPage , 
	snackbar: snackbarReducer
})
