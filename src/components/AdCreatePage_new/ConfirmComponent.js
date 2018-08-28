import React , {Component} from "react"
import { Table , Button } from "semantic-ui-react"
import style from "./AdCreatePage.css"
//Components
import {redirectToAdPage} from "../Redirect/redirect"

//data
import ReturnTypeEnum from "../../domain/enum/ReturnTypeEnum"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"
import AdCreateInfoDataStructure from "../../domain/AdCreateInfoDataStructure"

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
		for(var key of keys2) {
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
		return <Button 
		onClick={this.onClickOk}
		loading={this.state.loading}
		disabled={this.state.loading}
		>送信</Button>
	}

	onClickOk = () => {
		this.setState({loading : true})

		//送信処理
		const callback = (response) => {
			if(response.status == "OK") {
				this.setState({loading : false})
				this.setState({id_ad : response.id_ad})
				this.setState({id_user : response.id_user})
			} else {
				this.setState({loading : false})
				console.log(response.errorMessage)
			}
		}

		//送信データ
		const payload = new AdCreateInfoDataStructure(this.props)
		this.props.onClickSubmit(payload , callback)
	}

	render() {
		const id_ad = this.state.id_ad
		const id_user = this.state.id_user
		if (id_ad && id_user) {
			return redirectToAdPage(id_user , id_ad)
		}

		return (
			<div className="AdCreatePage-ComponentFrame">

				<Table definition color="blue">
					<Table.Body>
						<Table.Row>
							<Table.Cell width="4">してもらいたいこと</Table.Cell>
							<Table.Cell width="6">{this.getAdTypeTitle()}</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>宣伝タイトル</Table.Cell>
							<Table.Cell>{this.props.title}</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>宣伝内容</Table.Cell>
							<Table.Cell>{this.props.adObject.text}</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>宣伝画像の枚数</Table.Cell>
							<Table.Cell>{this.props.adObject.images.length}/4</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>

				<Table definition color="red">
					<Table.Body>
						<Table.Row>
							<Table.Cell width="4">お返しタイプ</Table.Cell>
							<Table.Cell width="6">{this.getReturnTypeTitle()}</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>お返し</Table.Cell>
							<Table.Cell>{this.props.returnDescription}</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>お返し内容</Table.Cell>
							<Table.Cell>{this.props.returnObject.text}</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>お返し画像の枚数</Table.Cell>
							<Table.Cell>{this.props.returnObject.images.length}/4</Table.Cell>
						</Table.Row>
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
