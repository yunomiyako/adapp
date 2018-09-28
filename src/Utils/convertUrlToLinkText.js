import React from "react" 
import  Linkify from "react-linkify"
 
export default (text) =>  {
	return (
		<Linkify>
			{text}
		</Linkify>
	)
}