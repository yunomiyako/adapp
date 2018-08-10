import React , {Component}  from "react"
import style from "./TopPage.css"
import { Button, Icon } from 'semantic-ui-react'
import {Api} from "../../api/Api"



class TopPage extends Component {

	onClicktest() {
		Api.testtm()
		//console.log(Api.testtm())
	}


	render() {
		return (
			<div className= {style.TopPage}>
				<h3 className={style.text1}>Ad app</h3>
				<div className= {style.twitter_button}>
					<Button onClick={()=>this.onClicktest()} color='twitter' size='massive'>
						<Icon name='twitter' /> Twitter 
					</Button>
					</div>
				<div className= {style.login_button}>
					<Button color='black'size='massive'>Login</Button >
						
				</div>
				

			</div>

		)
	}
}



export default TopPage
