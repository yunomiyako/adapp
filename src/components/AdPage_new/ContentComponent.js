import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

class ContentComponent extends Component {
	render() {
		return (
			<div className={style.AdPage}>
				<div>
        ここが本文
				</div>
			</div>
		)
	}
}

export default ContentComponent
