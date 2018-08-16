import React , {Component}  from "react"
import { } from "semantic-ui-react"
import style from "./AdPage.css"
import renderNewLine from "../../Utils/renderNewLine"

class ContentComponent extends Component {
	render() {
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

export default ContentComponent
