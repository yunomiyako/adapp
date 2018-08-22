import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import AdPage from "../containers/AdPage/AdPage_new"
import AdCreatePage from "../containers/AdCreatePage/AdCreatePage"
import TestPage from "./TestPage/TestPage"
import ExperimentalPage from "./ExperimentalPage/ExperimentalPage"
import ReturnPage from "./ReturnPage/ReturnPage"
import Header from "./Header/Header"


import { Route, BrowserRouter } from "react-router-dom"

import Amplify from "aws-amplify"
import { Auth, API } from "aws-amplify"
//import conf from "../aws-exports"
//Amplify.configure(conf);


class App extends Component {
	componentWillMount() {
		this.tmpAuth()
	}

	componentWillUpdate() {
		this.tmpAuth()
	}

	tmpAuth() {
		const username = btoa(crypto.getRandomValues(new Uint8Array(16)))
		const password = username

		Auth.currentAuthenticatedUser().then(user => {
			console.log("signed in")
			console.log(user)
		})
			.catch(err => {
				Auth.signUp({
					username,
					password,
				})
					.then(data => {
						Auth.signIn(username, password)
							.then(user => {
								console.log("signed up")
								console.log(user)
							})
							.catch(err => console.log(err))
					})
					.catch(err => console.log(err))
			})
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
						<Route path="/ad_page" component={AdPage}/>
						<Route path="/ad_create" component={AdCreatePage}/>
						<Route path="/test" component = {TestPage}/>
						<Route path="/test2" component = {ExperimentalPage}/>
						<Route path="/return/:type" component = {ReturnPage}/>
					</div>


				</div>
			</BrowserRouter>
		)
	}
}

export default App
