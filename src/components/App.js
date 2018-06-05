import React , {Component}  from "react"
import "./App.css"

import TopPage from "./TopPage/TopPage"
import Header from "./Header/Header"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<TopPage/>
			</div>
		)
	}
}

export default App
