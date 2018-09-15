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
					{item}
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
				<div className={style.aaaa}><h2>宣伝状況の詳細画面</h2></div>
				<div className={style.StatsComponent}>
					{this.renderStats(this.props.ad_count, "宣伝された回数", "回", style.StatsFrame1)}
					{this.renderStats(this.props.rating, "平均評価", "/5", style.StatsFrame2)}
					{/*this.renderStats(items[2], "何か", "説明", style.StatsFrame3)*/}
				</div>
			</div>
		)
	}
}

export default StatsComponent
