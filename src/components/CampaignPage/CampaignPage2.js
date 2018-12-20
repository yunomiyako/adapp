import React , {Component}  from "react"
import style from "./CampaignPage.css"
import {  Dimmer , Loader } from "semantic-ui-react"
import fetchCampaignDetail from "../../api/fetchCampaignDetail";
import WinnerListContaienr from "./WinnerListContainer";
import WinnerStatus from "./WinnerStatus";
import QueryString from "../../Utils/QueryString";

class CampaignPage2 extends Component {
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
		const id_campaign = this.props.match.params.id_campaign
		const token = this.props.match.params.token
		
		this.setState({loading : true})
		const body = await fetchCampaignDetail(screen_name , id_campaign , token)
		console.log(body.campaign)
		console.log(body.applicants)
		this.setState({loading : false})
		this.setState(
			{
				campaign : body.campaign , 
				applicants : body.applicants , 
			}
		)
	}

	render() {
		console.log(this.state.loading)
		if(this.state.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
		}

		console.log(this.state.campaign);
		console.log(this.state.applicants);

		return (
			<div className={style.CampaignPagePage}>
				<div className={style.CampaignPageContainer}>
					<br/><br/><br/><br/><br/>
					<h1>賞品と当選者一覧</h1>
					<WinnerListContaienr
						campaign = {this.state.campaign}
						applicants={this.state.applicants}
					/>
				</div>
			</div>
		)
	}
}

export default CampaignPage2
