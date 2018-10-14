import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import AdPage from "../containers/AdPage/AdPage_new"
import AdCreatePage from "../containers/AdCreatePage/AdCreatePage"
import UserPage from "./UserPage/UserPage"
import UserAdListPage from "./UserPage/UserAdListPage"
import StatsPage from "./StatsPage/StatsPage"
import Header from "./Header/Header"
import ReturnPageHome from "../containers/ReturnPage/ReturnPage"
import LoginRedirectPage from "./LoginRedirect/LoginRedirectPage"
import PrivacyPolicyPage from "./PrivacyPolicyPage/PrivacyPolicyPage"
import TermsOfServicePage from "./PrivacyPolicyPage/TermsOfService"
import { Route, BrowserRouter } from "react-router-dom"

import Amplify from "aws-amplify"
import conf from "../aws/aws_configure"
import anonymousAuth from "../aws/authentification"
import {set_userdetail} from "../localStorage/user_detail"
import fetchUserDetail from "../api/fetchUserDetail"

import QueryString from "../Utils/QueryString"
import redirectByQueryString from "./Redirect/redirectByQueryString"

import { Snackbar } from "react-redux-snackbar";
 
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
						<Route path="/ad_page/:id_user/:id_ad" component={AdPage}/>
						<Route exact path="/ad_page/:id_user/" component={UserAdListPage}/>
						<Route path="/ad_create" component={AdCreatePage}/>
						<Route path="/userpage" component = {UserPage}/>
						<Route path="/statspage/:id_ad" component = {StatsPage}/>
						<Route path="/return_page/:id_return" component = {ReturnPageHome} />
						<Route path="/redirect" component = {LoginRedirectPage} />
						<Route path="/privacypolicy" component = {PrivacyPolicyPage} />
						<Route path="/terms_service" component = {TermsOfServicePage} />
					</div>

				</div>
			</BrowserRouter>
		)
	}
}

export default App
