import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import Header from "./Header/Header"

import { Route, BrowserRouter } from "react-router-dom"
import { C_Welcome, C_To, C_React } from "./welcometoreact"

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route path="/" component={Header}/>
					<Route path="/" component={TopPage}/>
					<Route path="/welcome" component={C_Welcome}/>
					<Route path="/welcome/to" component={C_To}/>
					<Route path="/welcome/to/react" component={C_React}/>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
