import React , {Component}  from "react"
import { Statistic , Segment  } from "semantic-ui-react"
import style from "./StatsPage.css"

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
					{/* {this.renderStats(this.props.ad_count, "宣伝された回数", "回", style.StatsFrame1)}
					{this.renderStats(this.props.rating, "平均評価", "/5", style.StatsFrame2)}
					this.renderStats(items[2], "何か", "説明", style.StatsFrame3) */}
					<Segment padded>
						<div className={style.center}>
							<Statistic.Group color="blue">
								{/* <Statistic>
									<Statistic.Label>閲覧回数</Statistic.Label>
									<Statistic.Value>41</Statistic.Value>
									<Statistic.Label>回</Statistic.Label>
								</Statistic> */}
								<Statistic>
									<Statistic.Label>宣伝された回数</Statistic.Label>
									<Statistic.Value>{this.props.ad_count}</Statistic.Value>
									<Statistic.Label>回</Statistic.Label>
								</Statistic>
								<Statistic>
									<Statistic.Label>平均評価</Statistic.Label>
									<Statistic.Value>{this.props.rating}</Statistic.Value>
									<Statistic.Label>点</Statistic.Label>
								</Statistic>
							</Statistic.Group>
						</div>
					</Segment>
				</div>
			</div>
		)
	}
}

export default StatsComponent
