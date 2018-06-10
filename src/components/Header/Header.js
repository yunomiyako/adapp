import React , {Component}  from "react"
import logo from "../../images/logo.svg"
import "./Header.css"

import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className="App">
				<header className="Header-header">
					<img src={logo} className="Header-logo" alt="logo" />
					<h1 className="Header-title">
						<Link to="/welcome">Welcome </Link>
						<Link to="/to">to </Link>
						<Link to="/react">React</Link>
					</h1>
				</header>
			</div>
		)
	}
}

export default Header
