import React , {Component}  from "react"
import style from "./Header.css"
//import default_icon from "../../images/anonymousIcon.jpg"

import { Link } from "react-router-dom"
import { get_userdetail } from "../../localStorage/user_detail"
import {  Image , Icon } from "semantic-ui-react"


class ContentLink {
	constructor(title, link , icon_url) {
		this.title = title
		this.link = link
		this.icon_url = icon_url
	}
}

class Header extends Component {

	
	renderLink() {
		const user_detail = get_userdetail()
		const icon_url = user_detail ? user_detail.profile_image_url : undefined
		const link3 = new ContentLink("使い方" , "/explanation" , undefined)
		const link2 = new ContentLink("宣伝作成" , "/ad_create" , undefined)
		const link5 = new ContentLink("ユーザページ" , "/userpage" , icon_url )
		const contentLink = [ link3]

		return (contentLink.map(link => {
			return (
				<Link className="item" push="true" key={link.title} to={link.link}>
					{link.icon_url ? <div className={style.icon}><Image src={link.icon_url} size='mini' circular /></div> : ""}
					{link.title}
				</Link>
			)
		}))
	}

	render() {
		return (
			<div className="Header">
				<header className="Header-header">
					<div className="ui fixed inverted menu">
						<div className="ui container">
							<Link push="true" to="/" className="header item">
								<Icon name="bullhorn" color="orange"></Icon>
								あどあっぷ
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
