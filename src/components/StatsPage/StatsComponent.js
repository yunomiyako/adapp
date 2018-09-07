import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./StatsPage.css"

import items from "./test.js"

class StatsComponent extends Component {
	renderStats(item, title, desc, classname){
		return (
			<div className={classname}>
				<div className ={style.StatsFrameTitle}>
					{title}
				</div>
				<div className ={style.StatsFrameNumber}>
					{item.number}
				</div>
				<div className ={style.StatsFrameDesc}>
					{desc}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<div className={style.aaaa}><h2>何かの詳細</h2></div>
				<div className={style.StatsComponent}>
					{this.renderStats(items.items[0], "宣伝された回数", "説明", style.StatsFrame1)}
					{this.renderStats(items.items[1], "平均評価", "説明", style.StatsFrame2)}
					{this.renderStats(items.items[0], "何か", "説明", style.StatsFrame3)}
				</div>
			</div>
		)
	}
}

export default StatsComponent
