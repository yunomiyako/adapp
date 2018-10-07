import React , {Component}  from "react"
import style from "./UserPage.css"
import { Button , Icon } from "semantic-ui-react"

import AdComponent from "../../containers/UserPage/AdComponent"
import RewardComponent from "../../containers/UserPage/ReturnComponent"
import UserCard from "../CommonSemanticUI/UserCard"
import loginCheck from "../../localStorage/loginCheck"
import goTwitterLogin from "../../Utils/goTwitterLogin"
import { get_id_user, get_userdetail } from "../../localStorage/user_detail"


class UserPage extends Component {


	renderUserPage() {
		if(loginCheck()) {
			console.log("ここ呼ばれててほしい")
			const user_detail = get_userdetail()
			const id_user = get_id_user()
			console.log(user_detail)
			return (
				<div className={style.UserPage}>
					<div className={style.UserPageContainer}>

						<div className = {style.UserCard}>
							<UserCard
								user_detail={user_detail}
							/>
						</div>

						<div>
							<AdComponent
								id_user = {id_user}
								shouldGoStat = {true}
							/>
						</div>

						<div>
							<RewardComponent/>
						</div>
					
					</div>
				</div>

			)
		} else {
			return (
				<div className={style.introduceLoginFrame}>
				 	<div className={style.introduceLoginInner}>
					 <div>
							<h2>ログインをすると使えるようになります</h2>
							<Button onClick={()=>this.goTwitterLogin()} color='twitter' size='big'>
								<Icon name='twitter' /> 登録・ログイン
							</Button>
						</div>
					</div>
				</div>
			)
		}
	}

	goTwitterLogin() {
		goTwitterLogin("/userpage")
	}

	render() {
		return (
			<div>
				{this.renderUserPage()}
			</div>
		)
	}
}

export default UserPage
