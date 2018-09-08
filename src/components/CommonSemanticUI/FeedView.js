import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"
import {Link} from "react-router-dom"
//semantic UI
import { Image  } from "semantic-ui-react"

const FeedView = function(link , adObject) {
	return (
		<Link to={link}>
			<div className={style.FeedView}>
				<Image className={style.FeedImage} src="https://pbs.twimg.com/media/CBFawbbU8AAkbhc.jpg"></Image>
				<h2 className={style.FeedTitle}>{adObject.title}</h2>
				
			</div>
		</Link>
	)
}

export default FeedView