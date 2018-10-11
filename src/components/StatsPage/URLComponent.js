import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./StatsPage.css"
import { Link } from "react-router-dom"
import getBaseUrl from "../../Utils/getBaseUrl"

class StatsComponent extends Component {
	render() {
		const baseUrl = getBaseUrl()
		const link = "/ad_page/" + this.props.id_user + "/" + this.props.id_ad
		return (
			<div>
				<div className={style.aaaa}><h2>宣伝ページへのリンク</h2></div>
				<h3 className={style.link_text}>
					<Link push to={link}>{baseUrl + link}</Link>
				</h3>
				
			</div>
		)
	}
}

export default StatsComponent
