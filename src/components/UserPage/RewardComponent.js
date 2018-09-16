import React , {Component}  from "react"
import {  } from "semantic-ui-react"
import style from "./UserPage.css"

import { Link } from "react-router-dom"

class RewardComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			return_list : []
		}
	}

	componentWillMount() {
		this.props.getReturnList()
	}

	renderReward(items) {
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
			<div className={style.RewardComponent}>
				<div className={style.aaaa}><h2>受け取った見返り</h2></div>
				{this.renderReward(this.props.return_list)}
			</div>
		)
	}
}

export default RewardComponent
