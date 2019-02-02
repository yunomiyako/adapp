import React , {Component}  from "react"
import style from "./CampaignList.css"
import FeedView from "../CommonSemanticUI/CampaignFeedView"
import FeedViewPlaceHolder from "../CommonSemanticUI/FeedViewPlaceHolder"
import convertBigImageUrl from "../../Utils/convertBigImageUrl"
import getDateFromUnixTime from "../../Utils/getDateFromUnixTime"

class FeedListComponent extends Component {

	renderLink() {
		if(this.props.campaign_list) {
			return this.props.campaign_list.map((campaign) => {
				const link = "campaign/" + campaign.id_user + "/" + campaign.id_campaign
				const image_url = campaign.campaignUser.profile_image_url_https
				const image_url_big = convertBigImageUrl(image_url)
				const end_time = getDateFromUnixTime(campaign.end_time)
				const title = campaign.campaign.A.title + "が当たる！"
				const left_text = end_time + "まで"
				
				return (
					<div key={campaign.id_user+campaign.id_ad} className={style.FeedView}>
						{FeedView(link , title  , image_url_big , left_text)}
					</div>	
				)
			})
		} else {
			return (
				<React.Fragment>
					<div  className={style.FeedView}>
						{FeedViewPlaceHolder()}
					</div>
					<div  className={style.FeedView}>
						{FeedViewPlaceHolder()}
					</div>	
					<div  className={style.FeedView}>
						{FeedViewPlaceHolder()}
					</div>	
				</React.Fragment>
			) 
		}
	}


	render() {
		return(
			<div className={style.FeedListComponent}>
				{this.renderLink()}
			</div>
		)
	}
}

export default FeedListComponent