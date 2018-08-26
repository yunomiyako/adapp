import React , {Component} from "react"
import { Table , Button } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components

//data
import ReturnTypeEnum from "../../domain/enum/ReturnTypeEnum"
import AdTypeEnum from "../../domain/enum/AdTypeEnum"

class ConfirmComponent extends Component {
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

	constructor(props) {
		super(props)
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
		return <Button onClick={this.onClickOk}>送信</Button>
	}

	onClickOk = () => {
		//送信処理
		console.log("onClickOK!!")
	} 

	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<Table definition color="blue">
					<Table.Body>
						<Table.Row>
							<Table.Cell>してもらいたいこと</Table.Cell>
							<Table.Cell>{this.getAdTypeTitle()}</Table.Cell>
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
							<Table.Cell>お返しタイプ</Table.Cell>
							<Table.Cell>{this.getReturnTypeTitle()}</Table.Cell>
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
							<Table.Cell>{this.props.returnObject.images.length}/10</Table.Cell>
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
