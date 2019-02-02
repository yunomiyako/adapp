import React , {Component}  from "react"
import style from "./CampaignPage.css"
import {  Dimmer , Loader , Button , Icon } from "semantic-ui-react"
import fetchCampaignDetail from "../../api/fetchCampaignDetail";
import WinnerListContainer from "./WinnerListContainer";
import WinnerStatus from "./WinnerStatus";
import QueryString from "../../Utils/QueryString";
import Kiyaku from "./Kiyaku";
import ErrorView from "../CommonSemanticUI/ErrorPage"

class CampaignPage2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			campaign : undefined , 
			applicants : [] , 
			loading : false , 
			screen_name : "" , 
			id_campaign : "" , 
			fail_load : false
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
		fetchCampaignDetail(screen_name , id_campaign , token).then(bdy => {
			this.setState({loading : false })
			this.setState(
				{
					campaign : bdy.campaign ,
					applicants : bdy.applicants
				}
			)
		}).catch(e => {
			this.setState(
				{
					fail_load : true , 
					loading : false
				}
			)
		})

	}

	onClickTweetButton() {
		const screen_name = this.props.match.params.screen_name
		const id_campaign = this.props.match.params.id_campaign
		const tweetUrl = "https://twitter.com/" + screen_name + "/status/" + id_campaign
		window.open(tweetUrl);
	}

	render() {
		if(this.state.campaign) {
			return (
				<div className={style.CampaignPagePage}>
				<div className={style.CampaignPageContainer}>
				<br/><br/><br/><br/><br/>
				<h1>賞品と当選者一覧</h1>
				<WinnerListContainer campaign={this.state.campaign} applicants={this.state.applicants}/>
				<div>
						<Button 
						color="twitter"
						size="massive"
						onClick={() => this.onClickTweetButton()}>
						<Icon name="twitter"/>
						応募しにいく
						</Button>
					</div>
				<Kiyaku
				screenName={this.state.campaign.id_user}
				idTweet={this.state.campaign.id_campaign}
				endTime={this.state.campaign.end_time}
				startTime={this.state.campaign.start_time}
				/>
				</div>
				</div>
			)
		} else {
			if(this.state.loading) {
				return (
					<Dimmer active>
					<Loader size='massive'>Loading</Loader>
					</Dimmer>
				)
			} else if(this.state.fail_load) {
				return (
					ErrorView("キャンペーンが見つかりませんでした。\n更新すると表示される可能性があります。")
				)
			}
			return ""
		}
	}
}

export default CampaignPage2
