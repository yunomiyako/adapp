import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import AdPage from "../containers/AdPage/AdPage_new"
import AdCreatePage from "../containers/AdCreatePage/AdCreatePage"
import TestPage from "./TestPage/TestPage"
import UserPage from "./UserPage/UserPage"
import ExperimentalPage from "./ExperimentalPage/ExperimentalPage"
import ReturnPage from "./ReturnPage/ReturnPage"
import Header from "./Header/Header"


import { Route, BrowserRouter } from "react-router-dom"

import Amplify from "aws-amplify"
import conf from "../aws/aws_configure"
import anonymousAuth from "../aws/authentification"

Amplify.configure(conf)

class App extends Component {
	componentWillMount() {
		this.tmpAuth()
	}

	componentWillUpdate() {
		this.tmpAuth()
	}

	tmpAuth() {
		anonymousAuth()
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div className="App-Header">
						<Route path="/" component={Header}/>
					</div>

					<div className="App-Component">
						<Route exact={true} path="/" component={TopPage}/>
						<Route path="/ad_page/:id_user/:id_ad" component={AdPage}/>
						<Route path="/ad_create" component={AdCreatePage}/>
						<Route path="/test" component = {TestPage}/>
						<Route path="/test2" component = {ExperimentalPage}/>
						<Route path="/return/:type" component = {ReturnPage}/>
						<Route path="/userpage" component = {UserPage}/>
					</div>


				</div>
			</BrowserRouter>
		)
	}
}

export default App
