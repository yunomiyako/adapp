import React , {Component}  from "react"
import style from "./TopPage2.css"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import Top_Component from "./Topcomponent"
import FeedListComponent from "../../containers/TopPage/FeedListComponent"
import NormalView from "../CommonSemanticUI/NormalView"
import Toppage_second from "./toppage_second_comp"

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

	componentDidMount() {
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
					<Top_Component/>
					<Toppage_second/>
					<div className={style.Footerback}>	
						<div className={style.Footer}>			
							<ul>
								<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">お問い合わせ</a></p>
								<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">利用規約</a></p>
								<p className="list-unstyled"><a href="https://www.google.co.jp/webhp?hl=ja&sa=X&ved=0ahUKEwiwtObcw_DcAhWFTrwKHSptBA4QPAgD">プライバシーポリシー</a></p>
							</ul>		
						</div>
					</div>
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
