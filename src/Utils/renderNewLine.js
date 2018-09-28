import React from "react"
import convertUrlToLinkText from "./convertUrlToLinkText"
/*\nで切って改行します*/
export default (text , className) => {
	if(text){
		return text.split("\n").map(m => (<p className={className} key={btoa(crypto.getRandomValues(new Uint8Array(16)))}> {convertUrlToLinkText(m)} </p>))
	} else {
		return ""
 	}
}
