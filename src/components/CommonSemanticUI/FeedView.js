import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"
import {Link} from "react-router-dom"
//semantic UI
import { Image  } from "semantic-ui-react"

const FeedView = function(link , adObject , url) {
	return (
		<div className={style.FeedView}>
			<Link to={link}>
				<img className={style.FeedImage} src={url} alt=""></img>
				<div className={style.FeedTitleFrame}>
					<h2 className={style.FeedTitle}>{adObject.title}</h2>
				</div>
			</Link>
		</div>
	)
}

export default FeedView