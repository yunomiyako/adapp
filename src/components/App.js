import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import AdPage from "../containers/AdPage/AdPage"
import AdCreatePage from "../containers/AdCreatePage/AdCreatePage"
import TestPage from "./TestPage/TestPage"
import Header from "./Header/Header"

import { Route, BrowserRouter } from "react-router-dom"

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route path="/" component={Header}/>
					<Route exact={true} path="/" component={TopPage}/>
					<Route path="/ad_page" component={AdPage}/>
					<Route path="/ad_create" component={AdCreatePage}/>
					<Route path="/test" component = {TestPage}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
