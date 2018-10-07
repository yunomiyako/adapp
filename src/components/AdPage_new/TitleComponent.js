import React , {Component}  from "react"
import {} from "semantic-ui-react"
import style from "./AdPage.css"
import { Link } from "react-router-dom"

import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"


class TitleComponent extends Component {
	renderUserLink(screen_name , id_user) {
		if(screen_name) {
			return (
				<span>
				by
					<Link push to={"/ad_page/" + id_user}>@{screen_name}</Link>	
				</span>
			)
		}
	}

	renderUserName() {
		const user_detail = this.props.user_detail
		if(user_detail) {
			return (
				<div className ={style.username_frame}>
					<p className={style.username}> { this.renderUserLink(user_detail.screen_name , user_detail.id_user) }</p>
				</div>)
		}
	}

	render() {
		return (
			<div>
				<DesktopBreakpoint>
					<h1 className={style.title}>{this.props.title}</h1>
				</DesktopBreakpoint>
				<TabletBreakpoint>
					<h2 className={style.title}>{this.props.title}</h2>
				</TabletBreakpoint>
				<PhoneBreakpoint>
					<h3 className={style.title}>{this.props.title}</h3>
				</PhoneBreakpoint>

				{this.renderUserName()}
			</div>
		)
	}
}

export default TitleComponent
