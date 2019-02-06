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
		const screen_name = this.state.campaign.id_user
		const id_campaign = this.state.campaign.id_campaign
		const tweetUrl = "https://twitter.com/" + screen_name + "/status/" + id_campaign
		window.open(tweetUrl);
	}

	render() {
		if(this.state.campaign) {
			return (
				<div className={style.CampaignPagePage}>
				<div className={style.CampaignPageContainer}>
				<br/><br/><br/><br/><br/>

{/* 				<div className={style.adTop}>
				<a href="https://rpx.a8.net/svt/ejp?a8mat=358P23+C7DX82+2HOM+62U35&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa19020274517_358P23_C7DX82_2HOM_62U35%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F" target="_blank" rel="nofollow">
					<img src="http://hbb.afl.rakuten.co.jp/hsb/0eb4bbdb.d3e5aa19.0eb4bbaa.95151395/" border="0"></img></a>
						<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=358P23+C7DX82+2HOM+62U35" alt=""></img>

						<a href="https://px.a8.net/svt/ejp?a8mat=358P23+C9681E+40Q+1ZPVJ5" target="_blank" rel="nofollow">
						<img border="0" width="468" height="60" alt="" src="https://www23.a8.net/svt/bgt?aid=190202331741&wid=001&eno=01&mid=s00000000521012046000&mc=1"></img>
						</a>
						<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=358P23+C9681E+40Q+1ZPVJ5" alt=""></img>
				</div> */}

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
