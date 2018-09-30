import React , {Component}  from "react"
import style from "./TopPage.css"
import FeedView from "../CommonSemanticUI/FeedView"
class FeedListComponent extends Component {
    componentDidMount() {
        this.getAdList()
    }

	async getAdList() {
        this.props.getAdList()
	}

	renderLink() {
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
	}


	render() {
        return(
            <div className={style.FeedListComponent}>
                {this.renderLink()}
            </div>
        );
	}
}

export default FeedListComponent