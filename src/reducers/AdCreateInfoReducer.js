import {
	ONCHANGETITLE,
	ONSETIMAGE
} from "../actions/AdCreate"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

// export function AdInformation(state = {info : {}}, action) {
// 	if (action.type === ONCHANGETITLE) {
// 		//return Object.assign({} ,  state , {title: action.info.title, text: action.info.text})
// 		return dotProp.set(state , "info" ,  {title:  action.info.title, text: action.info.text} )
// 	} else {
// 		return state
// 	}
// }

const AdCreateInfoStructure = {title: "" , text : "" , image : ""}

export default function AdCreateInfo(state = AdCreateInfoStructure, action) {
	console.log("AdCreateInfo reducer")
	if (action.type === ONCHANGETITLE) {
		//return Object.assign({} ,  state , {title: action.info.title, text: action.info.text})
		return dotProp.set(state , "title" ,  action.title )
	} else if(action.type === ONSETIMAGE){
		console.log("reducer")
		return dotProp.set(state, "image" , action.image)
	}else{
		return state
	}
}
