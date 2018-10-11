import React , {Component}  from "react"
import style from "./StatsPage.css"

import StatsComponent from "./StatsComponent"
import NaiyouComponent from "./NaiyouComponent"
import URLComponent from "./URLComponent"
import fetchAdDetail from "../../api/fetchAdDetail"
import {  Dimmer , Loader } from "semantic-ui-react"
import { get_id_user } from "../../localStorage/user_detail";

class StatsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ad_count : 0 , 
			rating : 0 , 
			receivers : [] , 
			watch_count : 0 , 
			loading : false
		}
	}
	componentDidMount() {
		this.getAdDetail()
	}

	async getAdDetail() {
		const id_ad = this.props.match.params.id_ad
		this.setState({loading : true})
		const body = await fetchAdDetail(id_ad)
		this.setState({loading : false})
		console.log(body)
		this.setState(
			{
				ad_count : body.ad_count , 
				rating : body.rating , 
				receivers : body.receivers , 
				watch_count : body.watch_count
			}
		)
	}

	onClickListItem(id_user) {
		this.props.history.push("/ad_page/" + id_user  )
	}

	render() {
		if(this.state.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
		}
		return (
			<div className={style.StatsPage}>
				<div className={style.StatsPageContainer}>
					<div>
						<URLComponent
						id_user = {get_id_user()}
						id_ad = {this.props.match.params.id_ad}
						/>
					</div>

					<div>
						<StatsComponent
						ad_count = {this.state.ad_count}
						rating = {this.state.rating}
						watch_count = {this.state.watch_count}
						/>
					</div>

					<div>
						<NaiyouComponent
						receivers = {this.state.receivers}
						onClickListItem = {(id_user) => this.onClickListItem(id_user)}
						/>
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
