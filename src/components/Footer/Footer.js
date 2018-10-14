import React , {Component}  from "react"
import style from "./Footer.css"
//import default_icon from "../../images/anonymousIcon.jpg"

import getBaseUrl from "../../Utils/getBaseUrl"

class Header extends Component {

	renderLinks() {
		const links = [
			{"url" : "https://twitter.com/adApp9" , "title" : "お問い合わせ"} , 
			{"url" : getBaseUrl() + "/terms_service" , "title" :  "利用規約"} , 
			{"url" : getBaseUrl() + "/privacypolicy" , "title" : "プライバシーポリシー"}
		]
        
		return links.map((link) => {
			return (
				<p key={link.title} className="list-unstyled">
					<a href={link.url}>{link.title}</a>
				</p>
			)
		})
	}

	render() {
        
		return (
			<div className="Footer">
				<div className={style.Footerback}>	
					<div className={style.Footer}>			
						<ul>
							{this.renderLinks()}
						</ul>		
					</div>
				</div>
			</div>
		)
	}
}

export default Header