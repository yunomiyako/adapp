import React , {Component}  from "react"
import {} from "semantic-ui-react"
import style from "./AdPage.css"

class ActionComponent extends Component {
	renderUserName() {
		if(this.props.username) {
			return (				<div className ={style.username_frame}>
				<p className={style.username}>by @{this.props.username}</p>
			</div>)
		}
	}
	render() {
		return (
			<div>
				<h1 className={style.title}>{this.props.title}</h1>
				{this.renderUserName()}
			</div>
		)
	}
}

export default ActionComponent
