
import React , {Component}  from "react"
import style from "./AfterLoginPage.css"
import {twitter_logout } from "../../localStorage/twitter_access_token"
import {Button} from "semantic-ui-react"
import { Link } from "react-router-dom"
import fetchRandomAdData from "../../api/fetchRandomAdData"
class ButtonMenuComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomAdResponse: null
		}
	}


	logout() {
		twitter_logout()
		window.location.href = "/"
	}


	async onClickRandomAd() {
		const res = await fetchRandomAdData()
		this.props.history.push("/ad_page/" + res.id_user + "/" + res.id_ad )
	}
    
	renderButtons() {
		const menus = this.props.menus || [
			{
				id : 0 , 
				name : "宣伝を作る" , 
				color : "orange" , 
				onClick : () => null , 
				link : "/ad_create"
			} , 
			{
				id : 1 , 
				name : "作った宣伝の様子を見る" , 
				color : "green" , 
				onClick : () => null , 
				link : "/userpage"
			} , 
            
			{
				id : 2 , 
				name : "他の宣伝を見る(ランダム)" , 
				color : "blue" , 
				onClick : () => this.onClickRandomAd(), 
				link : "/"
			} ,
			{
				id : 3 , 
				name : "宣伝一覧を見る" , 
				color : "red" , 
				onClick :() => null, 
				link : "/all_ad"
			} ,
			
			{
				id : 4 , 
				name : "ログアウト" , 
				color : "black" , 
				onClick : () => this.logout(), 
				link : "/"
			}
		]
		return menus.map((menu) => {
			return (
				<div
					key = {menu.id}
					className={style.button}>

					<Link to={menu.link}>
						<Button 
							key = {menu.id}
							basic
							fluid
							color={menu.color}
							size="massive"
							onClick={menu.onClick}>
						
							{menu.name}
						
						</Button>
					</Link>
				</div>


			)
		})
	}

	render() {
		return(
			<div className>
				{this.renderButtons()}
			</div>
		)
	}
}

export default ButtonMenuComponent
