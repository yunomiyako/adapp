import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./UserPage.css"

import { Link } from "react-router-dom"

import fetchAdList from "../../api/fetchAdList"
import {get_id_user} from "../../localStorage/user_detail"
import getDateFromUnixTime from "../../Utils/getDateFromUnixTime"
class AdComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ad_list : []
		}
	}

	componentWillMount() {
		this.getAdList()
	}

	async getAdList() {
		const id_user = get_id_user()
		const ad_list = await fetchAdList({id_user : id_user})
		ad_list.map((ad) => {
			ad.link = "/statspage/" + ad.id_user + "/" + ad.id_ad
			ad.date = getDateFromUnixTime(ad.created_at)
		})
        this.setState({
			ad_list : ad_list
		})
	}

	renderTitle(items) {
		return items.map(_item => {
			return (
				<div className ={style.ContentFrame} key={_item.title}>
					<div className ={style.ContentFrameTitle}>
						<h2><Link to={_item.link}>{_item.title}</Link></h2>
					</div>
					<div className ={style.ContentFrameDate}>
						<h4>{_item.date}</h4>
					</div>
				</div>
			)}
		)
	}

	render() {
		return (
			<div className={style.AdComponent}>
				<div className={style.aaaa}><h2>作成した宣伝</h2></div>
				{this.renderTitle(this.state.ad_list)}
			</div>
		)
	}
}

export default AdComponent
