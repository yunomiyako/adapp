import React , {Component}  from "react"
import style from "./CampaignPage.css"
import {  Dimmer , Loader , Button } from "semantic-ui-react"
import fetchCampaignDetail from "../../api/fetchCampaignDetail";


class CampaignPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			campaign : undefined , 
			applicants : [] , 
			loading : false
		}
	}
	
	componentDidMount() {
		this.getCamapaignDetail()
	}

	async getCamapaignDetail() {
		const screen_name = this.props.match.params.screen_name
		const id_ad = this.props.match.params.id_campaign
		this.setState({loading : true})
		const body = await fetchCampaignDetail(screen_name , id_ad)
		this.setState({loading : false})
		this.setState(
			{
				campaign : body.campaign , 
				applicants : body.applicants , 
			}
		)
	}

	renderList() {
		return this.state.applicants.map(a => a.user.name)
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
			<div className={style.CampaignPagePage}>
				<div className={style.CampaignPagePageContainer}>
					{this.renderList()}
				</div>
			</div>
		)
	}
}

export default CampaignPage
