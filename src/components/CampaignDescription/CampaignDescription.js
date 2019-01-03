import React , {Component}  from "react"
import style from "./CampaignDescription.css"
import { } from "semantic-ui-react"
import NormalView from "../CommonSemanticUI/NormalView"
import ButtonMenuComponent from "../TopPage/ButtonMenuComponent"
import InquiryForm from "../TopPage/InquiryForm"

class CampaignDescription extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	renderWhatIs() {
		const title = "何ができるの？"
		const ls = [
			{key: 1 , text : "RTしたらすぐに結果が届く(本当にすぐです！）"} , 
			{key: 2 , text : "Amazonギフト券の送付まで全部自動！"} , 
			{key: 3 , text : "当選者、外れた人の一覧が見れて安心！（一言メッセージもつけられる！）"} , 
			{key: 4 , text : "不正なアカウントの排除(捨て垢判定機能)"} , 
		]

		return <NormalView
			title = {title}
			ls = {ls} />
	}

	renderMerit() {
		const title = "キャンペーンに参加する人のメリットは？"
		const ls = [
			{key: 1 , text : "Follow & RTだけで応募が簡単"} , 
			{key: 2 , text : "結果がすぐに来て嬉しい"} , 
			{key: 3 , text : "抽選をあどあっぷが行うため不正防止になる"} , 
			{key: 4 , text : "誰が当選したかHPから分かるので安心"} , 
			{key: 5 , text : "不正アカウントを排除しているので公平"}
		]

		return <NormalView
			title = {title}
			ls = {ls} />
	}

	renderMerit2() {
		const title = "キャンペーンを開く人のメリットは？"
		const ls = [
			{key: 1 , text : "開催、結果通知、ギフト券の用意、そして配布まで全部お任せ"} , 
			{key: 2 , text : "Follow & RT & 結果がすぐくるキャンペーンを開ける"} , 
			{key: 3 , text : "フォロワーが増える！！！"} , 
			{key: 4 , text : "キャンペーンツイートに宣伝も載せられる"} , 
			{key: 5 , text : "抽選をあどあっぷが行うので信頼される"} , 
			{key: 6 , text : "不正なアカウント(キャンペーンのためだけのアカウントや複数アカウント）への対応"} , 
			{key: 7 , text : "応募した人のリストの管理が行える"}
		]

		return <NormalView
			title = {title}
			ls = {ls} />
	}

	onClickGoForm() {
		//一番下にスクロール
		this.InquiryForm.scrollIntoView({ behavior: "smooth" })
	}

	renderButtonMenu() {
		const menus = [
			{
				id : 0 , 
				name : "とりあえず話を聞く" , 
				color : "orange" , 
				onClick : () => this.onClickGoForm() , 
				link : "/campaign_description"
			} , 
			{
				id : 1 , 
				name : "作りたいキャンペーンイメージを送る" , 
				color : "red" , 
				onClick : () => null , 
				link : "/campaign_create"
			} 
		]
		
		return (
			<div className={style.buttonMenuFrame}>
				<h2>興味のある方は以下のルートからご連絡ください</h2>
				<ButtonMenuComponent
					menus = {menus}/>
			</div>
		)
	}



	render() {
		return (
			<div className={style.CampaignDescriptionPage}>
				<div className={style.CampaignDescriptionPageContainer}>
					<h1>プレセントキャンペーンを開きませんか？</h1>

					<div className={style.NormalViewFrame}>
						{this.renderWhatIs()}
					</div>

					<div className={style.NormalViewFrame}>
						{this.renderMerit2()}
					</div>

					<div className={style.NormalViewFrame}>
						{this.renderMerit()}
					</div>
					
					<div>
						{this.renderButtonMenu()}
					</div>

					<div
						ref={(ref) => this.InquiryForm = ref}  
						className = {style.InquiryFormFrame}>
						<InquiryForm/>
					</div>


					<br/>
					<br/><br/><br/>
					<br/><br/><br/><br/>
					<br/><br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default CampaignDescription
