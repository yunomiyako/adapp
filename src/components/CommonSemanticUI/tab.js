import React , {Component}  from "react"
import { Tab } from "semantic-ui-react"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import FeedView from "../CommonSemanticUI/FeedView"
import style from "../AllAd/AllAd.css"
import FeedViewPlaceHolder from "../CommonSemanticUI/FeedViewPlaceHolder"

class TabComponent extends Component {

	onChangeTab(tabNum){
		
		this.props.onChangeTab(tabNum)

	}

	getFeedView(){

		

		if(this.props.focused_ad_list.length > 0) {
		
			
				
			return this.props.focused_ad_list.map((ad) => {
				const link = "ad_page/" + ad.id_user + "/" + ad.id_ad
				const adObject = ad
				const url = ad.url
				return (
					
					<div key={ad.id_user+ad.id_ad} className={style.FeedView}>
						{FeedView(link , adObject  , url)}
					</div>	
					
				)
			})
		}
		
	}

	createpanes(){
		const adTypeList = AdTypeEnum.getEnums()

		const panes = adTypeList.map( data => {
			return ({menuItem: data.short_title , render : () => 
				<Tab.Pane>
				
					{this.getFeedView()}
					{//FeedViewPlaceHolder()
					}
					{//FeedViewPlaceHolder()
					}

				</Tab.Pane>})
		})
		
		return panes

	}

	render() {
		
		return (
			<Tab panes={this.createpanes()} onTabChange ={(e, data) => this.onChangeTab(data.activeIndex)} />
				
		)
	}
}
export default TabComponent