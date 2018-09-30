import React , {Component}  from "react"
import { } from "semantic-ui-react"
import style from "./AdPage.css"
import renderNewLine from "../../Utils/renderNewLine"
import TwitterLikeView from "../CommonSemanticUI/TwitterLikeView"

class ContentComponent extends Component {

	render() {
		if(this.props.tweetObject) {
			return (
				<TwitterLikeView
					tweetObject = {this.props.tweetObject}
				/>
			)
		} else {
			return (
				<div>
					<div>
						<h4 className={style.content}>
							{renderNewLine(this.props.content , style.p_line)}
						</h4>
					</div>
				</div>
			)
		}
	}
}

export default ContentComponent
