import React , {Component}  from "react"
import { Tab } from "semantic-ui-react"
import FeedView from "../CommonSemanticUI/FeedView"
import style from "../AllAd/AllAd.css"

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

	createpanes(columns){
		const panes = columns.map( column => {
			return ({menuItem: column , render : () => 
				<Tab.Pane>
					{this.getFeedView()}
				</Tab.Pane>})
		})
		
		return panes

	}

	render() {
		
		return (
			<Tab 
				menu={{ fluid: true, vertical: true, tabular: true }} 
				panes={this.createpanes(this.props.columns)} 
				onTabChange ={(e, data) => this.onChangeTab(data.activeIndex)} />
				
		)
	}
}
export default TabComponent