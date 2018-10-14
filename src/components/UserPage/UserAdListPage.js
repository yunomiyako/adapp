import React , {Component}  from "react"
import style from "./UserPage.css"
import { } from "semantic-ui-react"

import AdComponent from "../../containers/UserPage/AdComponent"
import UserCard from "../CommonSemanticUI/UserCard"
import fetchUserDetail from "../../api/fetchUserDetail";
import UserDetailDataStructure from "../../domain/UserDetailDataStructure";


class UserAdListPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user_detail : new UserDetailDataStructure({})
		}
	}

	componentDidMount(){
		//再描画の時では呼ばれない
		this.fetchUserDetail()
	}

	async fetchUserDetail() {
		const id_user = this.props.match.params.id_user
		const user_detail = await fetchUserDetail(id_user , false)
		this.setState(
			{user_detail}
		)
	}

	renderUserPage() {
		return (
			<div className={style.UserPage}>
				<div className={style.UserPageContainer}>

					<div className = {style.UserCard}>
						<UserCard
						user_detail = {this.state.user_detail}/>
					</div>

					<div>
						<AdComponent
						id_user = {this.props.match.params.id_user}/>
					</div>

					<br/><br/><br/>
					<br/><br/><br/>
				</div>
			</div>
		)
		
	}

	render() {
		return (
			<div>
				{this.renderUserPage()}
			</div>
		)
	}
}

export default UserAdListPage
