import React , {Component}  from "react"
import style from "./StatsPage.css"

import StatsComponent from "./StatsComponent"
import BotanComponent from "./BotanComponent"
import NaiyouComponent from "./NaiyouComponent"

class StatsPage extends Component {
	render() {
		return (
			<div className={style.StatsPage}>
				<div className={style.StatsPageContainer}>
					<div>
						<StatsComponent/>
					</div>

					<div>
						<NaiyouComponent/>
					</div>

					<div>
						<BotanComponent/>
					</div>

					<br/>
					<br/><br/>
					<br/><br/><br/>
					<br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default StatsPage
