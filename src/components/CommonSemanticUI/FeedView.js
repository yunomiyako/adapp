import React  from "react"
import style from "./CommonSemanticUI.css"
import {Link} from "react-router-dom"
//semantic UI
import { Header} from "semantic-ui-react"

import AdTypeEnum from "../../domain/enum/AdTypeEnum"

const FeedView = function(link , adObject , url) {
	const icon = AdTypeEnum.getByName(adObject.adType).icon
	const text = AdTypeEnum.getByName(adObject.adType).short_title
	return (
		<div className={style.FeedView}>
			<Header as='h3' icon={icon} content={text} block className={style.FeedIcon}  />
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