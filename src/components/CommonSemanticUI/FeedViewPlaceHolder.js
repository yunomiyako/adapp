import React  from "react"
import style from "./CommonSemanticUI.css"
import {Link} from "react-router-dom"
//semantic UI
import { Header , Segment , Image} from "semantic-ui-react"

import AdTypeEnum from "../../domain/enum/AdTypeEnum"
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