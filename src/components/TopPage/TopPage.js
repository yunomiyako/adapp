import React , {Component}  from "react"
import style from "./TopPage2.css"
import QueryString from "../../Utils/QueryString"
import DesktopBreakpoint from "../responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../responsive_utilities/phone_breakpoint"
import Top_Component from "./Top_Desktopcomponent"
import Top_Phonecomponent from "./Top_Phonecomponent"
import Top_Tabletcomponent from "./Top_Tabletcomponent"


var oauth_verifier = QueryString.oauth_verifier

if (oauth_verifier) {
	console.log(oauth_verifier)
	//console.log(oauth_token_secret)
}


class TopPage extends Component {




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
				
			</div>
			
		)



		
	}


}





export default TopPage
