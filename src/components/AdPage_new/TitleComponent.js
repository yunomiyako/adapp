import React , {Component}  from "react"
import {} from "semantic-ui-react"
import style from "./AdPage.css"

import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"


class ActionComponent extends Component {
	renderUserName() {
		if(this.props.username) {
			return (				<div className ={style.username_frame}>
				<p className={style.username}>by @{this.props.username}</p>
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

export default ActionComponent
