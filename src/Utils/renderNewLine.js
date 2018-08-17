import React from "react"
/*\ne*/
export default (text , className) => {
	return text.split("\n").map(m => (<p className={className} key={btoa(crypto.getRandomValues(new Uint8Array(16)))}>{m}</p>))
}
