import React , {Component}  from "react"
import style from "./TopPage2.css"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import Top_Component from "./Top_Desktopcomponent"
import Top_Phonecomponent from "./Top_Phonecomponent"
import Top_Tabletcomponent from "./Top_Tabletcomponent"
import NormalView from "../CommonSemanticUI/NormalView"

import loginCheck from "../../localStorage/loginCheck"

import AfterLoginPage from "./AfterLoginPage"
class TopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			logined : false
		}
	}

	componentDidMount() {
		if(loginCheck()) {
			this.setState({
				logined : true
			})
		}
	}

	render() {

		if(!this.state.logined) {
			return (
				<div >
					<DesktopBreakpoint>	
				 	　<Top_Component/>
					</DesktopBreakpoint>
				
					<PhoneBreakpoint>	
				 	　<Top_Phonecomponent/>
					</PhoneBreakpoint>
				
					<TabletBreakpoint>	
				      <Top_Tabletcomponent/>
					</TabletBreakpoint>
					<NormalView/>
				</div>
			)
		} else {
			return (
				<AfterLoginPage/>
			)
		}
	}
}

export default TopPage
