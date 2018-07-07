import {
	ONCHANGETITLE,
	ONCHANGEDESCRIPTION,
	ONSETIMAGE,
	ONSETRETURNTYPE
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

const AdCreateInfoStructure = {title: "" , description : "" , image : "" , returnType:1}

export default function AdCreateInfo(state = AdCreateInfoStructure, action) {
	switch (action.type) {
	case ONCHANGETITLE:
		return dotProp.set(state , "title" ,  action.title )
	case ONSETIMAGE :
		return dotProp.set(state, "image" , action.image)
	case ONCHANGEDESCRIPTION :
		return dotProp.set(state , "description" ,  action.description )
	case ONSETRETURNTYPE :
		return dotProp.set(state , "returnType" , action.id)
	default :
		return state
	}
}
