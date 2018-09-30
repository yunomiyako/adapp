import React , {Component}  from "react"
import { Header } from "semantic-ui-react"
import style from "./AdPage.css"

import TitleComponent from "./TitleComponent"
import ContentComponent from "./ContentComponent"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
class FeedComponent extends Component {
	renderHeader() {
		const adTypeEnum = AdTypeEnum.getByName(this.props.adType)
		if(adTypeEnum) {
			const icon = adTypeEnum.icon
			const text = adTypeEnum.short_title
			return (<Header as='p' icon={icon} content={text} block className={style.FeedIcon}  />)
		}
	}
	render() {

		return (
			<div className={style.titleAndContentFrame}>
				<div className={style.TitleComponent}>
					<TitleComponent
						title={this.props.title}
						user_detail = {this.props.user_detail}
					/>
				</div>

				<div className={style.ContentComponent}>
					<ContentComponent
						content={this.props.content}
						tweetObject = {this.props.tweetObject}
					/>
				</div>
			</div>
		)
	}
}

export default FeedComponent
