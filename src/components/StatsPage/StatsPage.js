import React , {Component}  from "react"
import style from "./StatsPage.css"

import StatsComponent from "./StatsComponent"
import BotanComponent from "./BotanComponent"
import NaiyouComponent from "./NaiyouComponent"
import fetchAdDetail from "../../api/fetchAdDetail"


class StatsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ad_count : 0 , 
			rating : 0 , 
			receivers : []
		}
	}
	componentDidMount() {
		this.getAdDetail()
	}

	async getAdDetail() {
		const body = await fetchAdDetail(0)
		console.log(body)
		this.setState(
			{
				ad_count : body.ad_count , 
				rating : body.rating , 
				receivers : body.receivers
			}
		)
	}

	render() {
		return (
			<div className={style.StatsPage}>
				<div className={style.StatsPageContainer}>
					<div>
						<StatsComponent
						ad_count = {this.state.ad_count}
						rating = {this.state.rating}
						/>
					</div>

					<div>
						<NaiyouComponent
						receivers = {this.state.receivers}
						/>
					</div>

					{/*
					<div>
						<BotanComponent/>
					</div>
*/}

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
