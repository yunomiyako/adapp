import React , {Component} from "react"
import { Table , Button } from "semantic-ui-react"
import style from "../AdCreatePage_new/AdCreatePage.css"
import style2 from "./CampaignCreatePage.css"

//data
import AdCreateInfoDataStructure from "../../domain/AdCreateInfoDataStructure"
import CampaignCreateDataStructure from "../../domain/campaign/CampaignCreateDataStructure";
import { replaceWord } from "../../domain/campaign/CampaingExamples";

class ConfirmComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading : false , 
			done : false
		}
	}


	shouldComponentUpdate(nextProps, nextState) {
		const keys = Object.keys(nextProps)
		for(var key of keys) {
			if (nextProps[key] !== this.props[key]) {
				return true
			}
		}
		const keys2 = Object.keys(nextState || {})
		for(key of keys2) {
			if (nextState[key] !== this.props[key]) {
				return true
			}
		}
		return false
	}

	renderOkButton() {
		const isFinished = this.props.email !== ""
		if(isFinished) {
			return <Button 
			onClick={this.onClickOk}
			loading={this.state.loading}
			disabled={this.state.loading}
			>送信</Button>
		} else {
			return <Button 
			disabled={true}
			>送信</Button>
		}

	}

	onClickOk = () => {
		this.setState({loading : true})
		//送信処理
		const callback = (response) => {
			if(response.status === "OK") {
				this.setState({loading : false})
				//TODO : どっかのページに飛ばそう
				this.setState({
					done : true
				})
				this.props.clearState()
			} else {
				this.setState({loading : false})
			}
		}

		//送信データ
		const payload = new CampaignCreateDataStructure(this.props)
		this.props.onClickSubmit(payload , callback)
	}

	renderTableCell(data) {
		return data.map( (d , index) => {
			return (
			<Table.Row key={d.title + d.content + index} negative={d.negativeFrag}>
				<Table.Cell width="4">{d.title}</Table.Cell>
				<Table.Cell width="6">{d.content}</Table.Cell>
			</Table.Row>
			)
		})
	}

	createCampaignData() {
		const campaign_data = []
		this.props.campaigns.map(c => {
			campaign_data.push(
				{
					title : "賞品",
					content : c.title + " " + c.people + "名様" , 
					negativeFrag : c.title  === "" || c.people <= 0
				}
			)
		})

		campaign_data.push(
			{
				title : "外れの際に送信するメッセージ",
				content : this.props.missText, 
				negativeFrag : this.props.missText  === "" 
			}
		)

		this.props.campaigns.map(c => {
			const replacedMessage = c.message.replace(replaceWord , c.title)
			campaign_data.push(
				{
					title : c.title + "当選時のメッセージ",
					content : replacedMessage , 
					negativeFrag : replacedMessage  === ""
				}
			)
		})

		return campaign_data
	}

	onClickToTopPage() {
		window.location.href = "/"
	}

	render() {
		if(this.state.done) {
			console.log("are?")
			return (
				<div className={style2.doneResultFrame}>
				 	<div className={style2.doneResultInner}>
					 <div>
							<h2>数日中にメールにて返信いたします。しばらくお待ちください。</h2>
							<Button onClick={()=>this.onClickToTopPage()} size='big'>
								トップページへ戻る
							</Button>
						</div>
					</div>
				</div>
			)
		}

		const campaign_data = this.createCampaignData()
		const detail_data = [
			{
				title : "キャンペーン期間",
				content : this.props.campaignInterval + "日間" , 
				negativeFrag : this.props.campaignInterval === ""
			} , 
			{
				title : "キャンペーンツイート文面(仮)",
				content : this.props.tweetObject.text , 
				negativeFrag :  this.props.tweetObject.text === ""
			} , 
			{
				title : "ツイートに添付する画像の枚数",
				content : this.props.tweetObject.images.length + "枚", 
				negativeFrag : false
			} , 
			{
				title : "お名前",
				content : this.props.name, 
				negativeFrag :  this.props.name === ""
			} , 
			{
				title : "メールアドレス(返信用)",
				content : this.props.email, 
				negativeFrag :  this.props.email === ""
			} , 
			{
				title : "備考",
				content : this.props.notes, 
				negativeFrag :  false
			} , 
		]

		return (
			<div className="AdCreatePage-ComponentFrame">

				<Table definition color="blue">
					<Table.Body>
						{this.renderTableCell(campaign_data)}
					</Table.Body>
				</Table>

				<Table definition color="red">
					<Table.Body>
						{this.renderTableCell(detail_data)}
					</Table.Body>
				</Table>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>
			</div>
		)
	}
}

export default ConfirmComponent
