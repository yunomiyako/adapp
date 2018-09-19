import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"
import {} from "react-router-dom"
//semantic UI
import {  } from "semantic-ui-react"

//TODO : まともに作る
const ErrorView = function(errorMessage) {
	return (
		<div>
			<br/><br/><br/><br/>
			{errorMessage}
		</div>
	)
}

export default ErrorView