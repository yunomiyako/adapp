import React , {Component}  from "react"
import style from "./CommonSemanticUI.css"

//semantic UI
import { Comment  } from "semantic-ui-react"

class TwitterLikeView extends Component {
	render() {
		const icon_url = this.props.icon_url ? this.props.icon_url : "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
		const username = this.props.username ?this.props.username :  "a"
		const userid = this.props.userid ? this.props.userid : "a"
		const text = this.props.text ? this.props.text :  "a"
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
