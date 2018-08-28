import React , {Component} from "react"
import { Icon, Step , Button } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components
import TypeSelectionComponent from "./TypeSelectionComponent"
import ReturnDescriptionCreateComponent from "./ReturnDescriptionCreateComponent"
import ReturnCreateComponent from "./ReturnCreateComponent"


//data
import returnTypeButtons from "../../domain/returnTypeButtons"
// immutable state change helper
var dotProp = require("dot-prop-immutable")

class ReturnCreationComponent extends Component {
	constructor(props) {
		super(props)
		this.HeadIcon = <Icon name="angle right"/>
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


	onClickOk = () => {
		//validate
		this.props.onChangeReturnCreateCompleted(true)
		if(this.props.adCreateCompleted) {
			this.props.onChangeIndex(2)
		} else {
			this.props.onChangeIndex(0)
		}
	}

	renderTypeSelectionComponent() {
		return (
			<div>
				<h3 className="AdCreatePage-Title">{this.HeadIcon}どんなお返しを設定しますか？</h3>
				<TypeSelectionComponent
					onClick={this.props.onChangeReturnType}
					type = {this.props.returnType}
					buttons = {returnTypeButtons}
				/>
			</div>
		)
	}

	renderTitleCreateComponent() {
		if(this.props.returnType !== "") {
			return(
				<React.Fragment>
					<h3 className="AdCreatePage-Title">{this.HeadIcon}お返しを一言で</h3>
					<ReturnDescriptionCreateComponent
						onClickOk = {this.onClickOk}
						returnType = {this.props.returnType}
						returnDescription = {this.props.returnDescription}
						onChangeReturnDescription = {this.props.onChangeReturnDescription}
					></ReturnDescriptionCreateComponent>
				</React.Fragment>)
		}
	}

	onChangeReturnObject = (obj) => {
		this.props.onChangeReturnObject(obj)
	}

	renderCreateReturnChild() {
		if(this.props.returnType !== "") {
			return (
				<React.Fragment>
					<h3 className="AdCreatePage-Title">{this.HeadIcon}お返しを作ろう</h3>
					<ReturnCreateComponent
						returnType = {this.props.returnType}
						returnObject = {this.props.returnObject}
						onChangeReturnObject = {this.onChangeReturnObject}
					/>
				</React.Fragment>
			)
		}
	}

	renderOkButton() {
		if(this.props.returnDescription !== "") {
			return <Button onClick={() => this.onClickOk()}>OK</Button>
		} else {
			return <Button disabled>OK</Button>
		}
	}

	render() {
		return (
			<div className="AdCreatePage-ComponentFrame">
				<div className={style.tateMargin}>
					{this.renderTypeSelectionComponent()}
				</div>

				<div className={style.tateMargin}>
					{this.renderTitleCreateComponent()}
				</div>

				<div className={style.tateMargin}>
					{this.renderCreateReturnChild()}
				</div>

				<div className={style.OkButtonFrame}>
					<div className="OkButtonCorner">{this.renderOkButton()}</div>
				</div>

			</div>
		)
	}
}

export default ReturnCreationComponent
