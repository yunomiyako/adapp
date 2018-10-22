import React , {Component}  from "react"
import { Dimmer , Loader , Button , Icon} from "semantic-ui-react"
import style from "./AdPage.css"

import FourImageComponent from "./FourImageComponent"

import ActionComponent from "./ActionComponent"
import RatingComponent from "./RatingComponent"
import FeedComponent from "./FeedComponent"
import ErrorPage from "../CommonSemanticUI/ErrorPage"

import {redirectToReturnPage} from "../Redirect/redirect"
import loginCheck from "../../localStorage/loginCheck"
import goTwitterLogin from "../../Utils/goTwitterLogin"
import AdDescriptionView from "./AdDescriptionView"
import fetchRandomAdData from "../../api/fetchRandomAdData";
import { get_userdetail } from "../../localStorage/user_detail";
import createTweetUrl from "../../Utils/createTweetUrl";
import HelmetCreator from "../../Utils/HelmetCreator";

class AdPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			urls: [], 
			randomObject : null
		}
	}

	componentDidMount() {
		this.fetchAdData()
	}

	fetchAdData() {	
		const id_user = this.props.match.params.id_user
		const id_ad = this.props.match.params.id_ad
		this.props.fetchAdData(id_user, id_ad )
	}

	renderHelmet() {
		const title = this.props.title
		const id_user = this.props.match.params.id_user
		const id_ad = this.props.match.params.id_ad
		const path = "ad_page/" + id_user + "/" + id_ad
		var image = undefined
		if(this.props.adObject) {
			if(this.props.adObject.images) {
				image = this.props.adObject.images[0]
			}
		}
		return HelmetCreator(title , image , path)
	}

	onClickTweetButton() {
		const id_ad = this.props.match.params.id_ad
		const id_user = this.props.match.params.id_user
		const text = "宣伝【" + this.props.title + "】があったよ！%0AadApp(あどあっぷ)を通してactionをしてくれたらお返しがあります。%0A%0A"
		const url = createTweetUrl(id_user , id_ad , this.props.adType , text)
		window.open(url);
	}

	onClickActionButton() {
		const id_ad = this.props.match.params.id_ad
		const id_user = this.props.match.params.id_user
		const user_detail = get_userdetail()
		if(user_detail.id_user === id_user) {
			//作成者と見ている人のid_userが同じ場合
			//このページをツイートする
			const text = "宣伝【" + this.props.title + "】を作ったよ！%0AadApp(あどあっぷ)を通してactionをしてくれたらお返しがあります。%0A%0A"
			const url = createTweetUrl(id_user , id_ad , this.props.adType , text)
			window.open(url);
		} else {
			if(loginCheck() || this.props.adType === "lookMe") {
				const id_user = this.props.match.params.id_user
				const id_ad = this.props.match.params.id_ad
				const payload = {"id_user" : id_user , "id_ad" : id_ad 
				, "adType" : this.props.adType , "hasReceived" : this.props.hasReceived}
				this.props.onClickActionButton(payload)
			} else {
				const path = this.props.location.pathname
				goTwitterLogin(path)
			}
		}
	}

	async onClickRandomButton() {
		const res = await fetchRandomAdData()
		this.props.history.push("/ad_page/" + res.id_user + "/" + res.id_ad )
		this.props.fetchAdData(res.id_user, res.id_ad )
	}

	renderActionBar() {
		const id_user = this.props.match.params.id_user
		const user_detail = get_userdetail()
		if(user_detail.id_user === id_user) {
			//作成者と見ている人のid_userが同じ場合
			return (
			<ActionComponent
			onClickActionButton = {() => this.onClickActionButton()}
			returnDescription = {this.props.returnDescription}
			adType = {this.props.adType}
			loading = {this.props.actionLoading}
			hasReceived = {this.props.hasReceived}
			isIdentical = {true}
		/>)
		} else {
			return (
				<ActionComponent
					onClickActionButton = {() => this.onClickActionButton()}
					returnDescription = {this.props.returnDescription}
					adType = {this.props.adType}
					loading = {this.props.actionLoading}
					hasReceived = {this.props.hasReceived}
					isIdentical = {false}
				/>
			)
		}
	}

	render() {
		if(this.props.loading) {
			return (
				<Dimmer active>
					<Loader size='massive'>Loading</Loader>
				</Dimmer>
			)
		}

		if(this.props.errorMessage) {
			return ErrorPage(this.props.errorMessage)
		}

		const id_return = this.props.id_return_to_go
		if (id_return) {
			this.props.onResetIdReturnToGO()
			return redirectToReturnPage(id_return)
		}

		return (
			<div className={style.AdPage}>
				<div className={style.AdPageContainer}>
				{this.renderHelmet()}
					<div>
						<FourImageComponent
							images = {this.props.imageUrls}
						/>
					</div>

					<div className = {style.marginFrame}>
						<FeedComponent
							title= {this.props.title}
							content={this.props.adObject.text}
							user_detail = {this.props.user_detail}
							tweetObject = {this.props.tweetObject}
							adType = {this.props.adType}
						/>
					</div>

					<div className={style.adDescriptionFrame}>
						<AdDescriptionView
							username = {this.props.username}
							content = {this.props.adObject.text}
							adType = {this.props.adType}
							returnDescription = {this.props.returnDescription}
						/>
					</div>

					<div>
						<RatingComponent
							rating = {this.props.rating}
						/>
					</div>

					{this.renderActionBar()}

					<br/><br/><br/>
					<div>
						<Button 
						color="blue"
						size="massive"
						onClick={() => this.onClickRandomButton()}>
						他の宣伝を見る(ランダム)
						</Button>
					</div>
					<br/>
					<div>
						<Button 
						color="twitter"
						size="massive"
						onClick={() => this.onClickTweetButton()}>
						<Icon name="twitter"/>
						この宣伝をツイート
						</Button>
					</div>
					<br/><br/>
					<br/><br/><br/>
					<br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default AdPage