import React , {Component}  from "react"
import style from "./UserPage.css"

import AdComponent from "./AdComponent"
import RewardComponent from "./RewardComponent"

class UserPage extends Component {
	render() {
		return (
			<div className={style.UserPage}>
				<div className={style.UserPageContainer}>
					<div>
						<AdComponent/>
					</div>

					<div>
						<RewardComponent/>
					</div>

					<br/>
					<br/><br/>
					<br/><br/><br/>
					<br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default UserPage