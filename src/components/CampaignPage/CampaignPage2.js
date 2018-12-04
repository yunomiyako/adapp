import React , {Component}  from "react"
import style from "./CampaignPage.css"
import {  Dimmer , Loader } from "semantic-ui-react"
import fetchCampaignDetail from "../../api/fetchCampaignDetail";
import WinnerListContaienr from "./WinnerListContainer";
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
		const token = this.props.match.params.id_campaign
		console.log("screen_name = " + screen_name)
		
		this.setState({loading : true})
		const body = await fetchCampaignDetail(screen_name , undefined , token)
		this.setState({loading : false})
		console.log( body)
		this.setState(
			{
				campaign : body.campaign , 
				applicants : body.applicants , 
			}
		)
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
