import React , {Component}  from "react"
import style from "./TopPage2.css"
import QueryString from "../../Utils/QueryString"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import Top_Component from "./Top_Desktopcomponent"
import Top_Phonecomponent from "./Top_Phonecomponent"
import Top_Tabletcomponent from "./Top_Tabletcomponent"

import fetchAdList from "../../api/fetchAdList"
import FeedView from "../CommonSemanticUI/FeedView"
import {get_access_token , twitter_logout} from "../../localStorage/twitter_access_token"

class TopPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			adList : []
		}
	}

	componentWillMount() {
		this.getAdList()
		this.loginCheck()
	}

	loginCheck() {
		//localにアクセストークンがあればログインしている
		if(get_access_token()) {
			return true
		}else {
			return false
		}
	}

	logout() {
		twitter_logout()
		//TODO : 再読み込み
	}

	async getAdList() {
		const adList = await fetchAdList()
		this.setState({
			adList : adList
		})
	}

	renderLink() {
		return this.state.adList.map(ad => {
			const link = "ad_page/" + ad.id_user + "/" + ad.id_ad
			const adObject = ad
			return (
				<div key={ad.id_user+ad.id_ad}>
					{FeedView(link , adObject)}
				</div>
			
			)
		})
	}

	render() {
		return (


			<div className={style.TopPage0}>
				
				<DesktopBreakpoint>	
				 <Top_Component/>
				</DesktopBreakpoint>
				
				<PhoneBreakpoint>	
				 <Top_Phonecomponent/>
				</PhoneBreakpoint>
				
				
				<TabletBreakpoint>	
				 <Top_Tabletcomponent/>
				</TabletBreakpoint>
				
				{this.renderLink()}

			</div>
			
		)



		
	}


}





export default TopPage
