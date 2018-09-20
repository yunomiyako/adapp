import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"
import {Link} from "react-router-dom"
//semantic UI
import { Icon  } from "semantic-ui-react"

import AdTypeEnum from "../../domain/enum/AdTypeEnum"

const FeedView = function(link , adObject , url) {
	const icon = AdTypeEnum.getByName(adObject.adType).icon
	return (
		<div className={style.FeedView}>
			<Icon bordered inverted color='teal' name={icon} className={style.FeedIcon} />
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