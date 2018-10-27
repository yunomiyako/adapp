import React , {Component}  from "react"
import { Loader  , Image } from "semantic-ui-react"
import style from "./UserPage.css"

import { Link } from "react-router-dom"
import getDateFromUnixTime from "../../Utils/getDateFromUnixTime"
import paragraph from "../../images/paragraph.png"

class AdComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ad_list : []
		}
	}


	componentDidMount() {
		//再描画の時に呼ばれない
		if(this.props.id_user) {
			this.props.getAdList(this.props.id_user)
		}
	}

	renderTitle(items) {
		if(this.props.loading) {
			return (
				<div className ={style.ContentFrame}>
					<Loader active />
					<Image src={paragraph} />
			  </div>
			)
		}
		return items.map(_item => {
			if(this.props.shouldGoStat) {
				_item.link = "/statspage/"  + _item.id_ad
			} else {
				_item.link = "/ad_page/" + this.props.id_user +  "/" + _item.id_ad
			}
			
			_item.date = getDateFromUnixTime(_item.created_at)
			return (
				<div className ={style.ContentFrame} key={_item.title}>
					<div className ={style.ContentFrameTitle}>
						<h2><Link push to={_item.link}>{_item.title}</Link></h2>
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
				{this.renderTitle(this.props.ad_list)}
			</div>
		)
	}
}

export default AdComponent
