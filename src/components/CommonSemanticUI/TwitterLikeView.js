import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"

//semantic UI
import { Comment  } from "semantic-ui-react"

class TwitterLikeView extends Component {
	render() {
		const tweetObject = this.props.tweetObject
		var icon_url = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
		var username = "ユーザ名"
		var userid = "twitter_id"
		var text = "正しくツイートが取得できません"
		if(tweetObject) {
			icon_url = tweetObject.icon_url || icon_url
			username = tweetObject.username ||  username
			userid = tweetObject.userid || userid
			text = tweetObject.text || text
		} else {
			icon_url = this.props.icon_url || icon_url
			username = this.props.username  || username
			userid = this.props.userid || userid
			text = this.props.text || text
		}
		return (
			<div className={style.TwitterLikeView}>
				<Comment.Group>
					<Comment>
						<Comment.Avatar as='a' src={icon_url}/>
						<Comment.Content>
							<Comment.Author>{username}</Comment.Author>
							<Comment.Metadata>
								<div>@{userid}</div>
							</Comment.Metadata>
							<Comment.Text>
								{text}
							</Comment.Text>
						</Comment.Content>
					</Comment>
				</Comment.Group>
			</div>
		)
	}
}

export default TwitterLikeView
