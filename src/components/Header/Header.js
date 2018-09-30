import React , {Component}  from "react"
import "./Header.css"
import logo from "../../images/logo.svg"

import { Link } from "react-router-dom"

class ContentLink {
	constructor(title, link) {
		this.title = title
		this.link = link
	}
}

const link2 = new ContentLink("宣伝作成" , "/ad_create")
const link5 = new ContentLink("ユーザページ" , "/userpage")
const contentLink = [link2 , link5]

class Header extends Component {
	renderLink() {
		return (contentLink.map(link => {
			return <Link key={link.title} to={link.link} className="item">{link.title}</Link>
		}))
	}

	render() {
		return (
			<div className="Header">
				<header className="Header-header">
					<div className="ui fixed inverted menu">
						<div className="ui container">
							<Link to="/" className="header item">
								<img className="logo" src={logo} alt="LOGO"/>
								Ad App
							</Link>
							{this.renderLink()}
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default Header
