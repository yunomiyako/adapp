import React , {Component}  from "react"
import style from "./TopPage2.css"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import Top_Component from "./Top_Desktopcomponent"
import Top_Phonecomponent from "./Top_Phonecomponent"
import Top_Tabletcomponent from "./Top_Tabletcomponent"
import FeedListComponent from "../../containers/TopPage/FeedListComponent"

import {twitter_logout ,get_access_token } from "../../localStorage/twitter_access_token"
import loginCheck from "../../localStorage/loginCheck"

import {Button} from "semantic-ui-react"
import { get_id_user } from "../../localStorage/user_detail"

class TopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			logined : false
		}
	}

	componentWillMount() {
		if(loginCheck()) {
			this.setState({
				logined : true
			})
		}
	}

	logout() {
		twitter_logout()
		//TODO : 再読み込み
		window.location.href = "/"
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
				</div>
			)
		} else {
			return (
				<div className={style.LoginedTopPage}>
					ようこそ : {get_id_user()} <br/>
					アクセストークン : {get_access_token()} <br/>
					<Button onClick={() => this.logout()}>ログアウト</Button>
					<div className={style.aaaa}><h2>最近作成された宣伝</h2></div>
					<FeedListComponent/>
				</div>
			)
		}
	}
}

export default TopPage
