import React , {Component}  from "react"
import {} from "semantic-ui-react"
import style from "./AdPage.css"

import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"


class TitleComponent extends Component {
	//TODO 個別ユーザページができたらそれに差し替える
	renderUserLink(screen_name) {
		if(screen_name) {
			return (
				<span>
				by
					<a href={"https://www.twitter.com/" + screen_name} >
				@{screen_name}
					</a>
				</span>
			)
		}
	}

	renderUserName() {
		const user_detail = this.props.user_detail
		if(user_detail) {
			return (
				<div className ={style.username_frame}>
					<p className={style.username}> { this.renderUserLink(user_detail.screen_name) }</p>
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
