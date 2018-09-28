import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./AdPage.css"

import TitleComponent from "./TitleComponent"
import ContentComponent from "./ContentComponent"

class FeedComponent extends Component {
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
					/>
				</div>
			</div>
		)
	}
}

export default FeedComponent
