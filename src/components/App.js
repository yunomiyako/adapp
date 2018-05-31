import React , {Component}  from "react"
import logo from "../images/logo.svg"
import "../css/App.css"

import { Button } from "semantic-ui-react"

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. <br/>
					<Button>Click Here</Button>
				</p>
			</div>
		)
	}
}

export default App
