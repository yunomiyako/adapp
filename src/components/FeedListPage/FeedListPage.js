import React , {Component}  from "react"
import style from "./FeedListPage.css"
import {  Item } from "semantic-ui-react"
import Feed from "./Feed"
import { fileDownloadPrivate2 } from "../../api/fileDownload"
import fetchFeedNews from "../../api/fetchFeedNews"
class FeedListPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			feeds : []
		}
	}

	componentDidMount() {
		fetchFeedNews().then((res) => {
			this.setState({
				feeds : res
			})
		})
	}

	renderFeedList() {
		return this.state.feeds.map((feed) => {
			const imagePath = fileDownloadPrivate2(feed.image , "")
			return (
				<Feed key={feed.title + feed.description} 
					title = {feed.title}
					description={feed.description}
					image = {imagePath}/>
			)
		})
	}

	render() {
		return (
			<div className={style.FeedListPage}>
				<div className={style.feed_list}>
					{this.renderFeedList()}
				</div>
			</div>
		)
	}

}

export default FeedListPage
