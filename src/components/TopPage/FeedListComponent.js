import React , {Component}  from "react"
import style from "./TopPage.css"
import FeedView from "../CommonSemanticUI/FeedView"
import FeedViewPlaceHolder from "../CommonSemanticUI/FeedViewPlaceHolder"
class FeedListComponent extends Component {
	componentDidMount() {
		this.getAdList()
	}

	getAdList() {
		this.props.getAdList()
	}

	renderLink() {
		if(this.props.ad_list.length > 0) {
			return this.props.ad_list.map((ad) => {
				const link = "ad_page/" + ad.id_user + "/" + ad.id_ad
				const adObject = ad
				const url = ad.url
				return (
					<div key={ad.id_user+ad.id_ad} className={style.FeedView}>
						{FeedView(link , adObject  , url)}
					</div>	
				)
			})
	
		} else {
			console.log("is it called?")
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