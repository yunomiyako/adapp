import React , {Component}  from "react"
import { Image } from "semantic-ui-react"
import style from "./AdPage.css"

class ActionComponent extends Component {
	render() {
		return (
			<div>
				<h1 className={style.title}>僕の作った星をみんなにみて欲しい</h1>
				<div className ={style.username_frame}>
					<p className={style.username}>by @iamgod</p>
				</div>
			</div>
		)
	}
}

export default ActionComponent
