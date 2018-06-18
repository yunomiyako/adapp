import React , {Component}  from "react"
import "./Header.css"
import logo from "../../images/logo.svg"

import { Link } from "react-router-dom"

class Header extends Component {
	render() {
		return (
			<div className="App">
				<header className="Header-header">
					<div className="ui fixed inverted menu">
						<div className="ui container">
							<Link to="/" className="header item">
								<img className="logo" src={logo}/>
								Ad App
							</Link>
							<Link to="/ad_page" className="item">アド</Link>
							<Link to="/ad_create" className="item">アド作成</Link>


							<div className="ui simple dropdown item">
								Dropdown <i className="dropdown icon"></i>
								<div className="menu">
									<a className="item" href="#">Link Item</a>
									<a className="item" href="#">Link Item</a>
									<div className="divider"></div>
									<div className="header">Header Item</div>
									<div className="item">
										<i className="dropdown icon"></i>
										Sub Menu
										<div className="menu">
											<a className="item" href="#">Link Item</a>
											<a className="item" href="#">Link Item</a>
										</div>
									</div>
									<a className="item" href="#">Link Item</a>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default Header
