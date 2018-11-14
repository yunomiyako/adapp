
import React , {Component}  from "react"
import style from "./AfterLoginPage.css"
import FeedListComponent from "../../containers/TopPage/FeedListComponent"
import { twitter_logout  } from "../../localStorage/twitter_access_token"
import {} from "semantic-ui-react"
import  ButtonMenuComponent from "./ButtonMenuComponent"

class AfterLoginPage extends Component {

	logout() {
		twitter_logout()
		//TODO : 再読み込み
		window.location.href = "/"
	}
    
	render() {
		return(
			<div className={style.LoginedTopPage}>
				<div className={style.LoginedTopPageContainer}>
                
					<div className={style.dotLine}><h2>メニュー</h2></div>
					<div className={style.ButtonMenuComponent}>
						<ButtonMenuComponent
							history = {this.props.history}
						/>
					</div>
					<div className={style.dotLine}><h2>最近作成された宣伝</h2></div>
					<FeedListComponent/>
				</div>
			</div>
		)
	}
}

export default AfterLoginPage
