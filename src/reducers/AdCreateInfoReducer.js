import {
	ONCHANGETITLE,
	ONCHANGEDESCRIPTION,
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

const AdCreateInfoStructure = {title: "" , description : "" , image : ""}

export default function AdCreateInfo(state = AdCreateInfoStructure, action) {
	if (action.type === ONCHANGETITLE) {
		//return Object.assign({} ,  state , {title: action.info.title, text: action.info.text})
		return dotProp.set(state , "title" ,  action.title )
	} else if(action.type === ONSETIMAGE){
		return dotProp.set(state, "image" , action.image)
	}else if(action.type === ONCHANGEDESCRIPTION){
		return dotProp.set(state , "description" ,  action.description )
	}else{
		return state
	}
}
