import React , {Component}  from "react"
import { } from "semantic-ui-react"
import style from "./AdPage.css"

class ContentComponent extends Component {
	render() {
		return (
			<div>
				<div>
					<h4 className={style.content}>
					{this.props.content}
					</h4>
				</div>
			</div>
		)
	}
}

export default ContentComponent
