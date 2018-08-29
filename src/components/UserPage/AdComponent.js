import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./UserPage.css"

import items from "./test.js"

class AdComponent extends Component {
	renderTitle(item) {
		return item.items.map(_item => {
			return (
				<div className ={style.ContentFrame}>
					<div className ={style.ContentFrameTitle}>
						<h2><a href={_item.link}>{_item.title}</a></h2>
					</div>
					<div className ={style.ContentFrameDate}>
						<h4>{_item.date}</h4>
					</div>
				</div>
			)}
		)
	}

	render() {
		return (
			<div className={style.AdComponent}>
				<div className={style.aaaa}><h2>作成した宣伝</h2></div>
				{this.renderTitle(items)}
			</div>
		)
	}
}

export default AdComponent
