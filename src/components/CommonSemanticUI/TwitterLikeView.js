import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"

//semantic UI
import { Comment , Loader } from "semantic-ui-react"

import ImageGroup from "../CommonSemanticUI/ImageGroup"

import renderNewLine from "../../Utils/renderNewLine"
import getUrlFromTweetId from "../../Utils/getUrlFromTweetId"

class TwitterLikeView extends Component {
	render() {
		const tweetObject = this.props.tweetObject
		var icon_url = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
		var username = "ユーザ名"
		var userid = "twitter_id"
		var text = "正しくツイートが取得できません"
		var images = []
		var id_tweet = ""
		if(tweetObject) {
			icon_url = tweetObject.icon_url || icon_url
			username = tweetObject.username ||  username
			userid = tweetObject.userid || userid
			text = tweetObject.text || text
			images = tweetObject.images || images
			id_tweet = tweetObject.id_tweet || id_tweet
		} else {
			icon_url = this.props.icon_url || icon_url
			username = this.props.username  || username
			userid = this.props.userid || userid
			text = this.props.text || text
			images = this.props.images || images
		}
		const tweet_link =getUrlFromTweetId(userid , id_tweet)
		return (
			<div className={style.TwitterLikeView}>
				<Comment.Group>
					<Comment>
						<Loader active={this.props.active}/>
						<Comment.Avatar as='a' src={icon_url}/>
						<Comment.Content>
							<Comment.Author>
								<p>{username}</p>
							</Comment.Author>
							<Comment.Metadata>
								<a href={tweet_link} target="_blank">
									@{userid}
								</a>
							</Comment.Metadata>
							<Comment.Text>
								{renderNewLine(text)}
							</Comment.Text>
							{ImageGroup(images)}
						</Comment.Content>
					</Comment>
				</Comment.Group>
			</div>
		)
	}
}

export default TwitterLikeView
