import {
} from "../actions/AdCreate"

//データ構造
import AdPageInfoDataStructure from "../domain/AdPageInfoDataStructure"

// immutable state change helper
var dotProp = require("dot-prop-immutable")

export default function AdPageInfo(state = new AdPageInfoDataStructure({}) , action) {
	switch (action.type) {
	default :
		return state
	}
}
