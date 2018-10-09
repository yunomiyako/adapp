import React , {Component} from "react"
import { Table , Button } from "semantic-ui-react"
import style from "./AdCreatePage.css"
//Components
import {redirectToAdPage} from "../Redirect/redirect"

//data
import ReturnTypeEnum from "../../domain/enum/ReturnTypeEnum"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import AdCreateInfoDataStructure from "../../domain/AdCreateInfoDataStructure"
import goTwitterLogin from "../../Utils/goTwitterLogin";

class ConfirmComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id_ad : "" , 
			id_user : "" , 
			loading : false
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


	componentDidUpdate(prevProps){
		const name =
			this.constructor.displayName || this.constructor.name || "Component"
		console.group(name)
		Object.keys(prevProps).forEach(key => {
			if (prevProps[key] !== this.props[key]) {
				console.log(
					`property ${key} changed from ${prevProps[key]} to ${
						this.props[key]
					}`
				)
			}
		})
		console.groupEnd(name)
	}

	getReturnTypeTitle() {
		const value =ReturnTypeEnum.getByName(this.props.returnType)
		return value.title
	}

	getAdTypeTitle(){
		const value = AdTypeEnum.getByName(this.props.adType)
		return value.title
	}

	renderOkButton() {
		const adFinished = this.props.title && this.props.adObject.text
		const adFinished2 = !(AdTypeEnum.getByName(this.props.adType).has_tweet_object && !this.props.tweetObject.id_tweet)
		const returnFinished = this.props.returnType && this.props.returnObject.text
		if(adFinished && adFinished2 && returnFinished) {
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
				console.log("ok")
				this.setState({loading : false})
				this.setState({id_ad : response.id_ad})
				this.setState({id_user : response.id_user})
				this.props.clearState()
			} else {
				this.setState({loading : false})
				//ログインページへ飛ばしてみる
				goTwitterLogin("/ad_create")
			}
		}

		//送信データ
		const payload = new AdCreateInfoDataStructure(this.props)
		this.props.onClickSubmit(payload , callback)
	}

	renderTableCell(data) {
		return data.map(d => {
			return (
			<Table.Row key={d.title} negative={d.negativeFrag}>
				<Table.Cell width="4">{d.title}</Table.Cell>
				<Table.Cell width="6">{d.content}</Table.Cell>
			</Table.Row>
			)
		})
	}

	render() {
		const id_ad = this.state.id_ad
		const id_user = this.state.id_user
		if (id_ad && id_user) {
			return redirectToAdPage(id_user , id_ad)
		}

		const ad_data = [
			{
				title : "してもらいたいこと",
				content : this.getAdTypeTitle() , 
				negativeFrag : this.getAdTypeTitle() === ""
			} , 
			{
				title : "宣伝タイトル",
				content : this.props.title , 
				negativeFrag :  this.props.title === ""
			} , 
			{
				title : "宣伝内容",
				content : this.props.adObject.text, 
				negativeFrag :  this.props.adObject.text === ""
			} , 
			{
				title : "宣伝画像の枚数",
				content : this.props.adObject.images.length + "枚", 
				negativeFrag : false
			} , 
		]

		const return_data = [
			{
				title : "お返しタイプ",
				content : this.getReturnTypeTitle() , 
				negativeFrag : this.getReturnTypeTitle() === ""
			} , 
			{
				title : "お返し",
				content : this.props.returnDescription , 
				negativeFrag :  this.props.returnDescription === ""
			} , 
			{
				title : "お返し内容",
				content : this.props.returnObject.text, 
				negativeFrag :  this.props.returnObject.text === ""
			} , 
			{
				title : "お返し画像の枚数",
				content : this.props.returnObject.images.length + "枚", 
				negativeFrag : false
			} , 
		]

		return (
			<div className="AdCreatePage-ComponentFrame">

				<Table definition color="blue">
					<Table.Body>
						{this.renderTableCell(ad_data)}
					</Table.Body>
				</Table>

				<Table definition color="red">
					<Table.Body>
						{this.renderTableCell(return_data)}
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
