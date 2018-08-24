import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./UserPage.css"

class RewardComponent extends Component {
	renderReward(item) {
		return item.map(_item => {
			return (
				<div className ={style.ContentFrame}>
					<h2>{_item}</h2>
				</div>
			)}
		)
	}

	render() {
		const reward = ['r1', 'r2'];
		return (
			<div className={style.RewardComponent}>
				<h2>mikaeri</h2>
				{this.renderReward(reward)}
			</div>
		)
	}
}

export default RewardComponent
