import React , {Component}  from "react"
import style from "./TopPage.css"
import fetchAdList from "../../api/fetchAdList"
import FeedView from "../CommonSemanticUI/FeedView"
import getUrlsFromKeys from "../../Utils/getUrlsFromKeys";
class TopPage extends Component {
    componentWillMount() {
        this.getAdList()
    }

	async getAdList() {
        //TODO : できたらちゃんとsagaで呼ぶ
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

export default TopPage