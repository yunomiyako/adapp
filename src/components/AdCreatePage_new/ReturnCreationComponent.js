import React , {Component} from "react"
import { Icon, Step } from "semantic-ui-react"
import style from "./AdCreatePage.css"

//Components
import TypeSelectionComponent from "./TypeSelectionComponent"
import ReturnDescriptionCreateComponent from "./ReturnDescriptionCreateComponent"
import ReturnCreateComponent from "./ReturnCreateComponent"

//data
import returnTypeButtons from "../../domain/returnTypeButtons"

class AdCreationComponent extends Component {
	constructor(props) {
		super(props)
		this.HeadIcon = <Icon name="angle right"/>
	}


	onClickOk() {
		//validate
		this.props.onChangeReturnCreateCompleted(true)
	}

	renderTypeSelectionComponent() {
		return (
			<div>
				<h3 className="AdCreatePage-Title">{this.HeadIcon}どんなお返しを設定しますか？</h3>
				<TypeSelectionComponent
					onClick={(id) => this.props.onChangeReturnType(id)}
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
						onClickOk = {() => this.onClickOk()}
						returnType = {this.props.returnType}
						returnDescription = {this.props.returnDescription}
						onChangeReturnDescription = {(text) => this.props.onChangeReturnDescription(text)}
					></ReturnDescriptionCreateComponent>
				</React.Fragment>)
		}
	}

	renderCreateReturnChild() {
		if(this.props.returnType !== "") {
			return (
				<React.Fragment>
					<h3 className="AdCreatePage-Title">{this.HeadIcon}お返しを作ろう</h3>
					<ReturnCreateComponent
						returnType = {this.props.returnType}
						returnObject = {this.props.returnObject}
						onChangeReturnObject = {(obj) => this.props.onChangeReturnObject(obj)}
					/>
				</React.Fragment>
			)
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
			</div>
		)
	}
}

export default AdCreationComponent
