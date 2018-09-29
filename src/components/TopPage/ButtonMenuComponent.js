
import React , {Component}  from "react"
import style from "./AfterLoginPage.css"
import {twitter_logout } from "../../localStorage/twitter_access_token"
import {Button} from "semantic-ui-react"

class ButtonMenuComponent extends Component {
	logout() {
		twitter_logout()
		window.location.href = "/"
	}
    
	renderButtons() {
		const menus = [
			{
				id : 0 , 
				name : "宣伝を作る" , 
				color : "green" , 
				onClick : () => null
			} , 
			{
				id : 1 , 
				name : "進捗を見る" , 
				color : "orange" , 
				onClick : () => null
			} , 
            
			{
				id : 2 , 
				name : "他の宣伝を見る(ランダム)" , 
				color : "brown" , 
				onClick : () => null
			}
		]
		return menus.map((menu) => {
			return (
				<div
					key = {menu.id}
					className={style.button}>

					<Button 
						key = {menu.id}
						basic
						fluid
						color={menu.color}
						size="massive"
						onClick={menu.onClick}>
						{menu.name}
					</Button>
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
