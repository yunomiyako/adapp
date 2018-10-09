import React  from "react"
import style from "./CommonSemanticUI.css"
//semantic UI
import {  Segment , Image} from "semantic-ui-react"

import paragraph from "../../images/paragraph.png"

const FeedViewPlaceHolder = function() {
	return (
		  <Segment loading className={style.FeedViewPlaceHolder}>
			<Image src={paragraph} />
			<br/>
			<Image src={paragraph} />
		</Segment>
	)
}

export default FeedViewPlaceHolder