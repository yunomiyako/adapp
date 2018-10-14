import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./StatsPage.css"
import { Link } from "react-router-dom"
import getBaseUrl from "../../Utils/getBaseUrl"

class StatsComponent extends Component {
	render() {
		const baseUrl = getBaseUrl()
		const link = "/ad_page/" + this.props.id_user + "/" + this.props.id_ad
		const query = "?type=ad_page&id_user=" + this.props.id_user + "&id_ad=" + this.props.id_ad
		return (
			<div>
				<div className={style.aaaa}><h2>宣伝ページへのリンク</h2></div>
				<h3 className={style.link_text}>
					<Link push to={link}>{baseUrl + query}</Link>
				</h3>
				<form class="ui form">
					<div class="field">
						<input type="text" value={baseUrl + query}/>
					</div>
				</form>				
			</div>
		)
	}
}

export default StatsComponent
