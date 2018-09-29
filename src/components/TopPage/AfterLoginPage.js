
import React , {Component}  from "react"
import style from "./AfterLoginPage.css"
import FeedView from "../CommonSemanticUI/FeedView"
import FeedListComponent from "../../containers/TopPage/FeedListComponent"
import {twitter_logout ,get_access_token } from "../../localStorage/twitter_access_token"
import {Button} from "semantic-ui-react"
import { get_id_user } from "../../localStorage/user_detail"
import  ButtonMenuComponent from "./ButtonMenuComponent"

class AfterLoginPage extends Component {
    componentDidMount() {
        this.getAdList()
    }

    logout() {
		twitter_logout()
		//TODO : 再読み込み
		window.location.href = "/"
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
            <div className={style.LoginedTopPage}>
                <div className={style.LoginedTopPageContainer}>
                
                <div className={style.dotLine}><h2>メニュー</h2></div>
                    <div className={style.ButtonMenuComponent}>
                    <ButtonMenuComponent/>
                    </div>
                    <div className={style.dotLine}><h2>最近作成された宣伝</h2></div>
                    <FeedListComponent/>
                </div>
            </div>
        )
	}
}

export default AfterLoginPage
