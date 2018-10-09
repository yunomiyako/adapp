import React , {Component}  from "react"
import style from "./TopPage2.css"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import Top_Component from "./Topcomponent"
import FeedListComponent from "../../containers/TopPage/FeedListComponent"
import NormalView from "../CommonSemanticUI/NormalView"
import Toppage_second from "./toppage_second_comp"
import Toppage_show_example from "./Toppage_show_example"
import Toppage_show_example2 from "./Toppage_show_example2"
import loginCheck from "../../localStorage/loginCheck"
import AfterLoginPage from "./AfterLoginPage"
import fetchExampleAds from "../../api/fetchExampleAds"
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
		} else {
			this.loadExampleAd()
		}
	}

	loadExampleAd() {
		fetchExampleAds().then((exampleAds) => {
			
			console.log(exampleAds)
		})
	}

	render() {

		if(!this.state.logined) {
			return (
				<div >
					<Top_Component/>
					<Toppage_second/>
					
					<Toppage_show_example/>
					<Toppage_show_example2/>
					
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
				<AfterLoginPage
					history = {this.props.history}
				/>
			)
		}
	}
}

export default TopPage
