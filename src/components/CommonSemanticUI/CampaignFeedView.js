import React  from "react"
import style from "./CommonSemanticUI.css"
import {Link} from "react-router-dom"
//semantic UI
import { Header} from "semantic-ui-react"

const FeedView = function(link , title , image_url , left_text) {
	return (
		
		<div className={style.FeedView}>
			<Header as='h3' content={left_text} block className={style.FeedIcon}  />
			<Link to={link}>
				<img className={style.FeedImage} src={image_url} alt=""></img>
				<div className={style.FeedTitleFrame}>
					<h2 className={style.FeedTitle}>{title}</h2>
				</div>
			</Link>
		</div>
	)
}

export default FeedView