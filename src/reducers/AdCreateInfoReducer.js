import {
	ONCHANGETITLE,
	ONCHANGEDESCRIPTION,
	ONSETIMAGE,
	ONSETRETURNTYPE,
	ONCHANGERETURNTEXT,
	ONCHANGEPICTURES,
	ONCHANGERETURNPICTURES,
	ONCLICKSUBMIT
} from "../actions/AdCreate"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

const AdCreateInfoStructure = {title: "" , description : "" , image : "" , returnType:1 , returnText:"",
	adImages : []}

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
	case ONCHANGERETURNTEXT :
		return dotProp.set(state , "returnText" , action.text)
	case ONCHANGEPICTURES :
		var newstate = dotProp.set(state , "adImages" , action.pictures)
		return newstate
	case ONCHANGERETURNPICTURES :
		return dotProp.set(state , "returnImages" , action.pictures)
	case ONCLICKSUBMIT : 
		return state
	default :
		return state
	}
}
