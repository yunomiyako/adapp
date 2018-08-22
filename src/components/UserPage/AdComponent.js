import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./UserPage.css"

class AdComponent extends Component {
	renderTitle(item) {
		return item.map(_item => {
			return (
				<div className ={style.ContentFrame}>
					<h2>{_item}</h2>
				</div>
			)}
		)
	}

	render() {
		const title = ['t1', 't2', 't3'];
		return (
			<div className={style.AdComponent}>
				<h2>taitoru</h2>
				{this.renderTitle(title)}
			</div>
		)
	}
}

export default AdComponent