import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import AdPage from "../containers/AdPage/AdPage_new"
import AllAd from "./AllAd/AllAd"
import Explanation from "./Explanation/Explanation"
import AdCreatePage from "../containers/AdCreatePage/AdCreatePage"
import UserPage from "./UserPage/UserPage"
import UserAdListPage from "./UserPage/UserAdListPage"
import StatsPage from "./StatsPage/StatsPage"
import Header from "./Header/Header"
import ReturnPageHome from "../containers/ReturnPage/ReturnPage"
import LoginRedirectPage from "./LoginRedirect/LoginRedirectPage"
import PrivacyPolicyPage from "./PrivacyPolicyPage/PrivacyPolicyPage"
import TermsOfServicePage from "./PrivacyPolicyPage/TermsOfService"
import WebhookLoginPage from "./WebhookLoginPage/WebhookLoginPage"
import WebhookRedirectPage from "./WebhookLoginPage/WebhookRedirectPage"
import CampaignPage from "./CampaignPage/CampaignPage"
import CampaignCreatePage from "../containers/CampaignCreatePage/CampaignCreatePage"
import IconBattle from "./IconBattle/IconBattle"
import CreateSimpleMessage from "./CampaignPage/CreateSimpleMessage"


import { Route, BrowserRouter } from "react-router-dom"

import Amplify from "aws-amplify"
import conf from "../aws/aws_configure"
import anonymousAuth from "../aws/authentification"
import {set_userdetail} from "../localStorage/user_detail"
import fetchUserDetail from "../api/fetchUserDetail"

import QueryString from "../Utils/QueryString"
import redirectByQueryString from "./Redirect/redirectByQueryString"

import { Snackbar } from "react-redux-snackbar"
import ExperimentalPage from "./ExperimentalPage/ExperimentalPage"
import CampaignHobbyPage from "./CampaignHobbyPage/CampaignHobbyPage"

Amplify.configure(conf)

class App extends Component {
	componentDidMount() {
		this.tmpAuth()
	}

	componentDidUpdate() {
		this.tmpAuth()
	}

	tmpAuth() {
		const callback = () => {
			fetchUserDetail("" , true).then((detail) => {
				set_userdetail(detail)
			})
		}
		anonymousAuth(callback)
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">

					<Snackbar />

					{redirectByQueryString(QueryString)}
					<div className="App-Header">
						<Route path="/" component={Header}/>
					</div>
					<div className="App-Component">
						<Route exact={true} path="/" component={TopPage}/>
						<Route exact={true} path="/all_ad" component={AllAd}/>
						<Route exact={true} path="/explanation" component={Explanation}/>
						<Route path="/ad_page/:id_user/:id_ad" component={AdPage}/>
						<Route exact path="/ad_page/:id_user/" component={UserAdListPage}/>
						<Route path="/ad_create" component={AdCreatePage}/>
						<Route path="/userpage" component = {UserPage}/>
						<Route path="/statspage/:id_ad" component = {StatsPage}/>
						<Route path="/return_page/:id_return" component = {ReturnPageHome} />
						<Route path="/redirect" component = {LoginRedirectPage} />
						<Route path="/privacypolicy" component = {PrivacyPolicyPage} />
						<Route path="/terms_service" component = {TermsOfServicePage} />
						<Route path="/iconbattle" component = {IconBattle} />
						<Route path="/webhook" component = {WebhookLoginPage} />
						<Route path="/webhook/redirect" component = {WebhookRedirectPage} />
						<Route path="/campaign/:screen_name/:id_campaign" component = {CampaignPage} />
						<Route path="/campaign_create" component = {CampaignCreatePage} />
						<Route path="/campaign_hobby" component = {CampaignHobbyPage} />
						<Route path="/campaign_message" component = {CreateSimpleMessage} />


						<Route path="/test" component = {ExperimentalPage} />
					</div>

				</div>
			</BrowserRouter>
		)
	}
}

export default App
