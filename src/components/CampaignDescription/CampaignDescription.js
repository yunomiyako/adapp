import React , {Component}  from "react"
import style from "./CampaignDescription.css"
import { } from "semantic-ui-react"
import NormalView from "../CommonSemanticUI/NormalView"

class CampaignDescription extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	renderMerit() {
		const title = "どんな人に使ってもらいたい？"
		const ls = [
			{key: 1 , text : "宣伝したいことがある"} , 
			{key: 2 , text : "お金をかけずにTwitterで宣伝したい"} , 
			{key: 3 , text : "「クラウドアドバタイジング」を試してみたい"} , 
			{key: 4 , text : "他の人にツイートしてもらいたいことがある"} , 
			{key: 5 , text : "リツイートしてもらいたいツイートがある"} , 
			{key: 6 , text : "たくさんの人にフォローしてもらいたい"} , 
			{key: 7 , text : "いいねしてもらいたいツイートがある"} , 
			{key: 8 , text : "ただただ見てほしいことがある"} ]

		return <NormalView
			title = {title}
			ls = {ls} />
	}


	render() {
		return (
			<div className={style.CampaignDescriptionPage}>
				<div className={style.CampaignDescriptionPageContainer}>
					<h1>プレセントキャンペーンを開きませんか？</h1>
					{this.renderMerit()}
				</div>
			</div>
		)
	}
}

export default CampaignDescription
