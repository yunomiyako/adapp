import React , {Component}  from "react"
import style from "./FeedListPage.css"
import { Item } from "semantic-ui-react"
import renderNewLine from "../../Utils/renderNewLine"
class Feed extends Component {
	render() {
		return (
			<div className={style.feed_container}>
				<div className={style.feed_image}>
					<a href={this.props.image}>
						<img alt="" src={this.props.image}/>
					</a>
					
				</div>
				<div>
					<div className={style.feed_header}>{this.props.title}</div>
					<div className={style.feed_description}>
						{renderNewLine(this.props.description)}
					</div>
				</div>
			</div>
		)
	}

}

export default Feed
